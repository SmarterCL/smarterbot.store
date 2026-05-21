import fs from 'fs';
import path from 'path';

const ROOT = process.cwd();
const TENANTS_FILE = process.env.SMARTER_TENANTS_FILE || path.join(ROOT, 'mcp-gateway', 'tenants.json');
const TENANTS_DIR = process.env.SMARTER_TENANTS_DIR || path.join(ROOT, 'tenants');
const WORKFLOWS_DIR = process.env.SMARTER_WORKFLOWS_DIR || ROOT;
const MCP_ENGINE_URL = process.env.SMARTER_MCP_ENGINE_URL || 'http://127.0.0.1:4000/mcp/execute';
const MCP_ENGINE_TENANT = process.env.SMARTER_MCP_TENANT || 'default';
const MCP_ENGINE_HOST_HEADER = process.env.SMARTER_MCP_ENGINE_HOST_HEADER || '';
const MCP_ENGINE_TIMEOUT_MS = Number(process.env.SMARTER_MCP_ENGINE_TIMEOUT_MS || '10000');

function writeMessage(message) {
  const json = JSON.stringify(message);
  const body = Buffer.from(json, 'utf8');
  const header = Buffer.from(`Content-Length: ${body.length}\r\n\r\n`, 'utf8');
  process.stdout.write(Buffer.concat([header, body]));
}

function sendResult(id, result) {
  writeMessage({ jsonrpc: '2.0', id, result });
}

function sendError(id, code, message, data) {
  writeMessage({
    jsonrpc: '2.0',
    id,
    error: {
      code,
      message,
      ...(data === undefined ? {} : { data }),
    },
  });
}

function readJson(filePath, fallback) {
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch {
    return fallback;
  }
}

function listWorkflowFiles() {
  try {
    return fs
      .readdirSync(WORKFLOWS_DIR, { withFileTypes: true })
      .filter((entry) => entry.isFile() && entry.name.endsWith('.json') && entry.name.startsWith('smarteros_'))
      .map((entry) => entry.name)
      .sort();
  } catch {
    return [];
  }
}

function listTenantNames() {
  const tenants = readJson(TENANTS_FILE, {});
  return Object.values(tenants).sort();
}

async function executeDecision(args) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), MCP_ENGINE_TIMEOUT_MS);

  const headers = {
    'Content-Type': 'application/json',
    'X-Tenant-Id': args.tenant || MCP_ENGINE_TENANT,
  };

  if (MCP_ENGINE_HOST_HEADER) {
    headers.Host = MCP_ENGINE_HOST_HEADER;
  }

  let response;
  try {
    response = await fetch(MCP_ENGINE_URL, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        event_id: args.event_id,
        correlation_id: args.correlation_id || null,
        trust_score: args.trust_score,
        territory: args.territory || 'CL',
        decision: args.decision,
        input_data: args.input_data || {},
      }),
      signal: controller.signal,
    });
  } catch (error) {
    clearTimeout(timeout);
    throw new Error(`MCP engine request failed: ${error.name === 'AbortError' ? 'timeout' : error.message}`);
  }
  clearTimeout(timeout);

  const raw = await response.text();
  let parsed;
  try {
    parsed = JSON.parse(raw);
  } catch {
    parsed = { raw };
  }

  return {
    ok: response.ok,
    status: response.status,
    data: parsed,
  };
}

const tools = [
  {
    name: 'smarter_health',
    description: 'Reporta el estado local de la configuracion MCP y del repo.',
    inputSchema: {
      type: 'object',
      properties: {},
      additionalProperties: false,
    },
  },
  {
    name: 'list_tenants',
    description: 'Lista los tenants definidos en mcp-gateway/tenants.json.',
    inputSchema: {
      type: 'object',
      properties: {},
      additionalProperties: false,
    },
  },
  {
    name: 'list_workflows',
    description: 'Lista los workflows SmarterOS JSON disponibles en el repo.',
    inputSchema: {
      type: 'object',
      properties: {},
      additionalProperties: false,
    },
  },
  {
    name: 'execute_mcp_decision',
    description: 'Envia una decision al motor MCP FastAPI local en /mcp/execute.',
    inputSchema: {
      type: 'object',
      properties: {
        event_id: { type: 'string' },
        correlation_id: { type: 'string' },
        trust_score: { type: 'number' },
        territory: { type: 'string' },
        tenant: { type: 'string' },
        decision: {
          type: 'object',
          properties: {
            action: { type: 'string' },
            tool: { type: 'string' },
            priority: { type: 'string' },
            auto_execute: { type: 'boolean' },
            reason: { type: 'string' },
          },
          required: ['action', 'tool', 'priority', 'auto_execute'],
          additionalProperties: true,
        },
        input_data: {
          type: 'object',
          additionalProperties: true,
        },
      },
      required: ['event_id', 'trust_score', 'decision', 'input_data'],
      additionalProperties: false,
    },
  },
];

async function handleToolCall(name, args = {}) {
  if (name === 'smarter_health') {
    const tenants = readJson(TENANTS_FILE, {});
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(
            {
              repoRoot: ROOT,
              tenantsFile: TENANTS_FILE,
              tenantsConfigured: Object.keys(tenants).length,
              tenantsDirectoryExists: fs.existsSync(TENANTS_DIR),
              workflowsAvailable: listWorkflowFiles().length,
              mcpEngineUrl: MCP_ENGINE_URL,
              mcpEngineHostHeader: MCP_ENGINE_HOST_HEADER || null,
              mcpEngineTimeoutMs: MCP_ENGINE_TIMEOUT_MS,
            },
            null,
            2
          ),
        },
      ],
    };
  }

  if (name === 'list_tenants') {
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify({ tenants: listTenantNames() }, null, 2),
        },
      ],
    };
  }

  if (name === 'list_workflows') {
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify({ workflows: listWorkflowFiles() }, null, 2),
        },
      ],
    };
  }

  if (name === 'execute_mcp_decision') {
    const result = await executeDecision(args);
    return {
      content: [
        {
          type: 'text',
          text: JSON.stringify(result, null, 2),
        },
      ],
      isError: !result.ok,
    };
  }

  throw new Error(`Tool not found: ${name}`);
}

async function handleRequest(message) {
  const { id, method, params } = message;

  if (method === 'initialize') {
    sendResult(id, {
      protocolVersion: '2024-11-05',
      capabilities: { tools: {} },
      serverInfo: {
        name: 'smarteros-local',
        version: '0.2.0',
      },
    });
    return;
  }

  if (method === 'notifications/initialized') {
    return;
  }

  if (method === 'ping') {
    sendResult(id, {});
    return;
  }

  if (method === 'tools/list') {
    sendResult(id, { tools });
    return;
  }

  if (method === 'tools/call') {
    try {
      const result = await handleToolCall(params?.name, params?.arguments || {});
      sendResult(id, result);
    } catch (error) {
      sendError(id, -32000, error.message);
    }
    return;
  }

  sendError(id, -32601, `Method not found: ${method}`);
}

let buffer = Buffer.alloc(0);

function tryConsumeMessages() {
  while (true) {
    const headerEnd = buffer.indexOf('\r\n\r\n');
    if (headerEnd === -1) {
      return;
    }

    const headerText = buffer.subarray(0, headerEnd).toString('utf8');
    const headers = Object.fromEntries(
      headerText
        .split('\r\n')
        .map((line) => {
          const separator = line.indexOf(':');
          return [line.slice(0, separator).trim().toLowerCase(), line.slice(separator + 1).trim()];
        })
    );

    const contentLength = Number(headers['content-length']);
    if (!Number.isFinite(contentLength)) {
      sendError(null, -32600, 'Missing or invalid Content-Length header');
      buffer = Buffer.alloc(0);
      return;
    }

    const messageStart = headerEnd + 4;
    const messageEnd = messageStart + contentLength;
    if (buffer.length < messageEnd) {
      return;
    }

    const body = buffer.subarray(messageStart, messageEnd).toString('utf8');
    buffer = buffer.subarray(messageEnd);

    let message;
    try {
      message = JSON.parse(body);
    } catch (error) {
      sendError(null, -32700, 'Parse error', error.message);
      continue;
    }

    handleRequest(message).catch((error) => {
      sendError(message?.id ?? null, -32603, 'Internal error', error.message);
    });
  }
}

process.stdin.on('data', (chunk) => {
  buffer = Buffer.concat([buffer, chunk]);
  tryConsumeMessages();
});
