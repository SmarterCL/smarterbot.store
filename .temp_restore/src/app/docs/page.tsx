'use client';

import { Book, Code, Terminal, Globe, Search, ArrowRight, Zap, HelpCircle } from 'lucide-react';
import Link from 'next/link';

export default function Docs() {
    const sections = [
        {
            icon: Book,
            title: 'Primeros Pasos',
            description: 'Aprende los conceptos básicos de Smarter, instalación y configuración inicial de tu entorno.',
            link: '#'
        },
        {
            icon: Code,
            title: 'Referencia de API',
            description: 'Documentación técnica detallada de nuestros endpoints para desarrolladores e integraciones custom.',
            link: '#'
        },
        {
            icon: Terminal,
            title: 'Guía de Workflows',
            description: 'Cómo crear, importar y gestionar flujos de trabajo avanzados utilizando n8n y Claw API.',
            link: '#'
        },
        {
            icon: Globe,
            title: 'Hosting y Despliegue',
            description: 'Guías paso a paso para desplegar en VPS, Docker y gestión profesional de dominios y SSL.',
            link: '#'
        }
    ];

    return (
        <div className="pt-32 pb-24 min-h-screen bg-soft">
            <div className="container">
                {/* Header */}
                <div className="text-center mb-16 animate-in fade-in slide-in-from-top-4">
                    <div className="badge-premium mb-4">
                        <Book size={14} className="me-2" />
                        Centro de Ayuda
                    </div>
                    <h1 className="text-6xl font-black tracking-tighter text-black mb-4">
                        Documentación <span className="text-success">Técnica</span>
                    </h1>
                    <p className="text-secondary small fw-bold max-w-2xl mx-auto leading-relaxed">
                        Todo lo que necesitas saber para dominar la plataforma Smarter y llevar la automatización de tu negocio al siguiente nivel.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="max-w-2xl mx-auto mb-16 relative animate-in fade-in zoom-in">
                    <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-secondary" size={24} />
                    <input 
                        type="text" 
                        placeholder="¿Qué estás buscando? (Ej: Webhooks, Odoo, API...)" 
                        className="w-full bg-white border border-light rounded-3xl py-4 pl-16 pr-6 font-bold shadow-xl focus:ring-2 focus:ring-success/20 outline-none"
                    />
                </div>

                {/* Grid */}
                <div className="row g-4">
                    {sections.map((section, index) => (
                        <div key={index} className="col-md-6 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: `${index * 100}ms` }}>
                            <Link
                                href={section.link}
                                className="bg-white rounded-4xl p-8 border border-light shadow-lg hover-lift transition-all group text-decoration-none d-block h-100"
                            >
                                <div className="d-flex align-items-start gap-5">
                                    <div className="w-16 h-16 rounded-3xl bg-soft d-flex align-items-center justify-content-center group-hover:bg-success group-hover:text-white transition-all flex-shrink-0">
                                        <section.icon className="w-8 h-8 text-success group-hover:text-white transition-colors" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-black tracking-tight mb-2 text-black group-hover:text-success transition-colors">
                                            {section.title}
                                        </h3>
                                        <p className="text-secondary small fw-bold mb-0 leading-relaxed">
                                            {section.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Help Section */}
                <div className="mt-24 text-center">
                    <div className="bg-black text-white rounded-4xl p-12 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-success/10 blur-3xl rounded-full -ml-32 -mt-32"></div>
                        <Zap size={48} className="text-success mx-auto mb-6" />
                        <h2 className="text-4xl font-black tracking-tighter mb-4">¿No encuentras lo que buscas?</h2>
                        <p className="text-secondary small fw-bold max-w-xl mx-auto mb-8">
                            Nuestro equipo de soporte técnico está disponible para ayudarte con configuraciones complejas o dudas sobre la API.
                        </p>
                        <div className="flex gap-4 justify-center flex-wrap">
                            <Link href="/contact" className="btn btn-success-premium">
                                Contactar Soporte
                                <ArrowRight size={18} className="ms-2" />
                            </Link>
                            <Link href="/bot" className="btn btn-outline-light rounded-pill px-5 py-3 fw-bold border-2">
                                Comunidad Telegram
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
