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
            className={`navbar navbar-expand-lg fixed-top transition-all duration-300 ${isScrolled ? 'glass-strong shadow-lg' : 'bg-transparent'}`}
            style={{ backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.85)' : 'transparent' }}
        >
            <div className="container-fluid">
                <Link to="/" className="navbar-brand d-flex align-items-center">
                    <div className="me-2">
                        <Zap className="text-warning" />
                    </div>
                    <div>
                        <span className="fw-bold text-gradient">SmarterBOT</span>
                        <small className="text-muted">.store</small>
                    </div>
                </Link>

                <button 
                    className="navbar-toggler border-0" 
                    type="button" 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {navLinks.map((link) => (
                            <li className="nav-item" key={link.path}>
                                <Link
                                    to={link.path}
                                    className={`nav-link ${location.pathname === link.path ? 'text-warning fw-bold' : 'text-secondary'}`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="d-flex align-items-center gap-3">
                        {/* Language Selector */}
                        <div className="dropdown">
                            <button
                                className="btn btn-sm btn-outline-secondary dropdown-toggle"
                                type="button"
                                onClick={() => setIsLangOpen(!isLangOpen)}
                            >
                                <Globe size={16} className="me-1" />
                                {language.toUpperCase()}
                            </button>
                            {isLangOpen && (
                                <div className="dropdown-menu show position-absolute end-0 mt-1">
                                    <button
                                        className={`dropdown-item ${language === 'es' ? 'active' : ''}`}
                                        onClick={() => { setLanguage('es'); setIsLangOpen(false); }}
                                    >
                                        Español
                                    </button>
                                    <button
                                        className={`dropdown-item ${language === 'en' ? 'active' : ''}`}
                                        onClick={() => { setLanguage('en'); setIsLangOpen(false); }}
                                    >
                                        English
                                    </button>
                                </div>
                            )}
                        </div>

                        <button className="btn btn-sm btn-outline-secondary">
                            <Search size={18} />
                        </button>
                        
                        <Link to="/demo" className="btn btn-warning text-dark fw-medium">
                            {t('nav.getStarted')}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
