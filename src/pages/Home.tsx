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

const Home = () => {
    const features = [
        {
            icon: Workflow,
            title: 'n8n Workflows',
            description: '4,343+ production-ready automation workflows from our curated collection',
            gradient: 'from-purple-500 to-pink-500',
        },
        {
            icon: ShoppingCart,
            title: 'E-commerce Ready',
            description: 'Seamless Odoo integrations for your online store and business',
            gradient: 'from-blue-500 to-cyan-500',
        },
        {
            icon: TrendingUp,
            title: 'Meta Ads Integration',
            description: 'Powerful marketing automation with Meta Ads campaigns',
            gradient: 'from-green-500 to-emerald-500',
        },
        {
            icon: Server,
            title: 'VPS & Hosting',
            description: 'Enterprise-grade hosting solutions powered by Hostinger',
            gradient: 'from-orange-500 to-red-500',
        },
        {
            icon: Code,
            title: 'Custom Development',
            description: 'Tailored automation solutions for your unique business needs',
            gradient: 'from-indigo-500 to-purple-500',
        },
        {
            icon: Globe,
            title: 'Global Domains',
            description: 'Premium domain registration and management services',
            gradient: 'from-pink-500 to-rose-500',
        },
    ];

    const stats = [
        { value: '4,343+', label: 'Workflows', icon: Workflow },
        { value: '365+', label: 'Integrations', icon: Zap },
        { value: '10,000+', label: 'Active Users', icon: Users },
        { value: '99.9%', label: 'Uptime', icon: Shield },
    ];

    const integrations = [
        { name: 'n8n', color: 'bg-gradient-to-br from-purple-500 to-pink-500' },
        { name: 'Odoo', color: 'bg-gradient-to-br from-blue-500 to-indigo-500' },
        { name: 'Meta', color: 'bg-gradient-to-br from-blue-600 to-purple-600' },
        { name: 'Hostinger', color: 'bg-gradient-to-br from-orange-500 to-red-500' },
        { name: 'Dokploy', color: 'bg-gradient-to-br from-cyan-500 to-blue-500' },
        { name: 'Caddy', color: 'bg-gradient-to-br from-green-500 to-emerald-500' },
    ];

    const benefits = [
        'Lightning-fast deployment',
        'Enterprise-grade security',
        '24/7 support',
        'Automatic updates',
        'Scalable infrastructure',
        'Custom integrations',
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="section-lg relative overflow-hidden">
                <div className="container">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 mb-8 animate-fade-in">
                            <Sparkles className="w-4 h-4 text-primary-light" />
                            <span className="text-sm font-medium text-primary-light">
                                Trusted by 10,000+ businesses worldwide
                            </span>
                        </div>

                        <h1 className="mb-6 animate-fade-in">
                            Automate Your Business with{' '}
                            <span className="gradient-text">SmarterBOT</span>
                        </h1>

                        <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto animate-fade-in">
                            Deploy powerful n8n workflows, integrate Odoo, scale with VPS hosting,
                            and supercharge your marketing with Meta Ads. All in one platform.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
                            <Link to="/workflows" className="btn btn-primary">
                                Browse Workflows
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link to="/demo" className="btn btn-outline">
                                <Rocket className="w-5 h-5" />
                                Get Started Free
                            </Link>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="card glass text-center"
                                >
                                    <stat.icon className="w-8 h-8 text-primary-light mx-auto mb-2" />
                                    <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                                    <div className="text-sm text-text-tertiary">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-20 animate-pulse" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-20 animate-pulse" />
            </section>

            {/* Features Section */}
            <section className="section bg-bg-secondary/50">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="mb-4">
                            Everything You Need to <span className="gradient-text">Automate</span>
                        </h2>
                        <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                            From workflows to hosting, we've got you covered with enterprise-grade solutions
                        </p>
                    </div>

                    <div className="grid grid-3 gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="card card-interactive card-glow group animate-fade-in"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                                    <feature.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                <p className="text-text-secondary mb-4">{feature.description}</p>
                                <div className="flex items-center gap-2 text-primary-light font-medium group-hover:gap-3 transition-all">
                                    Learn more
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Integrations Section */}
            <section className="section">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="mb-4">
                            Powerful <span className="gradient-text-secondary">Integrations</span>
                        </h2>
                        <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                            Connect with the tools you already use and love
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {integrations.map((integration, index) => (
                            <div
                                key={index}
                                className="card card-interactive text-center group"
                                style={{ animationDelay: `${index * 50}ms` }}
                            >
                                <div className={`w-16 h-16 ${integration.color} rounded-2xl mx-auto mb-3 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform`}>
                                    {integration.name.slice(0, 2).toUpperCase()}
                                </div>
                                <div className="font-semibold">{integration.name}</div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <Link to="/integrations" className="btn btn-secondary">
                            View All Integrations
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="section bg-bg-secondary/50">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent/30 mb-6">
                                <Clock className="w-4 h-4 text-accent" />
                                <span className="text-sm font-medium text-accent">
                                    Deploy in minutes, not days
                                </span>
                            </div>

                            <h2 className="mb-6">
                                Why Choose <span className="gradient-text">SmarterBOT</span>?
                            </h2>

                            <p className="text-lg text-text-secondary mb-8">
                                We make automation accessible, powerful, and affordable for businesses of all sizes.
                                Join thousands of companies already automating with SmarterBOT.
                            </p>

                            <div className="space-y-4 mb-8">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                                        <span className="text-text-secondary">{benefit}</span>
                                    </div>
                                ))}
                            </div>

                            <Link to="/pricing" className="btn btn-primary">
                                View Pricing
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="card glass space-y-4">
                                <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                                    <Star className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold gradient-text mb-1">4.9/5</div>
                                    <div className="text-sm text-text-tertiary">Customer Rating</div>
                                </div>
                            </div>

                            <div className="card glass space-y-4 mt-8">
                                <div className="w-12 h-12 rounded-lg bg-gradient-secondary flex items-center justify-center">
                                    <Rocket className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold gradient-text-secondary mb-1">100ms</div>
                                    <div className="text-sm text-text-tertiary">Response Time</div>
                                </div>
                            </div>

                            <div className="card glass space-y-4">
                                <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center">
                                    <Users className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold gradient-text mb-1">10K+</div>
                                    <div className="text-sm text-text-tertiary">Active Users</div>
                                </div>
                            </div>

                            <div className="card glass space-y-4 mt-8">
                                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                                    <Shield className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold gradient-text mb-1">99.9%</div>
                                    <div className="text-sm text-text-tertiary">Uptime SLA</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section">
                <div className="container">
                    <div className="card glass-strong text-center py-16 px-8 relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="mb-6">
                                Ready to <span className="gradient-text">Automate</span> Your Business?
                            </h2>
                            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
                                Start with our free tier and scale as you grow. No credit card required.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link to="/demo" className="btn btn-primary">
                                    <Rocket className="w-5 h-5" />
                                    Start Free Trial
                                </Link>
                                <Link to="/contact" className="btn btn-secondary">
                                    Talk to Sales
                                </Link>
                            </div>
                        </div>

                        {/* Decorative Background */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl" />
                            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
