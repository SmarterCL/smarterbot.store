import type { Metadata } from 'next';
import Script from 'next/script';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FacebookSDK from '@/components/FacebookSDK';
import ChatWidget from '@/components/ChatWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/index.css';

export const metadata: Metadata = {
  title: 'Smarter Funnel OS | Plataforma operacional de ventas por WhatsApp',
  description:
    'Convierte WhatsApp en tu sistema operativo comercial con funnels, inbox multiagente, IA, automatizacion, pipeline y ERP conectados.',
  keywords: [
    'WhatsApp sales OS',
    'ventas conversacionales',
    'Chatwoot',
    'n8n',
    'Odoo',
    'CRM',
    'automatizacion comercial',
  ],
  authors: [{ name: 'SmarterBOT', url: 'https://smarterbot.store' }],
  openGraph: {
    title: 'Smarter Funnel OS',
    description:
      'Plataforma operacional para ventas conversacionales por WhatsApp.',
    url: 'https://smarterbot.store',
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
        <FacebookSDK />
        <LanguageProvider>
          <div className="app-shell">
            <Navbar />
            <main className="app-shell__main">{children}</main>
            <Footer />
            <ChatWidget />
          </div>
        </LanguageProvider>

        <Script
          id="chatwoot-script"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(d,t) {
                var BASE_URL="https://chat.smarterbot.store";
                var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
                g.src=BASE_URL+"/packs/js/sdk.js";
                g.async = true;
                s.parentNode.insertBefore(g,s);
                g.onload=function(){
                  window.chatwootSDK.run({
                    websiteToken: '86pn4aCm614h4P9JehpbqNoe',
                    baseUrl: BASE_URL
                  })
                }
              })(document,"script");
            `,
          }}
        />
      </body>
    </html>
  );
}
