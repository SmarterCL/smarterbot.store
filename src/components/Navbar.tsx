'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Zap, Search, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

import Image from 'next/image';

const Navbar = () => {
    const { language, setLanguage, t } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t('nav.home'), path: '/' },
        { name: t('nav.clawOs'), path: '/claw-os' },
        { name: t('nav.workflows'), path: '/workflows' },
        { name: t('nav.services'), path: '/services' },
        { name: t('nav.integrations'), path: '/integrations' },
        { name: t('nav.pricing'), path: '/pricing' },
    ];

    return (
        <nav
            className={`navbar navbar-expand-lg fixed-top transition-all duration-300 ${isScrolled ? 'glass-strong shadow-sm' : 'bg-transparent'}`}
            style={{ 
                backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
                borderBottom: isScrolled ? '1px solid rgba(0,0,0,0.05)' : 'none'
            }}
        >
            <div className="container">
                <Link href="/" className="navbar-brand d-flex align-items-center gap-2">
                    <div className="relative w-8 h-8 md:w-10 md:h-10">
                        <Image 
                            src="/assets/images/claw-os/logo.png" 
                            alt="Smarter Claw OS" 
                            width={40} 
                            height={40}
                            className="object-contain"
                        />
                    </div>
                    <div className="d-flex flex-column leading-none">
                        <span className="fw-bold tracking-tight text-dark" style={{ fontSize: '1.25rem' }}>
                            Smarter <span className="text-warning">Claw OS</span>
                        </span>
                        <small className="text-muted fw-medium" style={{ fontSize: '0.65rem', marginTop: '-2px' }}>STORE 2026</small>
                    </div>
                </Link>

                <button 
                    className="navbar-toggler border-0 shadow-none" 
                    type="button" 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`}>
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-1">
                        {navLinks.map((link) => (
                            <li className="nav-item" key={link.path}>
                                <Link
                                    href={link.path}
                                    className={`nav-link px-3 py-2 rounded-pill transition-all ${
                                        pathname === link.path 
                                            ? 'text-warning fw-bold bg-warning bg-opacity-10' 
                                            : 'text-secondary hover-bg-light'
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="d-flex align-items-center gap-2">
                        {/* Language Selector */}
                        <div className="dropdown">
                            <button
                                className="btn btn-sm btn-link text-secondary text-decoration-none d-flex align-items-center gap-1"
                                type="button"
                                onClick={() => setIsLangOpen(!isLangOpen)}
                            >
                                <Globe size={16} />
                                <span className="fw-medium">{language.toUpperCase()}</span>
                            </button>
                            {isLangOpen && (
                                <div className="dropdown-menu show position-absolute end-0 mt-2 shadow-lg border-0 rounded-4 overflow-hidden">
                                    <button
                                        className={`dropdown-item py-2 px-4 ${language === 'es' ? 'bg-warning text-dark fw-bold' : ''}`}
                                        onClick={() => { setLanguage('es'); setIsLangOpen(false); }}
                                    >
                                        Español
                                    </button>
                                    <button
                                        className={`dropdown-item py-2 px-4 ${language === 'en' ? 'bg-warning text-dark fw-bold' : ''}`}
                                        onClick={() => { setLanguage('en'); setIsLangOpen(false); }}
                                    >
                                        English
                                    </button>
                                </div>
                            )}
                        </div>

                        <Link href="/claw-os" className="btn btn-warning px-4 py-2 rounded-pill text-dark fw-bold shadow-sm transition-transform hover-scale">
                            {t('nav.getStarted')}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
