'use client';

import { Trash2, AlertTriangle, ArrowRight, Mail } from 'lucide-react';
import Link from 'next/link';

export default function DataDeletePage() {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-soft">
            <div className="container max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <div className="badge-premium mb-4 bg-danger/10 text-danger border-danger/20">
                        <AlertTriangle size={14} className="me-2" />
                        Privacidad de Datos
                    </div>
                    <h1 className="text-5xl font-black tracking-tighter text-black mb-4">
                        Eliminación de <span className="text-danger">Datos</span>
                    </h1>
                    <p className="text-secondary font-bold">
                        Instrucciones sobre cómo solicitar la eliminación completa de tus datos y cuenta de SmarterBOT.
                    </p>
                </div>

                <div className="bg-white rounded-4xl p-8 md:p-12 shadow-xl border border-light text-black/80">
                    <div className="bg-soft p-6 rounded-3xl mb-8 flex items-start gap-4">
                        <Trash2 className="text-danger flex-shrink-0 mt-1" size={24} />
                        <div>
                            <h3 className="font-black text-xl mb-2">Tu Derecho al Olvido</h3>
                            <p className="text-sm font-bold text-secondary mb-0 leading-relaxed">
                                En cumplimiento con el RGPD y otras normativas de protección de datos, te ofrecemos un mecanismo sencillo para solicitar la eliminación permanente de toda tu información personal vinculada a nuestros servicios, incluyendo OAuth de Google o Meta.
                            </p>
                        </div>
                    </div>

                    <h3 className="text-2xl font-black mb-4">¿Cómo solicitar la eliminación?</h3>
                    <div className="space-y-6 mb-10">
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-black flex-shrink-0">1</div>
                            <div>
                                <h4 className="font-bold text-lg">Vía Correo Electrónico</h4>
                                <p className="text-secondary text-sm">
                                    Envía un correo desde la cuenta registrada a <strong>smarterbotcl@gmail.com</strong> con el asunto "Solicitud de Eliminación de Datos". Procesaremos la eliminación en un plazo máximo de 72 horas.
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex gap-4">
                            <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-black flex-shrink-0">2</div>
                            <div>
                                <h4 className="font-bold text-lg">Eliminación OAuth App</h4>
                                <p className="text-secondary text-sm">
                                    Si utilizaste Google OAuth o Meta Login, puedes revocar el acceso a SmarterBOT directamente desde el panel de seguridad de Google o Facebook. Al hacer esto, nuestros sistemas detectarán la revocación y programarán la purga de los datos cacheados.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-light pt-8 text-center">
                        <p className="text-sm text-secondary font-bold mb-6">
                            Nota: La eliminación de la cuenta es irreversible y resultará en la detención inmediata de todos tus flujos, agentes y bots asociados.
                        </p>
                        <a 
                            href="mailto:smarterbotcl@gmail.com?subject=Solicitud de Eliminación de Datos" 
                            className="btn btn-black rounded-full px-6 py-3 font-black text-sm d-inline-flex items-center gap-2"
                        >
                            <Mail size={16} /> Solicitar Eliminación Ahora
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
