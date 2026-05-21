'use client';

import { Shield, Lock, Eye } from 'lucide-react';
import Link from 'next/link';

export default function PrivacidadPage() {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-soft">
            <div className="container max-w-4xl mx-auto">
                <div className="mb-12">
                    <div className="badge-premium mb-4">
                        <Shield size={14} className="me-2" />
                        Legal
                    </div>
                    <h1 className="text-5xl font-black tracking-tighter text-black mb-4">
                        Política de <span className="text-gradient">Privacidad</span>
                    </h1>
                    <p className="text-secondary font-bold">Última actualización: Mayo 2026</p>
                </div>

                <div className="bg-white rounded-4xl p-8 md:p-12 shadow-xl border border-light space-y-8 text-black/80">
                    <section>
                        <h2 className="text-2xl font-black mb-4 flex items-center gap-2">
                            <Lock size={20} className="text-success" /> 1. Información que Recopilamos
                        </h2>
                        <p className="mb-4 leading-relaxed">
                            En SmarterBOT recopilamos información para brindar mejores servicios a nuestros usuarios. La información que recopilamos, y cómo la utilizamos, depende de cómo usas nuestros servicios y de cómo administras tus controles de privacidad.
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Información de cuenta:</strong> Al registrarte mediante Google u otros proveedores OAuth, recopilamos tu nombre, dirección de correo electrónico e imagen de perfil.</li>
                            <li><strong>Datos de uso:</strong> Recopilamos información sobre tu actividad en nuestros servicios, como configuraciones de flujos, interacciones de interfaz y registros de rendimiento.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black mb-4 flex items-center gap-2">
                            <Eye size={20} className="text-success" /> 2. Cómo Usamos tu Información
                        </h2>
                        <p className="mb-4 leading-relaxed">
                            Utilizamos la información que recopilamos para proporcionar, mantener y mejorar nuestros servicios, así como para desarrollar nuevos. Además:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Para comunicarnos contigo respecto a actualizaciones del servicio, alertas de seguridad o soporte técnico.</li>
                            <li>Para proteger a SmarterBOT y a nuestros usuarios contra fraudes o abusos.</li>
                            <li>Para la autenticación segura utilizando servicios de terceros (como Supabase o Google OAuth).</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black mb-4">3. Compartir Información</h2>
                        <p className="mb-4 leading-relaxed">
                            No vendemos tu información personal a terceros. Solo compartimos información cuando es estrictamente necesario para la operatividad del servicio (proveedores de infraestructura en la nube) o cuando lo exige la ley aplicable.
                        </p>
                    </section>
                    
                    <div className="pt-8 border-t border-light flex justify-between items-center">
                        <Link href="/terminos" className="text-success font-bold hover:underline">
                            Ver Términos de Servicio
                        </Link>
                        <Link href="/datadelete" className="text-secondary font-bold hover:underline text-sm">
                            Solicitar Eliminación de Datos
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
