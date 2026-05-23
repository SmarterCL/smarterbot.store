'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Zap, Menu, X, ArrowRight, User } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Problema', href: '/#problema' },
    { name: 'Modulos', href: '/#modulos' },
    { name: 'Operacion', href: '/#operacion' },
    { name: 'Sectores', href: '/#sectores' },
    { name: 'Diferencial', href: '/#diferencial' },
    { name: 'QR Connect', href: '/connect' },
  ];

  return (
    <nav className={`site-navbar fixed-top transition-all duration-500 ${
      isScrolled ? 'py-3 navbar-scrolled' : 'py-5 navbar-top'
    }`}>
      <div className="container">
        <div className={`site-navbar__shell rounded-full px-4 py-2 flex items-center justify-between ${
          isScrolled ? 'site-navbar__shell--scrolled' : 'site-navbar__shell--top'
        }`}>
          {/* Logo */}
          <Link href="/" className="d-flex align-items-center gap-2 text-decoration-none group ps-2">
            <div className="rounded-xl bg-black p-1.5 d-flex align-items-center justify-content-center transition-transform group-hover:rotate-12" style={{ width: '36px', height: '36px' }}>
              <Zap size={22} className="text-success" fill="currentColor" />
            </div>
            <span className="fw-black tracking-tighter text-black fs-4 leading-none">
              SMARTER
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="d-none d-lg-flex align-items-center gap-1">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`px-3 py-2 rounded-full text-[10px] font-black uppercase tracking-wider text-decoration-none transition-all whitespace-nowrap ${
                  pathname === link.href || (pathname === '/' && link.href.startsWith('/#'))
                  ? 'bg-black text-white' 
                  : 'text-secondary hover:bg-soft hover:text-black'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="d-flex align-items-center gap-2 pe-1">
            <Link href="/login" className="d-none d-sm-flex align-items-center gap-2 px-3 py-2 rounded-full bg-soft text-black text-[10px] font-black uppercase tracking-wider text-decoration-none transition-all hover:bg-subtle hover-scale cta-chip whitespace-nowrap">
              <User size={14} className="text-success" />
              Login
            </Link>
            <Link href="/connect" className="d-none d-sm-flex align-items-center gap-2 px-3 py-2 rounded-full bg-soft text-black text-[10px] font-black uppercase tracking-wider text-decoration-none transition-all hover:bg-subtle hover-scale cta-chip whitespace-nowrap">
              QR Connect <ArrowRight size={14} className="text-success" />
            </Link>
            <Link href="/register" className="btn btn-black rounded-full px-4 py-2 text-[10px] font-black uppercase tracking-wider d-flex align-items-center gap-2 hover-scale btn-cta-dynamic whitespace-nowrap">
              Solicitar demo <ArrowRight size={14} className="text-success" />
            </Link>
            
            {/* Mobile Toggle */}
            <button 
              className="d-lg-none btn btn-soft rounded-full p-2.5 ms-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white p-6 animate-in fade-in slide-in-from-right duration-300">
          <div className="flex justify-between items-center mb-12">
            <span className="fw-black tracking-tighter text-black fs-4">SMARTER</span>
            <button className="btn btn-soft rounded-full p-2" onClick={() => setIsMobileMenuOpen(false)}>
              <X size={24} />
            </button>
          </div>
          <div className="space-y-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="d-block text-4xl font-black tracking-tighter text-black text-decoration-none hover:text-success transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="mt-12 pt-12 border-t border-light">
             <Link href="/register" className="btn btn-success-premium w-100 py-4 fs-4 mb-4">
                SOLICITAR DEMO
             </Link>
             <Link href="/connect" className="btn btn-soft w-100 py-4 fs-4 mb-4">
                QR CONNECT
             </Link>
             <Link href="/login" className="btn btn-black w-100 py-4 fs-4">
                LOGIN
             </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
