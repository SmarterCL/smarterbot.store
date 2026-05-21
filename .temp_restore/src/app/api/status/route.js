import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

function readOpenClawEvents() {
  const logFile = path.join(process.cwd(), 'logs/openclaw-events.jsonl');

  try {
    const data = fs.readFileSync(logFile, 'utf-8');
    return data
      .split('\n')
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => JSON.parse(line));
  } catch {
    return [];
  }
}

export async function GET() {
  const recentEvents = readOpenClawEvents().slice(-100);
  const errors = recentEvents.filter((event) => event.status === 'error').length;
  const success = recentEvents.filter((event) => event.status === 'success').length;

  let status = 'operational';
  let message = 'All systems operational';

  if (errors > success * 0.3) {
    status = 'degraded';
    message = 'Some systems experiencing issues';
  }

  if (errors > success) {
    status = 'down';
    message = 'System experiencing major issues';
  }

  const totalAgents = new Set(recentEvents.map((event) => event.agent)).size;
  const activeAgents = new Set(
    recentEvents
      .filter((event) => event.status === 'success')
      .map((event) => event.agent)
  ).size;

  return NextResponse.json({
    status,
    message,
    uptime: totalAgents > 0 ? Math.round((activeAgents / totalAgents) * 100) : 100,
    activeAgents,
    totalAgents,
    lastUpdate: new Date().toISOString(),
  });
}
