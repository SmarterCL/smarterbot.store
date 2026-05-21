'use client';

import { 
  CheckCircle2, 
  Package, 
  RefreshCw, 
  FileText, 
  Zap, 
  ArrowRight, 
  Smartphone, 
  Globe, 
  ShieldCheck,
  Bell,
  Settings,
  Layers,
  Search,
  ChevronRight
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function SmarterEcommercePage() {
  const marketplaceLogos = [
    'MERCADO LIBRE',
    'LINIO',
    'SHOPIFY',
    'AMAZON',
    'MAGENTO',
  ];

  return (
    <div className="landing-wrapper">
      {/* HERO SECTION */}
      <section className="hero-section py-7 pt-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="badge-premium mb-4">Solución E-commerce Profesional</div>
              <h1 className="display-1 mb-4">
                Vende fácilmente <br/>
                <span className="text-gradient">Crea tu sistema</span> y empieza hoy
              </h1>
              <p className="lead text-secondary mb-5 fs-4">
                Productos, inventarios, ventas, envíos, ¡gestiona todo de forma organizada! No es solo una web, es tu centro de operaciones e-commerce.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 hero-cta-group">
                <Link href="/register" className="btn btn-success-premium btn-cta-dynamic d-flex align-items-center justify-content-center gap-2">
                  PRUÉBALO GRATIS AHORA <ArrowRight size={20} />
                </Link>
                <Link href="#funcionalidades" className="btn btn-outline-dark rounded-pill px-5 py-3 fw-black uppercase tracking-widest d-flex align-items-center justify-content-center cta-outline-dynamic">
                  Ver Funciones
                </Link>
              </div>
              <div className="mt-5 d-flex align-items-center gap-4">
                <div className="d-flex align-items-center gap-2 text-secondary small fw-bold">
                  <ShieldCheck size={18} className="text-success" />
                  Garantía de Configuración
                </div>
                <div className="d-flex align-items-center gap-2 text-secondary small fw-bold">
                  <CheckCircle2 size={18} className="text-success" />
                  Odoo v19.2 Ready
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative">
                <div className="absolute top-0 start-0 w-100 h-100 bg-success opacity-10 rounded-4xl blur-3xl"></div>
                <div className="relative bg-white p-2 rounded-4xl shadow-2xl border border-light float-anim">
                  <Image 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80" 
                    alt="Smarter Dashboard" 
                    width={800} 
                    height={600} 
                    className="img-premium"
                  />
                  <div className="position-absolute bottom-0 end-0 m-4 p-4 bg-white rounded-3xl shadow-xl border border-light">
                    <div className="d-flex align-items-center gap-3">
                      <div className="bg-success-subtle p-2 rounded-circle">
                        <Zap size={24} className="text-success" />
                      </div>
                      <div>
                        <div className="small text-secondary fw-bold">Ventas Hoy</div>
                        <div className="h4 mb-0 fw-black">+245%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND TRANSITION */}
      <section className="py-4 bg-soft border-y border-light overflow-hidden">
        <div className="container">
          <div className="brand-marquee">
            <div className="brand-marquee__track">
              {[...marketplaceLogos, ...marketplaceLogos].map((brand, index) => (
                <div key={`${brand}-${index}`} className="brand-pill h4 fw-black tracking-tighter grayscale mb-0">
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FUNCIONALIDADES */}
      <section id="funcionalidades" className="py-7">
        <div className="container">
          <div className="row justify-content-center text-center mb-6">
            <div className="col-lg-8">
              <h2 className="display-4 mb-4">Todo el poder de <span className="text-gradient">Smarter</span> para tu negocio</h2>
              <p className="lead text-secondary">
                Gestiona tu catálogo completo, sincroniza stock en tiempo real y automatiza tu facturación desde una sola plataforma.
              </p>
            </div>
          </div>

          <div className="row g-4">
            {[
              { 
                icon: <Package size={32} />, 
                title: 'Creación masiva de productos', 
                desc: 'Crea tus productos en Smarter una vez y lánzalos en todos los marketplaces en un clic. Gestiona estados (Activar, pausar, borrar) de forma global.' 
              },
              { 
                icon: <RefreshCw size={32} />, 
                title: 'Actualización automática', 
                desc: 'Si modificas stock, precio, imágenes o nombre, Smarter lo actualizará de forma automática en todos los canales conectados.' 
              },
              { 
                icon: <FileText size={32} />, 
                title: 'Facturación Electrónica', 
                desc: 'Factura de forma individual o a público general todas tus ventas. Controla, gestiona y automatiza el proceso en pocos clics.' 
              },
              { 
                icon: <Smartphone size={32} />, 
                title: 'Gestión multicanal', 
                desc: 'Actualización automática de stock en todos los marketplaces conectados cada vez que realices una venta.' 
              },
              { 
                icon: <Layers size={32} />, 
                title: 'Exportación total', 
                desc: 'Exporta en cualquier momento información de productos, ventas, stock fulfillment, guías y fichas técnicas.' 
              },
              { 
                icon: <Search size={32} />, 
                title: 'Importación y Mapeo', 
                desc: '¿Ya tienes catálogo en Mercado Libre o Linio? Solicita una importación masiva o un mapeo automático a tu sistema.' 
              },
              { 
                icon: <Globe size={32} />, 
                title: 'Métodos de integración', 
                desc: 'Ofrecemos más de 20 formas de integrarse. Sincroniza tu sistema externo y consume nuestras funciones vía API.' 
              },
              { 
                icon: <Settings size={32} />, 
                title: 'Configuración Avanzada', 
                desc: 'Reglas de precio por canal, alertas de stock mínimo, reportes de errores y campos personalizados por marketplace.' 
              }
            ].map((feat, i) => (
              <div key={i} className="col-md-6 col-lg-3">
                <div className="h-100 p-4 rounded-4xl bg-soft hover-lift border-0">
                  <div className="bg-white p-3 rounded-3xl shadow-sm d-inline-flex mb-4 text-success">
                    {feat.icon}
                  </div>
                  <h4 className="fw-black mb-3 fs-5">{feat.title}</h4>
                  <p className="text-secondary small fw-medium mb-0 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE HIGHLIGHT - WOMAN ILLUSTRATION PLACEHOLDER */}
      <section className="py-7 bg-black text-white rounded-4xl mx-3 mx-lg-5 overflow-hidden position-relative">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <h2 className="display-4 fw-black mb-4 text-white">Facturación y Gestión en un solo clic</h2>
              <p className="lead text-white-50 mb-5">
                La solución de facturación electrónica de Smarter permite controlar, gestionar y automatizar el proceso de facturación en pocos clics para que te enfoques en vender.
              </p>
              <div className="d-grid gap-3">
                <div className="d-flex align-items-center gap-3 p-3 bg-white bg-opacity-10 rounded-3xl border border-white border-opacity-10">
                   <Bell className="text-success" />
                   <div>
                     <div className="fw-bold">Alertas y Notificaciones</div>
                     <div className="small text-white-50">Avisos por correo cuando el stock llega a su límite.</div>
                   </div>
                </div>
                <div className="d-flex align-items-center gap-3 p-3 bg-white bg-opacity-10 rounded-3xl border border-white border-opacity-10">
                   <Smartphone className="text-success" />
                   <div>
                     <div className="fw-bold">Gestión Móvil</div>
                     <div className="small text-white-50">Controla tu inventario desde cualquier lugar.</div>
                   </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-center">
              <div className="position-relative d-inline-block">
                <Image 
                  src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80" 
                  alt="Gestión E-commerce" 
                  width={600} 
                  height={600} 
                  className="img-fluid rounded-4xl shadow-2xl"
                />
                {/* Simulated Floating UI Elements */}
                <div className="position-absolute top-0 end-0 m-n3 bg-success p-3 rounded-4 shadow-lg rotate-12">
                   <CheckCircle2 className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ODOO & MERCADO PAGO */}
      <section className="py-7">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6">
              <div className="h-100 p-5 rounded-4xl bg-subtle">
                <div className="badge bg-black text-white mb-4 px-3 py-1 rounded-pill small fw-black tracking-widest">NUEVA VERSIÓN</div>
                <h3 className="display-5 mb-4">Odoo v19.2</h3>
                <p className="text-secondary mb-4">
                  Reconfiguramos Odoo como una verdadera tienda e-commerce integrada. Olvídate de la web estática; ahora tienes un sistema vivo que respira ventas.
                </p>
                <ul className="list-unstyled mb-5 space-y-3">
                  <li className="d-flex align-items-center gap-3 fw-bold">
                    <ChevronRight size={20} className="text-success" /> Sincronización total de inventarios
                  </li>
                  <li className="d-flex align-items-center gap-3 fw-bold">
                    <ChevronRight size={20} className="text-success" /> Gestión de envíos automatizada
                  </li>
                  <li className="d-flex align-items-center gap-3 fw-bold">
                    <ChevronRight size={20} className="text-success" /> CRM integrado con clientes reales
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="h-100 p-5 rounded-4xl border border-light shadow-sm">
                <div className="badge bg-success-subtle text-success mb-4 px-3 py-1 rounded-pill small fw-black tracking-widest">PAGOS SEGUROS</div>
                <h3 className="display-5 mb-4">Flow Mercado Pago</h3>
                <p className="text-secondary mb-4">
                  Integramos el flujo completo de Mercado Pago para que recibas tus cobros de forma segura y automática.
                </p>
                <div className="bg-light p-4 rounded-3xl mb-4">
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <span className="fw-bold">Estado del Pago</span>
                    <span className="badge bg-success text-white">APROBADO</span>
                  </div>
                  <div className="h2 mb-0 fw-black">$129.990 CLP</div>
                </div>
                <button className="btn btn-dark w-100 py-3 rounded-pill fw-black d-flex align-items-center justify-content-center gap-2 btn-cta-dynamic">
                  Configurar Pasarela <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-7 text-center">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="display-3 mb-4">Crea tu sistema y empieza hoy</h2>
            <p className="lead text-secondary mb-5">
              Empieza a vender en todos los canales con la potencia de Smarter. Sin complicaciones técnicas.
            </p>
            <Link href="/register" className="btn btn-success-premium btn-cta-dynamic px-5 py-4 fs-4">
              EMPEZAR GRATIS AHORA
            </Link>
          </div>
        </div>
      </section>

      <style jsx>{`
        .rounded-4xl { border-radius: 2.5rem !important; }
        .bg-success-subtle { background-color: rgba(16, 185, 129, 0.1); }
        .text-success { color: #10b981 !important; }
        .max-w-3xl { max-width: 800px; }
        .leading-relaxed { line-height: 1.6; }
        .space-y-2 > li + li { margin-top: 0.5rem; }
        .space-y-3 > li + li { margin-top: 0.75rem; }
      `}</style>
    </div>
  );
}
