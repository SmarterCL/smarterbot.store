'use client';

import { FileText, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function TerminosPage() {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-soft">
            <div className="container max-w-4xl mx-auto">
                <div className="mb-12">
                    <div className="badge-premium mb-4">
                        <FileText size={14} className="me-2" />
                        Legal
                    </div>
                    <h1 className="text-5xl font-black tracking-tighter text-black mb-4">
                        Términos de <span className="text-gradient">Servicio</span>
                    </h1>
                    <p className="text-secondary font-bold">Última actualización: Mayo 2026</p>
                </div>

                <div className="bg-white rounded-4xl p-8 md:p-12 shadow-xl border border-light space-y-8 text-black/80">
                    <section>
                        <h2 className="text-2xl font-black mb-4 flex items-center gap-2">
                            <CheckCircle2 size={20} className="text-success" /> 1. Aceptación de los Términos
                        </h2>
                        <p className="mb-4 leading-relaxed">
                            Al acceder y utilizar SmarterBOT.store y nuestros servicios relacionados, aceptas estar sujeto a estos Términos de Servicio y a todas las leyes y regulaciones aplicables. Si no estás de acuerdo con alguno de estos términos, tienes prohibido usar o acceder a este sitio.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black mb-4">2. Uso de la Plataforma</h2>
                        <p className="mb-4 leading-relaxed">
                            Te concedemos una licencia limitada, no exclusiva e intransferible para acceder a la plataforma SmarterBOT para uso comercial propio. No puedes:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Modificar o copiar los materiales de nuestra interfaz o código propietario.</li>
                            <li>Usar los servicios para actividades ilegales o que violen las políticas de nuestros socios (Meta, Google, Supabase, n8n).</li>
                            <li>Intentar descompilar o aplicar ingeniería inversa a cualquier software en SmarterBOT.store.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-black mb-4">3. Cuentas y Seguridad</h2>
                        <p className="mb-4 leading-relaxed">
                            Si creas una cuenta (por ejemplo, mediante Google OAuth), eres responsable de mantener la seguridad de tu cuenta y eres plenamente responsable de todas las actividades que ocurran bajo la cuenta. Debes notificarnos inmediatamente sobre cualquier uso no autorizado.
                        </p>
                    </section>
                    
                    <section>
                        <h2 className="text-2xl font-black mb-4">4. Disponibilidad (SLA)</h2>
                        <p className="mb-4 leading-relaxed">
                            Nos esforzamos por garantizar un SLA de 99.9% para nuestros clientes Business y Enterprise. Sin embargo, los servicios se proporcionan "tal cual". No garantizamos que los servicios serán ininterrumpidos o estarán libres de errores en todo momento.
                        </p>
                    </section>
                    
                    <div className="pt-8 border-t border-light mt-8">
                        <Link href="/privacidad" className="text-success font-bold hover:underline">
                            Ver Política de Privacidad
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
