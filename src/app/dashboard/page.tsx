import { redirect } from 'next/navigation';
import SmarterDashboard from '@/components/dashboard/SmarterDashboard';
import { getDashboardData } from '@/lib/dashboard';
import { inferTenantId, hasSupabaseEnv } from '@/lib/supabase';
import { createSupabaseServerClient } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';

export default async function DashboardPage() {
  if (!hasSupabaseEnv) {
    const demoData = await getDashboardData('smarterbot', null, null);
    return <SmarterDashboard data={demoData} />;
  }

  const supabase = await createSupabaseServerClient();

  if (!supabase) {
    redirect('/login?next=/dashboard');
  }

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login?next=/dashboard');
  }

  const tenantId = inferTenantId(user);
  const dashboardData = await getDashboardData(tenantId, user.email ?? null, session?.access_token ?? null);

  return <SmarterDashboard data={dashboardData} />;
}
