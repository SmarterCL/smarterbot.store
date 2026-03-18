'use client';

import Link from 'next/link';
import { Zap, Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

import Image from 'next/image';

const Footer = () => {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        product: [
            { name: t('nav.clawOs'), path: '/claw-os' },
            { name: t('nav.workflows'), path: '/workflows' },
            { name: t('nav.services'), path: '/services' },
            { name: t('nav.integrations'), path: '/integrations' },
            { name: t('nav.pricing'), path: '/pricing' },
        ],
        integrations: [
            { name: 'Odoo Enterprise', path: '/integrations/odoo' },
            { name: 'Chatwoot Omni', path: '/integrations/chatwoot' },
            { name: 'FastAPI Backend', path: '/integrations/fastapi' },
            { name: 'Meta Marketing', path: '/integrations/meta' },
        ],
        company: [
            { name: t('footer.about'), path: '/about' },
            { name: t('footer.blog'), path: '/blog' },
            { name: t('nav.contact'), path: '/contact' },
            { name: t('footer.support'), path: '/support' },
        ],
        legal: [
            { name: t('footer.privacy'), path: '/privacy' },
            { name: t('footer.terms'), path: '/terms' },
            { name: t('footer.cookies'), path: '/cookies' },
        ],
    };

    const socialLinks = [
        { icon: Github, href: 'https://github.com/SmarterCL', label: 'GitHub' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Mail, href: 'mailto:smarterbotcl@gmail.com', label: 'Email' },
    ];

    return (
        <footer className="bg-white border-t border-gray-100 mt-auto">
            <div className="container py-12">
                {/* Main Footer Content */}
                <div className="row gy-5">
                    {/* Brand Section */}
                    <div className="col-lg-4 col-md-12">
                        <Link href="/" className="d-flex align-items-center gap-2 mb-4 text-decoration-none">
                            <div className="relative w-10 h-10">
                                <Image 
                                    src="/assets/images/claw-os/logo.png" 
                                    alt="Smarter Claw OS" 
                                    width={40} 
                                    height={40}
                                    className="object-contain"
                                />
                            </div>
                            <div className="d-flex flex-column leading-none">
                                <span className="text-xl font-bold tracking-tight text-dark">Smarter <span className="text-warning">Claw OS</span></span>
                                <span className="text-xs text-muted font-medium">STORE 2026</span>
                            </div>
                        </Link>
                        <p className="text-muted text-sm mb-6 max-w-sm">
                            {t('footer.description')}
                        </p>
                        <div className="d-flex gap-2">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-circle border border-gray-200 d-flex align-items-center justify-center text-muted hover-bg-light hover-text-warning transition-all shadow-sm"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Sections */}
                    <div className="col-lg-8 col-md-12">
                        <div className="row g-4">
                            <div className="col-sm-3 col-6">
                                <h6 className="font-bold text-dark mb-4">{t('footer.product')}</h6>
                                <ul className="list-unstyled space-y-2">
                                    {footerLinks.product.map((link) => (
                                        <li key={link.path}>
                                            <Link href={link.path} className="text-muted text-sm text-decoration-none hover-text-warning transition-colors">
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-sm-3 col-6">
                                <h6 className="font-bold text-dark mb-4">{t('footer.integrations')}</h6>
                                <ul className="list-unstyled space-y-2">
                                    {footerLinks.integrations.map((link) => (
                                        <li key={link.path}>
                                            <Link href={link.path} className="text-muted text-sm text-decoration-none hover-text-warning transition-colors">
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-sm-3 col-6">
                                <h6 className="font-bold text-dark mb-4">{t('footer.company')}</h6>
                                <ul className="list-unstyled space-y-2">
                                    {footerLinks.company.map((link) => (
                                        <li key={link.path}>
                                            <Link href={link.path} className="text-muted text-sm text-decoration-none hover-text-warning transition-colors">
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col-sm-3 col-6">
                                <h6 className="font-bold text-dark mb-4">{t('footer.legal')}</h6>
                                <ul className="list-unstyled space-y-2">
                                    {footerLinks.legal.map((link) => (
                                        <li key={link.path}>
                                            <Link href={link.path} className="text-muted text-sm text-decoration-none hover-text-warning transition-colors">
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="border-t border-gray-100 mt-12 pt-8">
                    <div className="d-flex flex-column flex-md-row justify-between align-items-center gap-4">
                        <p className="text-muted text-sm mb-0">
                            © {currentYear} Smarter Claw OS. {t('footer.rights')}
                        </p>
                        <p className="text-muted text-sm mb-0 d-flex align-items-center gap-1">
                            {t('footer.madeWith')} <Heart className="w-4 h-4 text-warning fill-current" /> {t('footer.by')}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
