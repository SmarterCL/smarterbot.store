import { Link } from 'react-router-dom';
import {
    Zap,
    Workflow,
    ShoppingCart,
    TrendingUp,
    Code,
    Server,
    Globe,
    ArrowRight,
    CheckCircle,
    Star,
    Sparkles,
    Rocket,
    Users,
    Shield,
    Clock,
} from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Home = () => {
    const { language, t } = useLanguage();

    const features = [
        {
            icon: Workflow,
            title: t('home.features.n8n.title'),
            description: t('home.features.n8n.description'),
        },
        {
            icon: ShoppingCart,
            title: t('home.features.ecommerce.title'),
            description: t('home.features.ecommerce.description'),
        },
        {
            icon: TrendingUp,
            title: t('home.features.meta.title'),
            description: t('home.features.meta.description'),
        },
        {
            icon: Server,
            title: t('home.features.vps.title'),
            description: t('home.features.vps.description'),
        },
        {
            icon: Code,
            title: t('home.features.custom.title'),
            description: t('home.features.custom.description'),
        },
        {
            icon: Globe,
            title: t('home.features.domains.title'),
            description: t('home.features.domains.description'),
        },
    ];

    const stats = [
        { value: '4,343+', label: t('home.stats.workflows'), icon: Workflow },
        { value: '365+', label: t('home.stats.integrations'), icon: Zap },
        { value: '10,000+', label: t('home.stats.users'), icon: Users },
        { value: '99.9%', label: t('home.stats.uptime'), icon: Shield },
    ];

    const integrations = [
        { name: 'n8n', color: 'bg-warning' },
        { name: 'Odoo', color: 'bg-primary' },
        { name: 'Meta', color: 'bg-info' },
        { name: 'Hostinger', color: 'bg-danger' },
        { name: 'Dokploy', color: 'bg-success' },
        { name: 'Caddy', color: 'bg-secondary' },
    ];

    const benefits = t('home.benefits.items');

    return (
        <div className="min-vh-100">
            {/* Hero Section */}
            <section className="section-lg position-relative overflow-hidden pt-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <div className="d-inline-flex align-items-center gap-2 px-4 py-2 rounded-pill glass border border-warning mb-4 animate-fade-in">
                                <Sparkles size={16} className="text-warning" />
                                <span className="text-sm fw-medium text-warning">
                                    {t('home.hero.badge')}
                                </span>
                            </div>

                            <h1 className="mb-4 animate-fade-in">
                                {t('home.hero.title')}{' '}
                                <span className="text-gradient">SmarterBOT</span>
                            </h1>

                            <p className="lead text-secondary mb-5 animate-fade-in">
                                {t('home.hero.description')}
                            </p>

                            <div className="d-flex flex-column flex-md-row justify-content-center gap-3 mb-5 animate-fade-in">
                                <Link to="/workflows" className="btn btn-warning text-dark d-flex align-items-center justify-content-center gap-2">
                                    {t('home.hero.ctaWorkflows')}
                                    <ArrowRight size={18} />
                                </Link>
                                <Link to="/demo" className="btn btn-outline-warning d-flex align-items-center justify-content-center gap-2">
                                    <Rocket size={18} />
                                    {t('home.hero.ctaDemo')}
                                </Link>
                            </div>

                            {/* Stats */}
                            <div className="row g-4 animate-fade-in">
                                {stats.map((stat, index) => (
                                    <div key={index} className="col-6 col-md-3">
                                        <div className="card card-custom glass h-100 text-center">
                                            <div className="mx-auto mb-2">
                                                <stat.icon className="text-warning" size={32} />
                                            </div>
                                            <h3 className="h3 fw-bold text-gradient">{stat.value}</h3>
                                            <small className="text-secondary">{stat.label}</small>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="position-absolute top-0 start-0 w-75 h-50 bg-warning opacity-10 rounded-circle blur-3" style={{marginTop: '100px', marginLeft: '50px'}} />
                <div className="position-absolute bottom-0 end-0 w-75 h-50 bg-danger opacity-10 rounded-circle blur-3" style={{marginBottom: '100px', marginRight: '50px'}} />
            </section>

            {/* Features Section */}
            <section className="section bg-light-subtle">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="mb-3">
                            {t('home.features.title')} <span className="text-gradient">{t('home.features.titleAccent')}</span>
                        </h2>
                        <p className="lead text-secondary">
                            {t('home.features.description')}
                        </p>
                    </div>

                    <div className="grid-3 g-4">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="card card-custom glass h-100 cursor-pointer animate-fade-in"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="bg-warning rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '56px', height: '56px' }}>
                                    <feature.icon className="text-white" size={28} />
                                </div>
                                <h3 className="h4 mb-3">{feature.title}</h3>
                                <p className="text-secondary mb-4">{feature.description}</p>
                                <div className="d-flex align-items-center text-warning fw-medium">
                                    {t('home.features.learnMore')}
                                    <ArrowRight size={16} className="ms-2" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Integrations Section */}
            <section className="section">
                <div className="container">
                    <div className="text-center mb-5">
                        <h2 className="mb-3">
                            {t('home.integrations.title')} <span className="text-gradient-green">{t('home.integrations.titleAccent')}</span>
                        </h2>
                        <p className="lead text-secondary">
                            {t('home.integrations.description')}
                        </p>
                    </div>

                    <div className="row g-4 justify-content-center">
                        {integrations.map((integration, index) => (
                            <div key={index} className="col-6 col-md-4 col-lg-2">
                                <div
                                    className="card card-custom glass text-center cursor-pointer h-100"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                >
                                    <div className={`rounded-3 mx-auto mb-3 d-flex align-items-center justify-content-center text-white fw-bold ${integration.color}`} style={{ width: '64px', height: '64px' }}>
                                        {integration.name.slice(0, 2).toUpperCase()}
                                    </div>
                                    <div className="fw-semibold">{integration.name}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-5">
                        <Link to="/integrations" className="btn btn-outline-secondary d-flex align-items-center justify-content-center gap-2 mx-auto" style={{ maxWidth: '250px' }}>
                            {t('home.integrations.viewAll')}
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="section bg-light-subtle">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <div className="d-inline-flex align-items-center gap-2 px-4 py-2 rounded-pill glass border border-success mb-4">
                                <Clock size={16} className="text-success" />
                                <span className="text-sm fw-medium text-success">
                                    {t('home.benefits.badge')}
                                </span>
                            </div>

                            <h2 className="mb-4">
                                {t('home.benefits.title')} <span className="text-gradient">SmarterBOT</span>?
                            </h2>

                            <p className="text-secondary mb-5">
                                {t('home.benefits.description')}
                            </p>

                            <div className="mb-5">
                                {benefits.map((benefit: string, index: number) => (
                                    <div key={index} className="d-flex align-items-center mb-3">
                                        <CheckCircle size={20} className="text-success me-3 flex-shrink-0" />
                                        <span className="text-secondary">{benefit}</span>
                                    </div>
                                ))}
                            </div>

                            <Link to="/pricing" className="btn btn-warning text-dark d-flex align-items-center justify-content-center gap-2" style={{ maxWidth: '250px' }}>
                                {t('home.benefits.cta')}
                                <ArrowRight size={18} />
                            </Link>
                        </div>

                        <div className="col-lg-6">
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className="card card-custom glass h-100">
                                        <div className="bg-gradient-yellow rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '48px', height: '48px' }}>
                                            <Star className="text-white" size={24} />
                                        </div>
                                        <h3 className="h4 text-gradient">4.9/5</h3>
                                        <small className="text-secondary">{t('home.benefits.rating')}</small>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="card card-custom glass h-100">
                                        <div className="bg-gradient-green rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '48px', height: '48px' }}>
                                            <Rocket className="text-white" size={24} />
                                        </div>
                                        <h3 className="h4 text-gradient-green">100ms</h3>
                                        <small className="text-secondary">{t('home.benefits.responseTime')}</small>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="card card-custom glass h-100">
                                        <div className="bg-success rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '48px', height: '48px' }}>
                                            <Users className="text-white" size={24} />
                                        </div>
                                        <h3 className="h4 text-gradient">10K+</h3>
                                        <small className="text-secondary">{t('home.stats.users')}</small>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="card card-custom glass h-100">
                                        <div className="bg-gradient-green rounded-circle d-flex align-items-center justify-content-center mx-auto mb-3" style={{ width: '48px', height: '48px' }}>
                                            <Shield className="text-white" size={24} />
                                        </div>
                                        <h3 className="h4 text-gradient-green">99.9%</h3>
                                        <small className="text-secondary">{t('home.benefits.uptime')}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section">
                <div className="container">
                    <div className="card card-custom glass-strong text-center py-5 px-4">
                        <div>
                            <h2 className="mb-4">
                                {t('home.cta.title')} <span className="text-gradient">{t('home.cta.titleAccent')}</span> {language === 'es' ? 'tu Negocio' : 'Your Business'}?
                            </h2>
                            <p className="lead text-secondary mb-5">
                                {t('home.cta.description')}
                            </p>
                            <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
                                <Link to="/demo" className="btn btn-warning text-dark d-flex align-items-center justify-content-center gap-2">
                                    <Rocket size={18} />
                                    {t('home.cta.button')}
                                </Link>
                                <Link to="/contact" className="btn btn-outline-secondary d-flex align-items-center justify-content-center gap-2">
                                    {t('home.cta.sales')}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
