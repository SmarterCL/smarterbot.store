'use client';

import { Server, Globe, Code, Rocket, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
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
                'Auto-renewal',
                'Domain locking',
            ],
            startingPrice: '$0.99/year',
            gradient: 'from-purple-500 to-pink-500',
            popular: true,
        },
        {
            icon: Code,
            title: 'Custom Automation',
            description: 'Tailored n8n workflows and integrations for your business needs',
            features: [
                'Custom workflow development',
                'API integrations',
                'Business process automation',
                'Training and support',
                'Documentation included',
                'Ongoing maintenance',
            ],
            startingPrice: 'Custom Quote',
            gradient: 'from-orange-500 to-red-500',
            popular: false,
        },
    ];

    return (
        <div className="pt-24 pb-16 min-h-screen">
            <div className="container">
                <div className="text-center mb-12">
                    <div className="badge bg-primary/20 text-primary border border-primary/30 mb-4">
                        <Rocket size={14} className="me-1" />
                        Our Services
                    </div>
                    <h1 className="display-4 fw-bold mb-4">
                        Solutions for Your Business
                    </h1>
                    <p className="lead text-secondary mb-4 max-w-2xl mx-auto">
                        From hosting to custom automation, we provide everything you need to scale
                    </p>
                </div>

                <div className="row g-4 mb-12">
                    {services.map((service, index) => (
                        <div key={index} className="col-lg-4">
                            <div className={`card card-custom glass h-100 p-4 ${service.popular ? 'border-primary border-2' : ''}`}>
                                {service.popular && (
                                    <div className="badge bg-primary text-white mb-3">Most Popular</div>
                                )}
                                <div className="text-center mb-4">
                                    <div className={`w-16 h-16 rounded-lg bg-gradient-${service.gradient} d-flex align-items-center justify-content-center mx-auto mb-3`}>
                                        <service.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h3 className="h4 fw-bold mb-2">{service.title}</h3>
                                    <p className="text-secondary">{service.description}</p>
                                </div>
                                <ul className="list-unstyled mb-4">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="d-flex align-items-center gap-2 mb-2 text-secondary">
                                            <CheckCircle size={16} className="text-success flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="text-center mb-4">
                                    <div className="h3 fw-bold text-gradient">{service.startingPrice}</div>
                                </div>
                                <Link href="/contact" className="btn btn-primary w-100">
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <div className="card card-custom glass p-6 max-w-2xl mx-auto">
                        <h2 className="h3 fw-bold mb-3">Need a Custom Solution?</h2>
                        <p className="text-secondary mb-4">
                            Contact our sales team for a custom quote tailored to your needs
                        </p>
                        <div className="d-flex gap-3 justify-content-center">
                            <Link href="/contact" className="btn btn-primary">
                                Contact Sales
                                <ArrowRight className="w-5 h-5 ms-2" />
                            </Link>
                            <Link href="/pricing" className="btn btn-secondary">
                                View Pricing
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
