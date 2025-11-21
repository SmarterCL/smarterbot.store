import { Server, Globe, Code, Rocket, Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
    const services = [
        {
            icon: Server,
            title: 'VPS Hosting',
            description: 'Enterprise-grade virtual private servers powered by Hostinger infrastructure',
            features: [
                'SSD Storage up to 1TB',
                'Up to 32GB RAM',
                'Full root access',
                '99.9% uptime guarantee',
                'DDoS protection',
                'Automated backups',
            ],
            startingPrice: '$9.99/month',
            gradient: 'from-blue-500 to-cyan-500',
            popular: false,
        },
        {
            icon: Globe,
            title: 'Domain Registration',
            description: 'Secure your brand with premium domain names and DNS management',
            features: [
                '500+ TLDs available',
                'Free WHOIS privacy',
                'DNS management',
                'Email forwarding',
                'Domain lock protection',
                '24/7 support',
            ],
            startingPrice: '$0.99/year',
            gradient: 'from-purple-500 to-pink-500',
            popular: false,
        },
        {
            icon: Zap,
            title: 'n8n Automation',
            description: 'Pre-configured n8n instances with our curated workflow collection',
            features: [
                '4,343+ ready workflows',
                'One-click deployment',
                'Custom integrations',
                'Workflow marketplace',
                'Priority support',
                'Free updates',
            ],
            startingPrice: '$19.99/month',
            gradient: 'from-indigo-500 to-purple-500',
            popular: true,
        },
        {
            icon: Code,
            title: 'Custom Development',
            description: 'Tailored automation solutions and integrations for your unique needs',
            features: [
                'Custom workflow design',
                'API integrations',
                'Database design',
                'UI/UX development',
                'Testing & deployment',
                'Ongoing maintenance',
            ],
            startingPrice: 'Custom Quote',
            gradient: 'from-green-500 to-emerald-500',
            popular: false,
        },
        {
            icon: Rocket,
            title: 'Marketing Automation',
            description: 'Meta Ads, email campaigns, and social media automation at scale',
            features: [
                'Meta Ads management',
                'Email campaigns',
                'Social media scheduling',
                'Analytics dashboard',
                'A/B testing',
                'ROI tracking',
            ],
            startingPrice: '$49.99/month',
            gradient: 'from-orange-500 to-red-500',
            popular: false,
        },
        {
            icon: Shield,
            title: 'Enterprise Support',
            description: 'Dedicated support and consulting for mission-critical operations',
            features: [
                '24/7 priority support',
                'Dedicated account manager',
                'Custom SLA',
                'On-site consulting',
                'Training sessions',
                'Security audits',
            ],
            startingPrice: 'Contact Sales',
            gradient: 'from-pink-500 to-rose-500',
            popular: false,
        },
    ];

    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="container">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="mb-4">
                        Our <span className="gradient-text">Services</span>
                    </h1>
                    <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                        Everything you need to automate, scale, and grow your business. From hosting to
                        automation, we've got you covered.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`card card-glow relative ${service.popular ? 'border-2 border-primary' : ''}`}
                        >
                            {service.popular && (
                                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                                    <div className="badge badge-primary">Most Popular</div>
                                </div>
                            )}

                            {/* Icon */}
                            <div
                                className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg`}
                            >
                                <service.icon className="w-8 h-8 text-white" />
                            </div>

                            {/* Title & Description */}
                            <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                            <p className="text-text-secondary mb-6">{service.description}</p>

                            {/* Features */}
                            <div className="space-y-3 mb-6">
                                {service.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                                        <span className="text-text-secondary text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Pricing */}
                            <div className="mt-auto pt-6 border-t border-border">
                                <div className="flex items-end justify-between mb-4">
                                    <div>
                                        <div className="text-sm text-text-tertiary mb-1">Starting at</div>
                                        <div className="text-2xl font-bold gradient-text">{service.startingPrice}</div>
                                    </div>
                                </div>
                                <button className={`btn ${service.popular ? 'btn-primary' : 'btn-secondary'} w-full`}>
                                    Learn More
                                    <ArrowRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Why Choose Us Section */}
                <div className="card glass-strong py-12 px-8">
                    <div className="text-center mb-12">
                        <h2 className="mb-4">
                            Why Choose <span className="gradient-text">SmarterBOT</span>?
                        </h2>
                        <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                            We combine cutting-edge technology with exceptional service
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-primary mx-auto mb-4 flex items-center justify-center">
                                <Zap className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
                            <p className="text-text-secondary">
                                Deploy in minutes with our one-click solutions and optimized infrastructure
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-secondary mx-auto mb-4 flex items-center justify-center">
                                <Shield className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Enterprise Security</h3>
                            <p className="text-text-secondary">
                                Bank-grade encryption and security measures to protect your data
                            </p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-accent mx-auto mb-4 flex items-center justify-center">
                                <Rocket className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Scalable Growth</h3>
                            <p className="text-text-secondary">
                                Start small and scale seamlessly as your business grows
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center mt-16">
                    <h2 className="mb-6">Ready to Get Started?</h2>
                    <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
                        Contact our sales team for a custom quote tailored to your needs
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="btn btn-primary">
                            Contact Sales
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link to="/pricing" className="btn btn-secondary">
                            View Pricing
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
