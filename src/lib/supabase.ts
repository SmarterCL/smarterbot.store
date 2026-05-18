import type { Session, User } from '@supabase/supabase-js';
import { createSupabaseBrowserClient, hasSupabaseEnv } from '@/lib/supabase/client';

export { hasSupabaseEnv } from '@/lib/supabase/client';

export const supabaseEnvError = hasSupabaseEnv
  ? null
  : 'Faltan NEXT_PUBLIC_SUPABASE_URL y NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY para habilitar el login.';

export const supabase = createSupabaseBrowserClient();

export type AuthSession = Session | null;
export type AuthUser = User | null;

export function getAuthCallbackUrl(nextPath?: string) {
  if (typeof window === 'undefined') {
    return undefined;
  }

  const callbackUrl = new URL('/auth/callback', window.location.origin);

  if (nextPath) {
    callbackUrl.searchParams.set('next', normalizeNextPath(nextPath));
  }

  return callbackUrl.toString();
}

export function normalizeNextPath(nextPath?: string | null) {
  if (!nextPath || !nextPath.startsWith('/')) {
    return '/dashboard';
  }

  return nextPath;
}

export function inferTenantId(user: AuthUser) {
  if (!user) {
    return 'smarterbot';
  }

  const appTenant =
    (typeof user.app_metadata?.tenant_id === 'string' && user.app_metadata.tenant_id) ||
    (typeof user.user_metadata?.tenant_id === 'string' && user.user_metadata.tenant_id);

  return appTenant || 'smarterbot';
}
