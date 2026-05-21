'use client';

import { Zap, CheckCircle2, ArrowRight, Shield, Globe, Smartphone, Layers, Search, Settings, Package, RefreshCw, FileText } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductPage() {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-white">
            <div className="container">
                <div className="row justify-content-center text-center mb-16 animate-in fade-in slide-in-from-top-10">
                    <div className="col-lg-8">
                        <div className="badge-premium mb-4">Plataforma Smarter v1.0</div>
                        <h1 className="text-7xl font-black tracking-tighter text-black mb-6">
                            La navaja suiza del <span className="text-gradient">E-commerce</span>.
                        </h1>
                        <p className="text-xl text-secondary font-medium leading-relaxed">
                            Gestiona tu catálogo, sincroniza stock y automatiza tu facturación desde una sola interfaz profesional diseñada para el crecimiento.
                        </p>
                    </div>
                </div>

                <div className="row g-4">
                    {[
                        { 
                            icon: <Package size={32} />, 
                            title: 'Catálogo Unificado', 
                            desc: 'Crea tus productos una vez y publícalos en Mercado Libre, Shopify, Amazon y más con un solo clic.' 
                        },
                        { 
                            icon: <RefreshCw size={32} />, 
                            title: 'Sincronización en Tiempo Real', 
                            desc: 'Si vendes en un canal, el stock se actualiza instantáneamente en todos los demás. Adiós a las ventas sin stock.' 
                        },
                        { 
                            icon: <FileText size={32} />, 
                            title: 'Facturación Automatizada', 
                            desc: 'Integración nativa con sistemas de facturación electrónica. Emite boletas y facturas automáticamente.' 
                        },
                        { 
                            icon: <Smartphone size={32} />, 
                            title: 'Gestión Multi-dispositivo', 
                            desc: 'Controla tu negocio desde tu smartphone o desktop con la misma potencia y velocidad.' 
                        },
                        { 
                            icon: <Layers size={32} />, 
                            title: 'Exportación Inteligente', 
                            desc: 'Genera reportes detallados, guías de envío y fichas técnicas en segundos.' 
                        },
                        { 
                            icon: <Globe size={32} />, 
                            title: 'Global Ready', 
                            desc: 'Soporte multi-moneda y multi-idioma para escalar tu negocio a mercados internacionales.' 
                        }
                    ].map((feat, i) => (
                        <div key={i} className="col-md-6 col-lg-4 animate-in fade-in slide-in-from-bottom-10" style={{ animationDelay: `${i * 100}ms` }}>
                            <div className="bg-soft rounded-[2.5rem] p-8 h-100 hover-lift transition-all border border-transparent hover:border-success/20">
                                <div className="bg-white p-4 rounded-3xl shadow-sm d-inline-flex mb-6 text-success">
                                    {feat.icon}
                                </div>
                                <h3 className="text-2xl font-black tracking-tight mb-4">{feat.title}</h3>
                                <p className="text-secondary font-bold small leading-relaxed mb-0">
                                    {feat.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-24 p-12 bg-black text-white rounded-[3rem] shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-success/20 blur-[120px] rounded-full -mr-48 -mt-48"></div>
                    <div className="row align-items-center g-5 relative z-10">
                        <div className="col-lg-6">
                            <h2 className="text-5xl font-black tracking-tighter mb-6">Integración con Odoo v19.2</h2>
                            <p className="text-lg text-secondary font-bold mb-8">
                                Llevamos el poder de Odoo al front-end de tu tienda. Gestión de inventarios, CRM y contabilidad profesional integrados de forma nativa.
                            </p>
                            <Link href="/register" className="btn btn-success-premium">
                                Comenzar Integración <ArrowRight size={20} className="ms-2" />
                            </Link>
                        </div>
                        <div className="col-lg-6">
                            <div className="bg-white/10 backdrop-blur-md p-6 rounded-[2rem] border border-white/10">
                                <div className="d-flex align-items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-full bg-success"></div>
                                    <div className="fw-bold">Estado del Servidor: Online</div>
                                </div>
                                <div className="space-y-3 opacity-50 font-mono text-xs">
                                    <div>[SYS] Sincronizando con Odoo...</div>
                                    <div>[DB] 4,343 flujos activos</div>
                                    <div>[NET] Latencia: 24ms</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
