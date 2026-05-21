'use client';

import { Check, Zap, Shield, ArrowRight, Star, CheckCircle2, Users } from 'lucide-react';
import Link from 'next/link';

export default function Pricing() {
    const plans = [
        {
            name: 'BASIC',
            price: '19.990',
            period: 'CLP / mes',
            description: 'Ideal para pequeños negocios que comienzan a automatizar.',
            features: [
                'Dashboard OpenClaw',
                '3 agentes activos',
                '1.000 tareas / mes',
                'Alertas vía Telegram',
                'Logs de 7 días',
                'Soporte por email'
            ],
            cta: 'Comenzar ahora',
            popular: false
        },
        {
            name: 'PRO',
            price: '49.990',
            period: 'CLP / mes',
            description: 'El plan perfecto para escalar tu operación con IA.',
            features: [
                '10 agentes activos',
                '10.000 tareas / mes',
                'Auto-acciones inteligentes',
                'n8n Enterprise integrado',
                'Logs de 30 días',
                'Soporte prioritario 24/7',
                'Integración Meta Ads'
            ],
            cta: 'Prueba Pro Gratis',
            popular: true
        },
        {
            name: 'BUSINESS',
            price: '149.990',
            period: 'CLP / mes',
            description: 'Solución completa para empresas con flujos complejos.',
            features: [
                'Agentes ilimitados',
                'Tareas ilimitadas',
                'Workflows personalizados',
                'Integración Odoo ERP',
                'SLA de 99.9% garantizado',
                'Consultoría técnica mensual',
                'IP dedicada'
            ],
            cta: 'Contactar Ventas',
            popular: false
        }
    ];

    return (
        <div className="pt-32 pb-24 min-h-screen bg-soft">
            <div className="container">
                {/* Hero */}
                <div className="text-center mb-16 animate-in fade-in slide-in-from-top-4">
                    <div className="badge-premium mb-4">
                        <Zap size={14} className="me-2" />
                        Planes Flexibles
                    </div>
                    <h1 className="text-6xl font-black tracking-tighter text-black mb-4">
                        Precios que <span className="text-success">Escalan</span> contigo
                    </h1>
                    <p className="text-secondary small fw-bold max-w-2xl mx-auto leading-relaxed">
                        Elige el plan que mejor se adapte a tus necesidades. Todos los planes incluyen acceso a nuestra infraestructura de alta disponibilidad.
                    </p>
                </div>

                {/* Pricing Grid */}
                <div className="row g-4 align-items-center">
                    {plans.map((plan, i) => (
                        <div key={plan.name} className="col-lg-4 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: `${i * 100}ms` }}>
                            <div className={`bg-white rounded-4xl p-8 shadow-2xl border transition-all hover-scale ${
                                plan.popular ? 'border-success border-2 relative' : 'border-light'
                            }`}>
                                {plan.popular && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-success text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                                        Más Recomendado
                                    </div>
                                )}
                                
                                <div className="mb-8">
                                    <h3 className="text-xs font-black tracking-widest uppercase text-secondary mb-2">{plan.name}</h3>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl font-black tracking-tighter text-black">${plan.price}</span>
                                        <span className="text-secondary font-bold text-sm">/{plan.period.split(' / ')[1]}</span>
                                    </div>
                                    <p className="text-secondary small fw-bold mt-4">
                                        {plan.description}
                                    </p>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature, j) => (
                                        <li key={j} className="flex items-center gap-3 text-sm font-bold text-black/80">
                                            <div className={`w-5 h-5 rounded-full flex items-center justify-center ${plan.popular ? 'bg-success text-white' : 'bg-soft text-success'}`}>
                                                <Check size={12} strokeWidth={4} />
                                            </div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <Link 
                                    href={plan.name === 'BUSINESS' ? '/contact' : '/register'} 
                                    className={`btn w-100 py-3 rounded-2xl fw-bold text-xs uppercase tracking-widest transition-all ${
                                        plan.popular ? 'btn-success-premium' : 'btn-black shadow-xl'
                                    }`}
                                >
                                    {plan.cta}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* FAQ / Trust */}
                <div className="mt-24">
                    <div className="row g-4 justify-center">
                        {[
                            { title: 'Garantía de Uptime', desc: 'Infraestructura redundante con 99.9% de disponibilidad.', icon: Shield },
                            { title: 'Soporte Experto', desc: 'Nuestros ingenieros te ayudan a configurar tus flujos.', icon: Users },
                            { title: 'Seguridad Empresarial', desc: 'Encriptación de grado militar en todos tus datos.', icon: CheckCircle2 }
                        ].map((item, i) => (
                            <div key={i} className="col-md-4">
                                <div className="text-center p-6">
                                    <div className="bg-white w-16 h-16 rounded-3xl shadow-lg flex items-center justify-center mx-auto mb-4 text-success">
                                        <item.icon size={32} />
                                    </div>
                                    <h4 className="font-black tracking-tight text-xl mb-2">{item.title}</h4>
                                    <p className="text-secondary small fw-bold">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-24 text-center">
                    <div className="bg-black rounded-4xl p-12 text-white shadow-2xl overflow-hidden relative">
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-success/10 blur-3xl rounded-full -ml-32 -mb-32"></div>
                        <h2 className="text-4xl font-black tracking-tighter mb-4">¿Buscas algo diferente?</h2>
                        <p className="text-secondary small fw-bold max-w-xl mx-auto mb-8">
                            Podemos crear un plan a medida basado en el volumen de tus operaciones o requerimientos específicos de cumplimiento.
                        </p>
                        <Link href="/contact" className="btn btn-outline-light rounded-pill px-5 py-3 fw-bold border-2 transition-all hover-scale">
                            Habla con un Experto
                            <ArrowRight size={18} className="ms-2" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
