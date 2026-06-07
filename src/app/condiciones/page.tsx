import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Condiciones | SmarterBOT',
  description:
    'Condiciones de uso de SmarterBOT para servicios conectados con Meta, WhatsApp, CRM y automatizacion comercial.',
  alternates: {
    canonical: 'https://www.smarterbot.store/condiciones',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ConditionsPage() {
  return (
    <section className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
          <p className="text-uppercase text-secondary fw-bold small mb-2">
            Meta y SmarterBOT
          </p>
          <h1 className="display-6 fw-black mb-3">Condiciones de uso</h1>
          <p className="text-secondary mb-4">
            Estas condiciones regulan el acceso y uso de SmarterBOT, sus
            paginas publicas y los flujos que se conectan con productos de Meta,
            WhatsApp, CRM, automatizacion y soporte.
          </p>

          <h2 className="h5 fw-bold mb-3">Uso permitido</h2>
          <p className="text-secondary mb-3">
            Debes usar el servicio de forma licita, respetando derechos de
            terceros, politicas de Meta y cualquier acuerdo comercial vigente.
            No esta permitido intentar vulnerar el sistema, interferir con otros
            usuarios o usar el servicio para spam o fraude.
          </p>

          <h2 className="h5 fw-bold mb-3">Servicio y soporte</h2>
          <p className="text-secondary mb-3">
            SmarterBOT puede incorporar integraciones de terceros, automatismos,
            bots y funciones en desarrollo. El soporte se entrega por los
            canales publicados en el sitio y puede requerir validacion de la
            cuenta.
          </p>

          <h2 className="h5 fw-bold mb-3">Datos y contenidos</h2>
          <p className="text-secondary mb-3">
            Eres responsable del contenido que envias o procesas a traves del
            servicio. Debes contar con los permisos necesarios para tratar los
            datos de clientes, prospectos o usuarios finales que ingreses al
            sistema.
          </p>

          <h2 className="h5 fw-bold mb-3">Suspension y cambios</h2>
          <p className="text-secondary mb-0">
            Podemos suspender accesos por seguridad, incumplimiento o
            mantenimiento, y actualizar estas condiciones cuando sea necesario
            para reflejar cambios operativos, legales o de integracion.
          </p>
        </div>
      </div>
    </section>
  );
}
