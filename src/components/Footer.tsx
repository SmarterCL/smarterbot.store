'use client';

import Link from 'next/link';
import { Mail, Zap, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white py-16 border-top border-light">
      <div className="container">
        <div className="row g-5">
          {/* Brand & Mission */}
          <div className="col-lg-4">
            <Link href="/" className="d-flex align-items-center gap-2 mb-4">
              <div className="rounded-lg bg-black p-1 d-flex align-items-center justify-content-center" style={{ width: '32px', height: '32px' }}>
                <Zap size={20} className="text-white" fill="currentColor" />
              </div>
              <span className="fw-black tracking-tighter text-black fs-4">
                SMARTER
              </span>
            </Link>
            <p className="text-secondary small fw-bold leading-relaxed mb-6">
              Plataforma operacional para ventas conversacionales por WhatsApp. Funnels, inbox multiagente, IA, automatizacion, pipeline y ERP en un solo sistema.
            </p>
            <div className="d-flex gap-3">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-xl bg-soft flex items-center justify-center text-secondary transition-all hover:bg-black hover:text-white">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Navigation Groups */}
          <div className="col-lg-8">
            <div className="row g-4">
              <div className="col-sm-4">
                <h5 className="text-[10px] font-black uppercase tracking-widest text-black mb-4">Plataforma</h5>
                <ul className="list-unstyled space-y-3">
                  <li><Link href="/#problema" className="text-secondary small fw-bold hover-text-success transition-all">Problema</Link></li>
                  <li><Link href="/#modulos" className="text-secondary small fw-bold hover-text-success transition-all">Modulos</Link></li>
                  <li><Link href="/#operacion" className="text-secondary small fw-bold hover-text-success transition-all">Operacion</Link></li>
                  <li><Link href="/#sectores" className="text-secondary small fw-bold hover-text-success transition-all">Sectores</Link></li>
                  <li><Link href="/connect" className="text-secondary small fw-bold hover-text-success transition-all">QR Connect</Link></li>
                  <li><Link href="/login" className="text-secondary small fw-bold hover-text-success transition-all">Login</Link></li>
                </ul>
              </div>
              
              <div className="col-sm-4">
                <h5 className="text-[10px] font-black uppercase tracking-widest text-black mb-4">Solucion</h5>
                <ul className="list-unstyled space-y-3">
                  <li><span className="text-secondary small fw-bold">WhatsApp multiagente</span></li>
                  <li><span className="text-secondary small fw-bold">IA y clasificacion</span></li>
                  <li><span className="text-secondary small fw-bold">Automatizacion operacional</span></li>
                  <li><span className="text-secondary small fw-bold">CRM + ERP conectados</span></li>
                </ul>
              </div>

              <div className="col-sm-4">
                <h5 className="text-[10px] font-black uppercase tracking-widest text-black mb-4">Contacto</h5>
                <ul className="list-unstyled space-y-3">
                  <li><Link href="/connect" className="text-secondary small fw-bold hover-text-success transition-all">Conectar WhatsApp</Link></li>
                  <li><Link href="/register" className="text-secondary small fw-bold hover-text-success transition-all">Solicitar demo</Link></li>
                  <li><Link href="/contact" className="text-secondary small fw-bold hover-text-success transition-all">Hablar con ventas</Link></li>
                  <li><Link href="/support" className="text-secondary small fw-bold hover-text-success transition-all">Soporte tecnico</Link></li>
                  <li><Link href="/eliminacion" className="text-secondary small fw-bold hover-text-success transition-all">Eliminacion de datos</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-light flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-secondary opacity-50 x-small fw-bold mb-0">
            &copy; {new Date().getFullYear()} Smarter Business Systems. Todos los derechos reservados.
          </p>
          <div className="d-flex align-items-center gap-4">
            <a href="mailto:smarterbotcl@gmail.com" className="text-black fw-black text-[10px] uppercase tracking-widest flex items-center gap-2 hover-text-success transition-all">
              <Mail size={14} /> smarterbotcl@gmail.com
            </a>
            <div className="badge-premium py-1 px-3 d-flex align-items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
              Funnel OS Live
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .x-small { font-size: 0.7rem; }
        .hover-text-success:hover { color: #10b981 !important; transform: translateX(4px); }
        .leading-relaxed { line-height: 1.6; }
        .space-y-3 > li + li { margin-top: 0.75rem; }
      `}</style>
    </footer>
  );
};

export default Footer;
