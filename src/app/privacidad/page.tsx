import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacidad | SmarterBOT',
  description:
    'Politica de privacidad para SmarterBOT, incluyendo datos tratados para Meta, WhatsApp, formularios, CRM e integraciones.',
  alternates: {
    canonical: 'https://www.smarterbot.store/privacidad',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <section className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
          <p className="text-uppercase text-secondary fw-bold small mb-2">
            Meta y SmarterBOT
          </p>
          <h1 className="display-6 fw-black mb-3">Privacidad</h1>
          <p className="text-secondary mb-4">
            Esta politica explica como tratamos los datos personales cuando
            usas SmarterBOT, sus formularios, sus flujos de WhatsApp y sus
            integraciones con Meta, CRM, automatizacion y analitica.
          </p>

          <h2 className="h5 fw-bold mb-3">Datos que podemos tratar</h2>
          <p className="text-secondary mb-3">
            Podemos tratar nombre, correo, telefono, identificadores de cuenta,
            mensajes, adjuntos, leads, eventos de uso, registros tecnicos y
            informacion necesaria para operar el servicio y dar soporte.
          </p>

          <h2 className="h5 fw-bold mb-3">Uso de la informacion</h2>
          <p className="text-secondary mb-3">
            Usamos esa informacion para responder mensajes, enrutar leads,
            operar automatizaciones, medir rendimiento, prevenir abuso y
            entregar el servicio contratado.
          </p>

          <h2 className="h5 fw-bold mb-3">Comparticion y retencion</h2>
          <p className="text-secondary mb-3">
            Podemos apoyarnos en proveedores de infraestructura, mensajeria,
            analitica y almacenamiento. Solo conservamos los datos por el tiempo
            necesario para prestar el servicio, cumplir obligaciones legales o
            resolver incidentes.
          </p>

          <h2 className="h5 fw-bold mb-3">Tus derechos</h2>
          <p className="text-secondary mb-0">
            Puedes solicitar acceso, correccion o eliminacion de tus datos
            escribiendo a{' '}
            <a href="mailto:soporte@smarterbot.cl">soporte@smarterbot.cl</a>.
            Si la solicitud corresponde a datos de Meta, la procesaremos por el
            canal de soporte indicado en esta web.
          </p>
        </div>
      </div>
    </section>
  );
}
