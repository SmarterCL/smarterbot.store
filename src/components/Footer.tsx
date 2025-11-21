import { Link } from 'react-router-dom';
import { Zap, Github, Twitter, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        product: [
            { name: 'Workflows', path: '/workflows' },
            { name: 'Services', path: '/services' },
            { name: 'Integrations', path: '/integrations' },
            { name: 'Pricing', path: '/pricing' },
        ],
        integrations: [
            { name: 'n8n', path: '/integrations/n8n' },
            { name: 'Odoo', path: '/integrations/odoo' },
            { name: 'Shopify', path: '/integrations/shopify' },
            { name: 'Meta Ads', path: '/integrations/meta' },
        ],
        company: [
            { name: 'About', path: '/about' },
            { name: 'Blog', path: '/blog' },
            { name: 'Contact', path: '/contact' },
            { name: 'Support', path: '/support' },
        ],
        legal: [
            { name: 'Privacy Policy', path: '/privacy' },
            { name: 'Terms of Service', path: '/terms' },
            { name: 'Cookie Policy', path: '/cookies' },
        ],
    };

    const socialLinks = [
        { icon: Github, href: 'https://github.com/Zie619', label: 'GitHub' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Mail, href: 'mailto:contact@smarterbot.store', label: 'Email' },
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
                            Automation workflows and integrations for modern businesses. Deploy powerful
                            n8n workflows, connect Odoo, Shopify, Meta Ads, and more.
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
                        <h4 className="font-semibold text-text-primary mb-4">Product</h4>
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
                        <h4 className="font-semibold text-text-primary mb-4">Integrations</h4>
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
                        <h4 className="font-semibold text-text-primary mb-4">Company</h4>
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
                        <h4 className="font-semibold text-text-primary mb-4">Legal</h4>
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
                            © {currentYear} SmarterBOT.store. All rights reserved.
                        </p>
                        <p className="text-text-tertiary text-sm flex items-center gap-1">
                            Made with <Heart className="w-4 h-4 text-secondary animate-pulse" /> by the
                            SmarterBOT team
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
