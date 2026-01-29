import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        product: [
            { name: t('nav.workflows'), path: '/workflows' },
            { name: t('nav.services'), path: '/services' },
            { name: t('nav.integrations'), path: '/integrations' },
            { name: t('nav.pricing'), path: '/pricing' },
        ],
        integrations: [
            { name: 'n8n', path: '/integrations/n8n' },
            { name: 'Odoo', path: '/integrations/odoo' },
            { name: 'Meta Ads', path: '/integrations/meta' },
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
        <footer className="bg-bg-secondary border-t border-border mt-auto">
            <div className="container">
                {/* Main Footer Content */}
                <div className="grid grid-cols-2 md:grid-cols-6 gap-8 py-12">
                    {/* Brand Section */}
                    <div className="col-span-2">
                        <Link to="/" className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow">
                                <Zap className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold gradient-text">SmarterBOT</span>
                                <span className="text-xs text-text-tertiary">.store</span>
                            </div>
                        </Link>
                        <p className="text-text-secondary text-sm mb-6 max-w-sm">
                            {t('footer.description')}
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-lg bg-bg-tertiary border border-border flex items-center justify-center text-text-secondary hover:text-primary-light hover:border-primary transition-all hover:shadow-glow"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 className="font-semibold text-text-primary mb-4">{t('footer.product')}</h4>
                        <ul className="space-y-3">
                            {footerLinks.product.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-text-secondary hover:text-primary-light text-sm transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Integrations Links */}
                    <div>
                        <h4 className="font-semibold text-text-primary mb-4">{t('footer.integrations')}</h4>
                        <ul className="space-y-3">
                            {footerLinks.integrations.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-text-secondary hover:text-primary-light text-sm transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="font-semibold text-text-primary mb-4">{t('footer.company')}</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-text-secondary hover:text-primary-light text-sm transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="font-semibold text-text-primary mb-4">{t('footer.legal')}</h4>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-text-secondary hover:text-primary-light text-sm transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="border-t border-border py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-text-tertiary text-sm">
                            © {currentYear} SmarterBOT.store. {t('footer.rights')}
                        </p>
                        <p className="text-text-tertiary text-sm flex items-center gap-1">
                            {t('footer.madeWith')} <Heart className="w-4 h-4 text-secondary animate-pulse" /> {t('footer.by')}
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
