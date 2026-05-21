'use client';

import { Zap, CheckCircle2, ArrowRight, Smartphone, Layers, Search, Settings, Shield, Globe, Play, MessageSquare, Database } from 'lucide-react';
import Link from 'next/link';

export default function HowItWorksPage() {
    const steps = [
        {
            number: '01',
            title: 'Conecta tu Inventario',
            desc: 'Vincula tu base de datos Odoo, Shopify o Mercado Libre en minutos usando nuestras claves API seguras.',
            icon: Database
        },
        {
            number: '02',
            title: 'Configura tus Flujos',
            desc: 'Personaliza tus reglas de negocio: "Si hay venta → Emitir factura → Notificar WhatsApp".',
            icon: Settings
        },
        {
            number: '03',
            title: 'Lanza tu Tienda',
            desc: 'Tu portal e-commerce cobra vida con sincronización total y pasarela de pagos activada.',
            icon: Rocket
        },
        {
            number: '04',
            title: 'Escala con Datos',
            desc: 'Monitorea el rendimiento en tiempo real y optimiza tus ventas con nuestro panel de analíticas.',
            icon: BarChart3
        }
    ];

    return (
        <div className="pt-32 pb-24 min-h-screen bg-white">
            <div className="container">
                <div className="row justify-content-center text-center mb-24 animate-in fade-in slide-in-from-top-10">
                    <div className="col-lg-8">
                        <div className="badge-premium mb-4">Proceso Smarter</div>
                        <h1 className="text-7xl font-black tracking-tighter text-black mb-6">
                            Cómo funciona la <span className="text-gradient">Magia</span>.
                        </h1>
                        <p className="text-xl text-secondary font-medium leading-relaxed">
                            Diseñamos una arquitectura que elimina la complejidad técnica para que te enfoques en lo que importa: tus clientes.
                        </p>
                    </div>
                </div>

                <div className="row g-5">
                    {steps.map((step, i) => (
                        <div key={i} className="col-lg-6 animate-in fade-in slide-in-from-bottom-10" style={{ animationDelay: `${i * 150}ms` }}>
                            <div className="group flex gap-8 p-10 rounded-[3rem] bg-soft hover:bg-black transition-all duration-500 hover:shadow-2xl">
                                <div className="text-6xl font-black text-black/10 group-hover:text-success/20 transition-colors leading-none">
                                    {step.number}
                                </div>
                                <div>
                                    <h3 className="text-3xl font-black tracking-tight mb-4 text-black group-hover:text-white transition-colors">
                                        {step.title}
                                    </h3>
                                    <p className="text-secondary font-bold leading-relaxed mb-0 group-hover:text-secondary-foreground transition-colors">
                                        {step.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Automation Visualizer Placeholder */}
                <div className="mt-32 p-12 bg-soft rounded-[4rem] border border-light relative overflow-hidden">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-5">
                            <h2 className="text-5xl font-black tracking-tighter mb-6">Automatización sin límites</h2>
                            <p className="text-lg text-secondary font-bold mb-8 leading-relaxed">
                                Utilizamos n8n como motor principal, lo que nos permite crear flujos de trabajo que se conectan con cualquier servicio en la nube.
                            </p>
                            <div className="space-y-4">
                                {[
                                    'Webhooks en tiempo real',
                                    'Procesamiento de datos con IA',
                                    'Notificaciones omnicanal',
                                    'Logs de auditoría completos'
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 font-black text-xs uppercase tracking-widest">
                                        <CheckCircle2 size={18} className="text-success" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="relative bg-white p-8 rounded-[3rem] shadow-2xl border border-light">
                                <div className="aspect-video bg-soft rounded-[2rem] flex items-center justify-center border-2 border-dashed border-light group cursor-pointer overflow-hidden">
                                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <Play size={64} className="text-success" />
                                    </div>
                                    <div className="text-center">
                                        <Zap size={48} className="text-success mx-auto mb-4" />
                                        <div className="font-black text-sm uppercase tracking-widest text-secondary">Ver Video Demostrativo</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-32 text-center">
                    <h2 className="text-5xl font-black tracking-tighter mb-8">¿Listo para transformar tu negocio?</h2>
                    <Link href="/register" className="btn btn-success-premium px-10 py-4 fs-3">
                        EMPEZAR MI TRANSFORMACIÓN <ArrowRight size={24} className="ms-3" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

import { Rocket, BarChart3 } from 'lucide-react';
