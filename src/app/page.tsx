'use client';

import Link from 'next/link';
import {
    Workflow,
    ShoppingCart,
    TrendingUp,
    Server,
    Code,
    Globe,
    ArrowRight,
    CheckCircle,
    Star,
    Sparkles,
    Rocket,
    Users,
    Shield,
    Clock,
    Cpu,
} from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Home() {
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
        { value: '4,343+', label: t('home.stats.workflows') },
        { value: '365+', label: t('home.stats.integrations') },
        { value: '10,000+', label: t('home.stats.users') },
        { value: '99.9%', label: t('home.stats.uptime') },
    ];

    const benefits = [
        t('home.benefits.items.0'),
        t('home.benefits.items.1'),
        t('home.benefits.items.2'),
        t('home.benefits.items.3'),
        t('home.benefits.items.4'),
        t('home.benefits.items.5'),
    ];

    return (
        <>
            {/* Hero Section */}
            <section className="hero-section position-relative overflow-hidden">
                <div className="container py-5">
                    <div className="row align-items-center min-vh-50">
                        <div className="col-lg-8 mx-auto text-center">
                            <div className="badge bg-warning/20 text-warning border border-warning/30 mb-4 animate-fade-in">
                                <Star size={14} className="me-1" />
                                {t('home.hero.badge')}
                            </div>

                            <h1 className="display-3 fw-bold mb-4 animate-fade-in">
                                {t('home.hero.title')}{' '}
                                <span className="text-gradient">SmarterBOT</span>
                            </h1>

                            <p className="lead text-secondary mb-5 animate-fade-in">
                                {t('home.hero.description')}
                            </p>

                            <div className="d-flex flex-column flex-md-row justify-content-center gap-3 mb-5 animate-fade-in">
                                <Link href="/claw-os" className="btn btn-warning text-dark d-flex align-items-center justify-content-center gap-2">
                                    <Cpu size={18} />
                                    Explore Claw OS
                                </Link>
                                <Link href="/workflows" className="btn btn-outline-light d-flex align-items-center justify-content-center gap-2">
                                    {t('home.hero.ctaWorkflows')}
                                    <ArrowRight size={18} />
                                </Link>
                                <Link href="/demo" className="btn btn-outline-warning d-flex align-items-center justify-content-center gap-2">
                                    <Rocket size={18} />
                                    {t('home.hero.ctaDemo')}
                                </Link>
                            </div>

                            {/* Stats */}
                            <div className="row g-4 animate-fade-in">
                                {stats.map((stat, index) => (
                                    <div key={index} className="col-6 col-md-3">
                                        <div className="card card-custom glass h-100 text-center">
                                            <div className="card-body">
                                                <div className="text-gradient fw-bold display-6">{stat.value}</div>
                                                <div className="text-secondary small mt-1">{stat.label}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Background Effects */}
                <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden z-n1">
                    <div className="position-absolute bg-gradient-primary opacity-20" style={{
                        width: '600px',
                        height: '600px',
                        borderRadius: '50%',
                        top: '-200px',
                        left: '-200px',
                        filter: 'blur(100px)'
                    }}></div>
                    <div className="position-absolute bg-gradient-primary opacity-20" style={{
                        width: '600px',
                        height: '600px',
                        borderRadius: '50%',
                        bottom: '-200px',
                        right: '-200px',
                        filter: 'blur(100px)'
                    }}></div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-5">
                <div className="container">
                    <div className="text-center mb-5">
                        <div className="badge bg-primary/20 text-primary border border-primary/30 mb-3">
                            <Sparkles size={14} className="me-1" />
                            {t('home.features.title')} <span className="text-gradient">{t('home.features.titleAccent')}</span>
                        </div>
                        <h2 className="mb-3">{t('home.features.description')}</h2>
                    </div>

                    <div className="row g-4">
                        {features.map((feature, index) => (
                            <div key={index} className="col-md-6 col-lg-4 animate-fade-in">
                                <div className="card card-custom glass h-100 p-4">
                                    <div className="d-flex align-items-start gap-3">
                                        <div className="w-12 h-12 rounded-lg bg-bg-tertiary flex items-center justify-center flex-shrink-0">
                                            <feature.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <h3 className="h5 fw-bold mb-2">{feature.title}</h3>
                                            <p className="text-secondary mb-0">{feature.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-5">
                        <Link href="/integrations" className="btn btn-outline-secondary d-flex align-items-center justify-content-center gap-2 mx-auto" style={{ maxWidth: '250px' }}>
                            {t('home.integrations.viewAll')}
                            <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-5">
                <div className="container">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-6">
                            <div className="badge bg-success/20 text-success border border-success/30 mb-3">
                                <CheckCircle size={14} className="me-1" />
                                {t('home.benefits.badge')}
                            </div>
                            <h2 className="display-6 fw-bold mb-4">
                                {t('home.benefits.title')} <span className="text-gradient">SmarterBOT</span>?
                            </h2>
                            <p className="lead text-secondary mb-5">
                                {t('home.benefits.description')}
                            </p>
                            <div className="row g-3">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="col-md-6">
                                        <div className="d-flex align-items-center gap-2">
                                            <CheckCircle size={20} className="text-success me-3 flex-shrink-0" />
                                            <span className="text-secondary">{benefit}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <Link href="/pricing" className="btn btn-warning text-dark d-flex align-items-center justify-content-center gap-2" style={{ maxWidth: '250px' }}>
                                {t('home.benefits.cta')}
                                <ArrowRight size={18} />
                            </Link>
                        </div>

                        <div className="col-lg-6">
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <div className="card card-custom glass p-4 text-center">
                                        <Users className="w-8 h-8 text-primary mb-3 mx-auto" />
                                        <div className="text-gradient fw-bold display-6">4.9/5</div>
                                        <div className="text-secondary small">{t('home.benefits.rating')}</div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="card card-custom glass p-4 text-center">
                                        <Clock className="w-8 h-8 text-success mb-3 mx-auto" />
                                        <div className="text-gradient fw-bold display-6">{'<'} 1h</div>
                                        <div className="text-secondary small">{t('home.benefits.responseTime')}</div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="card card-custom glass p-4 text-center">
                                        <Shield className="w-8 h-8 text-warning mb-3 mx-auto" />
                                        <div className="text-gradient fw-bold display-6">99.9%</div>
                                        <div className="text-secondary small">{t('home.benefits.uptime')}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-5">
                <div className="container">
                    <div className="card card-custom glass p-5 text-center">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <h2 className="display-6 fw-bold mb-4">
                                    {t('home.cta.title')} <span className="text-gradient">{t('home.cta.titleAccent')}</span> {language === 'es' ? 'tu Negocio' : 'Your Business'}?
                                </h2>
                                <p className="lead text-secondary mb-5">
                                    {t('home.cta.description')}
                                </p>
                                <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
                                    <Link href="/demo" className="btn btn-warning text-dark d-flex align-items-center justify-content-center gap-2">
                                        <Rocket size={18} />
                                        {t('home.cta.button')}
                                    </Link>
                                    <Link href="/contact" className="btn btn-outline-secondary d-flex align-items-center justify-content-center gap-2">
                                        {t('home.cta.sales')}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
