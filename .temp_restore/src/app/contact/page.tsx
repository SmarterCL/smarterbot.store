'use client';

import { useState } from 'react';
import { 
    Mail, Phone, MapPin, Send, MessageSquare, 
    Twitter, Linkedin, Github, CheckCircle2, 
    Clock, Globe, Shield, Zap, ArrowRight,
    Headphones, Calendar, Building
} from 'lucide-react';
import Link from 'next/link';

export default function Contact() {
    const [loading, setLoading] = useState(false);
    const [ok, setOk] = useState<null | boolean>(null);
    const [error, setError] = useState<string | null>(null);

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        setOk(null);
        setError(null);

        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            setOk(true);
            (e.target as HTMLFormElement).reset();
        } catch {
            setError('Error al enviar el mensaje. Intente nuevamente.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="pt-32 pb-24 min-h-screen bg-white selection:bg-success selection:text-white">
            <div className="container">
                {/* Header Section with Glassmorphism */}
                <div className="row justify-content-center mb-16">
                    <div className="col-lg-10 text-center animate-in fade-in slide-in-from-top-10 duration-700">
                        <div className="d-inline-flex align-items-center gap-2 bg-soft px-4 py-2 rounded-full border border-light mb-6">
                            <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-secondary">Centro de Soporte Smarter</span>
                        </div>
                        <h1 className="text-7xl md:text-8xl font-black tracking-tighter text-black mb-6 leading-none">
                            Hagamos algo <span className="text-gradient">increíble</span> juntos.
                        </h1>
                        <p className="text-xl text-secondary font-medium max-w-3xl mx-auto leading-relaxed">
                            Ya sea que busques automatizar tu primer flujo o escalar una operación global, nuestro equipo de expertos está listo para ayudarte.
                        </p>
                    </div>
                </div>

                <div className="row g-5 align-items-stretch">
                    {/* Left: Interactive Form Card */}
                    <div className="col-lg-7 animate-in fade-in slide-in-from-left-10 duration-1000">
                        <div className="bg-white rounded-[2.5rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-light p-8 md:p-12 h-100">
                            <div className="mb-10">
                                <h2 className="text-3xl font-black tracking-tight text-black mb-2">Envíanos un mensaje</h2>
                                <p className="text-secondary font-bold small">Respondemos en menos de 2 horas en días hábiles.</p>
                            </div>

                            <form onSubmit={onSubmit} className="row g-4">
                                <div className="col-md-6">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-black mb-3 block opacity-50">Nombre Completo</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Ej: Elon Musk"
                                        className="form-control bg-soft border-0 rounded-2xl py-4 px-6 font-bold text-black focus:ring-4 focus:ring-success/5 transition-all outline-none"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-black mb-3 block opacity-50">Email Corporativo</label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="tu@empresa.com"
                                        className="form-control bg-soft border-0 rounded-2xl py-4 px-6 font-bold text-black focus:ring-4 focus:ring-success/5 transition-all outline-none"
                                    />
                                </div>
                                <div className="col-12">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-black mb-3 block opacity-50">¿En qué podemos ayudarte?</label>
                                    <select className="form-select bg-soft border-0 rounded-2xl py-4 px-6 font-bold text-black focus:ring-4 focus:ring-success/5 transition-all outline-none appearance-none">
                                        <option>Automatización de Flujos (n8n)</option>
                                        <option>Integración Odoo ERP</option>
                                        <option>Gestión de VPS & Infraestructura</option>
                                        <option>E-commerce & Mercado Pago</option>
                                        <option>Soporte Técnico / Otros</option>
                                    </select>
                                </div>
                                <div className="col-12">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-black mb-3 block opacity-50">Mensaje</label>
                                    <textarea
                                        required
                                        rows={5}
                                        placeholder="Cuéntanos sobre tu proyecto o desafío actual..."
                                        className="form-control bg-soft border-0 rounded-2xl py-4 px-6 font-bold text-black focus:ring-4 focus:ring-success/5 transition-all outline-none resize-none"
                                    ></textarea>
                                </div>
                                <div className="col-12 pt-4">
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="btn btn-black w-100 py-4 rounded-2xl font-black text-xs uppercase tracking-widest d-flex align-items-center justify-content-center gap-3 shadow-2xl transition-all hover-scale"
                                    >
                                        {loading ? (
                                            <div className="spinner-border spinner-border-sm text-success" role="status"></div>
                                        ) : (
                                            <>
                                                Enviar Mensaje <Send size={18} className="text-success" />
                                            </>
                                        )}
                                    </button>
                                    
                                    {ok && (
                                        <div className="p-4 bg-success/5 border border-success/10 rounded-2xl mt-6 flex items-center gap-4 text-success font-black animate-in zoom-in duration-500">
                                            <div className="bg-success text-white p-2 rounded-full"><CheckCircle2 size={20} /></div>
                                            ¡Mensaje enviado! Un consultor se pondrá en contacto pronto.
                                        </div>
                                    )}
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Right: Info Column */}
                    <div className="col-lg-5 animate-in fade-in slide-in-from-right-10 duration-1000">
                        <div className="flex flex-col gap-5 h-100">
                            {/* Fast Contact */}
                            <div className="bg-black text-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative overflow-hidden flex-1">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-success/10 blur-[100px] rounded-full -mr-32 -mt-32"></div>
                                <h3 className="text-3xl font-black tracking-tight mb-8 relative">Contacto Directo</h3>
                                
                                <div className="space-y-8 relative">
                                    <div className="flex items-center gap-5 group">
                                        <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-success transition-all group-hover:bg-success group-hover:text-white">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-black uppercase tracking-widest text-secondary mb-1">Escríbenos</div>
                                            <div className="text-lg font-bold">smarterbotcl@gmail.com</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-5 group">
                                        <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-success transition-all group-hover:bg-success group-hover:text-white">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-black uppercase tracking-widest text-secondary mb-1">WhatsApp Business</div>
                                            <div className="text-lg font-bold">+56 9 3232 5050</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-5 group">
                                        <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-success transition-all group-hover:bg-success group-hover:text-white">
                                            <Building size={24} />
                                        </div>
                                        <div>
                                            <div className="text-[10px] font-black uppercase tracking-widest text-secondary mb-1">Oficina Central</div>
                                            <div className="text-lg font-bold">Santiago, Chile</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-12 pt-8 border-t border-white/10 relative">
                                    <h4 className="text-[10px] font-black uppercase tracking-widest text-secondary mb-5">Horario de Atención</h4>
                                    <div className="flex items-center gap-3 text-sm font-bold">
                                        <Clock size={16} className="text-success" />
                                        Lunes a Viernes: 09:00 - 18:00 (CLT)
                                    </div>
                                </div>
                            </div>

                            {/* Demo Card */}
                            <div className="bg-soft rounded-[2.5rem] p-8 border border-light flex flex-col justify-between group cursor-pointer overflow-hidden relative">
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-black tracking-tight mb-3">¿Prefieres una Demo?</h3>
                                    <p className="text-secondary small font-bold mb-6">Agenda una llamada de 15 min con un especialista.</p>
                                    <Link href="#" className="flex items-center gap-2 text-black font-black uppercase text-[10px] tracking-widest group-hover:text-success transition-colors">
                                        Agendar Calendly <ArrowRight size={14} className="transition-transform group-hover:translate-x-2" />
                                    </Link>
                                </div>
                                <Calendar size={120} className="absolute -bottom-10 -right-10 text-black opacity-[0.03] rotate-12" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trust Footer */}
                <div className="mt-24 pt-16 border-t border-light">
                    <div className="row g-4 align-items-center">
                        <div className="col-md-4 text-center text-md-start">
                            <h4 className="font-black text-xl mb-2">Soporte Certificado</h4>
                            <p className="text-secondary small font-bold mb-0">Infraestructura AWS & Hostinger</p>
                        </div>
                        <div className="col-md-8">
                            <div className="d-flex justify-content-center justify-content-md-end gap-5 opacity-30 grayscale filter">
                                <div className="h4 font-black tracking-tighter">AWS</div>
                                <div className="h4 font-black tracking-tighter">STRIPE</div>
                                <div className="h4 font-black tracking-tighter">META</div>
                                <div className="h4 font-black tracking-tighter">ODOO</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
