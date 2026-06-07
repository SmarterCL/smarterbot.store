import type { Metadata } from 'next';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppContactButton from '@/components/WhatsAppContactButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/index.css';

export const metadata: Metadata = {
  title: 'Smarter Funnel OS | Plataforma operacional de ventas por WhatsApp',
  description:
    'Convierte WhatsApp en tu sistema operativo comercial con funnels, inbox multiagente, IA, automatizacion, pipeline y ERP conectados.',
  keywords: [
    'WhatsApp sales OS',
    'ventas conversacionales',
    'CRM',
    'automatizacion comercial',
    'pipeline',
    'inbox',
  ],
  authors: [{ name: 'SmarterBOT', url: 'https://www.smarterbot.store' }],
  openGraph: {
    title: 'Smarter Funnel OS',
    description:
      'Plataforma operacional para ventas conversacionales por WhatsApp.',
    url: 'https://www.smarterbot.store',
    siteName: 'SmarterBOT.store',
    locale: 'es_ES',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <LanguageProvider>
          <div className="app-shell">
            <Navbar />
            <main className="app-shell__main">{children}</main>
            <Footer />
            <WhatsAppContactButton />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
