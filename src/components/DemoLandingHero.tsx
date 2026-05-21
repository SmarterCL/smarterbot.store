import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
interface DemoLandingHeroProps {
  title?: string;
  subtitle?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaHref?: string;
  onPrimaryClick?: () => void;
}

export default function DemoLandingHero({
  title = 'Conecta WhatsApp y automatiza ventas con IA',
  subtitle = 'La solución todo‑en‑uno: CRM, IA y automatizaciones en tu canal de ventas',
  primaryCtaText = 'Reservar demo',
  secondaryCtaText = 'Iniciar sesión',
  primaryCtaHref = '/demo',
  secondaryCtaHref = '/login',
  onPrimaryClick,
}: DemoLandingHeroProps) {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-br from-emerald-600 to-slate-900 text-white p-8 rounded-3xl glassmorphism">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1400&q=80"
            alt="Hero background"
            fill
            style={{ objectFit: 'cover', opacity: 0.5 }}
            priority
          />
        </div>
      <h1 className="text-5xl md:text-6xl font-extrabold text-center mb-4 tracking-tight">
        {title}
      </h1>
      <p className="text-lg md:text-xl text-center max-w-2xl mb-8 opacity-90">
        {subtitle}
      </p>
      <div className="flex gap-4">
        {onPrimaryClick ? (
          <button onClick={onPrimaryClick} className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl shadow-lg transition-colors">{primaryCtaText}</button>
        ) : (
          <Link href={primaryCtaHref} className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl shadow-lg transition-colors">{primaryCtaText}</Link>
        )}
        <Link href={secondaryCtaHref} className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl border border-white/30 transition-colors">{secondaryCtaText}</Link>
      </div>
    </section>
  );
}
