'use client';

import { Server, Globe, Code, Rocket, CheckCircle, ArrowRight, Zap, Shield, Database } from 'lucide-react';
import Link from 'next/link';

export default function Services() {
    const services = [
        {
            icon: Server,
            title: 'Hosting VPS Smarter',
            description: 'Servidores privados virtuales de alto rendimiento optimizados para automatización.',
            features: [
                'Almacenamiento NVMe SSD',
                'Hasta 32GB de RAM DDR5',
                'Acceso root completo',
                'Uptime garantizado 99.9%',
                'Protección Anti-DDoS',
                'Backups automáticos diarios',
            ],
            startingPrice: 'Desde $12.990/mes',
            popular: false,
        },
        {
            icon: Globe,
            title: 'Registro de Dominios',
            description: 'Asegura tu marca con gestión profesional de DNS y certificados SSL.',
            features: [
                '+500 extensiones (TLDs)',
                'Privacidad WHOIS gratuita',
                'Gestión de DNS Premium',
                'Redirección de Email',
                'Renovación automática',
                'Bloqueo de transferencia',
            ],
            startingPrice: 'Desde $9.990/año',
            popular: true,
        },
        {
            icon: Code,
            title: 'Automatización Custom',
            description: 'Flujos de trabajo n8n a medida para las necesidades específicas de tu negocio.',
            features: [
                'Desarrollo de flujos ad-hoc',
                'Integraciones vía API/Webhooks',
                'Optimización de procesos ERP',
                'Capacitación y soporte',
                'Documentación de procesos',
                'Mantenimiento preventivo',
            ],
            startingPrice: 'Cotización a Medida',
            popular: false,
        },
    ];

    return (
        <div className="pt-32 pb-24 min-h-screen bg-soft">
            <div className="container">
                {/* Header */}
                <div className="text-center mb-16 animate-in fade-in slide-in-from-top-4">
                    <div className="badge-premium mb-4">
                        <Rocket size={14} className="me-2" />
                        Nuestros Servicios
                    </div>
                    <h1 className="text-6xl font-black tracking-tighter text-black mb-4">
                        Soluciones para tu <span className="text-success">Crecimiento</span>
                    </h1>
                    <p className="text-secondary small fw-bold max-w-2xl mx-auto leading-relaxed">
                        Desde infraestructura robusta hasta automatización avanzada, proporcionamos todo lo necesario para escalar tu operación digital.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="row g-4 mb-24">
                    {services.map((service, index) => (
                        <div key={index} className="col-lg-4 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: `${index * 100}ms` }}>
                            <div className={`bg-white rounded-4xl h-100 p-8 shadow-2xl border transition-all hover-scale ${service.popular ? 'border-success border-2 relative' : 'border-light'}`}>
                                {service.popular && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                                        Más Popular
                                    </div>
                                )}
                                <div className="text-center mb-8">
                                    <div className="w-20 h-20 rounded-3xl bg-soft flex items-center justify-center mx-auto mb-6 text-success shadow-inner">
                                        <service.icon size={32} />
                                    </div>
                                    <h3 className="text-2xl font-black tracking-tight mb-2 text-black">{service.title}</h3>
                                    <p className="text-secondary small fw-bold">{service.description}</p>
                                </div>
                                
                                <ul className="list-unstyled space-y-4 mb-8">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="d-flex align-items-start gap-3 text-sm font-bold text-black/80 leading-tight">
                                            <div className="bg-success-subtle p-1 rounded-full flex-shrink-0">
                                                <CheckCircle size={14} className="text-success" />
                                            </div>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="text-center mt-auto">
                                    <div className="text-2xl font-black tracking-tighter text-gradient mb-6">{service.startingPrice}</div>
                                    <Link href="/contact" className={`btn w-100 py-3 rounded-2xl fw-bold text-xs uppercase tracking-widest transition-all ${
                                        service.popular ? 'btn-success-premium' : 'btn-black shadow-xl'
                                    }`}>
                                        Lo quiero ahora
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Custom CTA */}
                <div className="text-center">
                    <div className="bg-black text-white rounded-4xl p-12 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-success/10 blur-3xl rounded-full -mr-32 -mt-32"></div>
                        <h2 className="text-4xl font-black tracking-tighter mb-4">¿Necesitas una solución empresarial?</h2>
                        <p className="text-secondary small fw-bold max-w-xl mx-auto mb-8">
                            Para requerimientos a gran escala, ofrecemos contratos de nivel de servicio (SLA) personalizados e infraestructura dedicada.
                        </p>
                        <div className="d-flex gap-4 justify-center flex-wrap">
                            <Link href="/contact" className="btn btn-success-premium">
                                Habla con Ventas
                                <ArrowRight size={18} className="ms-2" />
                            </Link>
                            <Link href="/pricing" className="btn btn-outline-light rounded-pill px-5 py-3 fw-bold border-2">
                                Ver Todos los Planes
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
            <style jsx>{`
                .bg-success-subtle { background-color: rgba(16, 185, 129, 0.1); }
            `}</style>
        </div>
    );
}
