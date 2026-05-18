export default function SupportPage() {
  return (
    <section className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8">
          <span className="badge text-bg-dark rounded-pill px-3 py-2 mb-3">Soporte</span>
          <h1 className="display-6 fw-black mb-3">Soporte técnico y continuidad operacional.</h1>
          <p className="text-secondary fs-5 mb-4">
            Esta página queda como punto base para soporte. Cuando conectemos el stack real, aquí puedes enlazar el inbox de soporte, status page y runbooks.
          </p>
          <div className="bg-white rounded-4 border border-light p-4 shadow-sm">
            <p className="mb-2"><strong>Contacto inicial:</strong> <a href="mailto:smarterbotcl@gmail.com">smarterbotcl@gmail.com</a></p>
            <p className="mb-0"><strong>Scope:</strong> acceso, workflows, dashboard, integraciones y operación comercial.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
