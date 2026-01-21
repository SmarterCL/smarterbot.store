import { Mail, MessageCircle, HelpCircle } from 'lucide-react';

const Support = () => {
    return (
        <div className="pt-24 pb-16 min-h-screen">
            <div className="container">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-6">
                        Centro de Soporte
                    </h1>
                    <p className="text-xl text-text-secondary mb-12">
                        Estamos aquí para ayudar. Elige la mejor forma de contactarnos.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Email Support */}
                        <div className="card glass p-8">
                            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6">
                                <Mail className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Soporte por Email</h3>
                            <p className="text-text-secondary mb-6">
                                Para consultas generales, problemas técnicos o preguntas de facturación. Respondemos generalmente dentro de 24 horas.
                            </p>
                            <a href="mailto:support@smarterbot.store" className="btn btn-primary w-full justify-center">
                                support@smarterbot.store
                            </a>
                        </div>

                        {/* Terms & Policies */}
                        <div className="card glass p-8">
                            <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-6">
                                <HelpCircle className="w-6 h-6 text-secondary" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">FAQs y Documentación</h3>
                            <p className="text-text-secondary mb-6">
                                Revisa nuestra documentación y preguntas frecuentes para respuestas rápidas.
                            </p>
                            <a href="/docs" className="btn btn-secondary w-full justify-center">
                                Visitar Documentación
                            </a>
                        </div>
                    </div>

                    <div className="mt-12 p-8 card bg-bg-secondary/50 border border-border">
                        <div className="flex items-start gap-4">
                            <MessageCircle className="w-6 h-6 text-accent mt-1" />
                            <div>
                                <h3 className="text-xl font-bold mb-2">Soporte de la Comunidad</h3>
                                <p className="text-text-secondary">
                                    Únete a nuestra comunidad en GitHub para reportar errores, sugerir funcionalidades o discutir con otros usuarios.
                                </p>
                                <a
                                    href="https://github.com/SmarterCL/smarterbot.store/issues"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary-light hover:underline mt-2 inline-block"
                                >
                                    Visitar GitHub Issues &rarr;
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;
