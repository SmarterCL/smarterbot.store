import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Eliminacion de datos | SmarterBOT',
  description:
    'Instrucciones para solicitar la eliminacion de datos asociados a SmarterBOT y sus integraciones con Meta.',
  robots: {
    index: true,
    follow: true,
  },
};

export default function DataDeletionPage() {
  return (
    <section className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
          <p className="text-uppercase text-secondary fw-bold small mb-2">
            SmarterBOT y Meta
          </p>
          <h1 className="display-6 fw-black mb-3">
            Eliminacion de datos de usuario
          </h1>
          <p className="text-secondary mb-4">
            Esta pagina explica como solicitar la eliminacion de informacion
            asociada a tu cuenta, conversaciones o uso de integraciones de
            SmarterBOT conectadas con productos de Meta, como Facebook,
            Instagram o WhatsApp.
          </p>

          <h2 className="h5 fw-bold mb-3">Como solicitar la eliminacion</h2>
          <p className="text-secondary mb-3">
            Para pedir la eliminacion de tus datos, envia una solicitud a{' '}
            <a href="mailto:soporte@smarterbot.cl">soporte@smarterbot.cl</a>{' '}
            con el asunto &quot;Eliminacion de datos&quot; e incluye la
            informacion necesaria para identificar tu registro, por ejemplo tu
            nombre, correo, numero de WhatsApp o identificador de la cuenta
            conectada.
          </p>
          <p className="text-secondary mb-4">
            Revisaremos la solicitud, validaremos la titularidad cuando sea
            necesario y eliminaremos o anonimizaremos los datos personales que
            correspondan segun nuestras obligaciones operativas, contractuales y
            legales.
          </p>

          <h2 className="h5 fw-bold mb-3">Que datos pueden eliminarse</h2>
          <p className="text-secondary mb-3">
            La solicitud puede cubrir datos de contacto, mensajes, registros de
            integracion, informacion de leads, preferencias y otros datos
            personales tratados por SmarterBOT para entregar sus servicios.
          </p>
          <p className="text-secondary mb-4">
            Algunos registros tecnicos, contables, de seguridad o cumplimiento
            pueden conservarse por el tiempo estrictamente necesario cuando la
            ley, una obligacion contractual o la prevencion de fraude lo exija.
          </p>

          <h2 className="h5 fw-bold mb-3">Plazo de respuesta</h2>
          <p className="text-secondary mb-0">
            Responderemos la solicitud a traves del mismo correo de contacto.
            Si falta informacion para identificar la cuenta o validar la
            solicitud, pediremos antecedentes adicionales antes de completar el
            proceso.
          </p>
        </div>
      </div>
    </section>
  );
}
