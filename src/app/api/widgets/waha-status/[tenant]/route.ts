import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ tenant: string }> }
) {
  const { tenant } = await params;
  
  // proxy to the real WAHA internal API or Hermes endpoint.
  // For now, we simulate the proxy response.
  return NextResponse.json({
    session: tenant,
    status: 'connected',
    phone: '+56 9 ' + Math.floor(10000000 + Math.random() * 90000000).toString(),
    qr: null,
    last_seen: new Date().toISOString()
  });
}
