import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap, Search, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar = () => {
    const { language, setLanguage, t } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t('nav.home'), path: '/' },
        { name: t('nav.workflows'), path: '/workflows' },
        { name: t('nav.services'), path: '/services' },
        { name: t('nav.integrations'), path: '/integrations' },
        { name: t('nav.pricing'), path: '/pricing' },
        { name: t('nav.contact'), path: '/contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-strong shadow-lg' : 'bg-transparent'
                }`}
        >
            <div className="container">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow">
                            <Zap className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bold gradient-text">SmarterBOT</span>
                            <span className="text-xs text-text-tertiary">.store</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-sm font-medium transition-colors relative group ${location.pathname === link.path
                                    ? 'text-primary-light'
                                    : 'text-text-secondary hover:text-text-primary'
                                    }`}
                            >
                                {link.name}
                                <span
                                    className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-primary transform transition-transform ${location.pathname === link.path
                                        ? 'scale-x-100'
                                        : 'scale-x-0 group-hover:scale-x-100'
                                        }`}
                                />
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        {/* Language Selector */}
                        <div className="relative">
                            <button
                                className="btn-icon btn-secondary flex items-center gap-2 px-3 w-auto"
                                onClick={() => setIsLangOpen(!isLangOpen)}
                            >
                                <Globe className="w-4 h-4" />
                                <span className="text-xs uppercase font-bold">{language}</span>
                            </button>
                            {isLangOpen && (
                                <div className="absolute top-full right-0 mt-2 w-32 glass border border-border rounded-xl p-2 shadow-xl animate-scale-in origin-top-right">
                                    <button
                                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${language === 'es' ? 'bg-primary/20 text-primary-light' : 'hover:bg-bg-tertiary text-text-secondary'}`}
                                        onClick={() => { setLanguage('es'); setIsLangOpen(false); }}
                                    >
                                        Español
                                    </button>
                                    <button
                                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${language === 'en' ? 'bg-primary/20 text-primary-light' : 'hover:bg-bg-tertiary text-text-secondary'}`}
                                        onClick={() => { setLanguage('en'); setIsLangOpen(false); }}
                                    >
                                        English
                                    </button>
                                </div>
                            )}
                        </div>

                        <button className="btn-icon btn-secondary">
                            <Search className="w-5 h-5" />
                        </button>
                        <Link to="/demo" className="btn btn-primary">
                            {t('nav.getStarted')}
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center gap-2 md:hidden">
                        <button
                            className="btn-icon btn-secondary flex items-center gap-1 px-2 w-auto h-10"
                            onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                        >
                            <Globe className="w-4 h-4" />
                            <span className="text-xs uppercase font-bold">{language}</span>
                        </button>
                        <button
                            className="btn-icon btn-secondary"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? (
                                <X className="w-6 h-6" />
                            ) : (
                                <Menu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 animate-fade-in">
                        <div className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`text-base font-medium transition-colors px-4 py-2 rounded-lg ${location.pathname === link.path
                                        ? 'bg-bg-tertiary text-primary-light'
                                        : 'text-text-secondary hover:text-text-primary hover:bg-bg-tertiary'
                                        }`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="flex gap-2 px-4 mt-2">
                                <button className="btn-icon btn-secondary flex-1">
                                    <Search className="w-5 h-5" />
                                </button>
                                <Link
                                    to="/demo"
                                    className="btn btn-primary flex-1 justify-center"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {t('nav.getStarted')}
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
