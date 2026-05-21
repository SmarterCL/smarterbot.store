import LoginPageClient from '@/components/LoginPageClient';
import { normalizeNextPath } from '@/lib/supabase';

type LoginPageProps = {
  searchParams?: Promise<{
    next?: string;
    message?: string;
    error?: string;
  }>;
};

export default async function LoginPage({ searchParams }: LoginPageProps) {
  const resolvedSearchParams = searchParams ? await searchParams : undefined;
  const nextPath = normalizeNextPath(resolvedSearchParams?.next);
  const message = resolvedSearchParams?.message ?? null;
  const error = resolvedSearchParams?.error ?? null;

  return <LoginPageClient nextPath={nextPath} message={message} error={error} />;
}
