import { Book, Code, Terminal, FileText, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Docs = () => {
    const sections = [
        {
            icon: Book,
            title: 'Comenzando',
            description: 'Aprende lo básico de SmarterBOT, instalación y configuración inicial.',
            link: '#'
        },
        {
            icon: Code,
            title: 'Referencia de API',
            description: 'Documentación detallada de la API para desarrolladores e integradores.',
            link: '#'
        },
        {
            icon: Terminal,
            title: 'Guía de Flujos',
            description: 'Cómo crear, importar y gestionar flujos de trabajo de n8n.',
            link: '#'
        },
        {
            icon: Globe,
            title: 'Hosting y Despliegue',
            description: 'Guías para desplegar en VPS, Docker y gestión de dominios.',
            link: '#'
        }
    ];

    return (
        <div className="pt-24 pb-16 min-h-screen">
            <div className="container">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold mb-6">
                            Documentación
                        </h1>
                        <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                            Todo lo que necesitas para construir, desplegar y escalar con SmarterBOT.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-16">
                        {sections.map((section, index) => (
                            <Link
                                key={index}
                                to={section.link}
                                className="card glass p-6 hover:border-primary/50 transition-all group"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 rounded-lg bg-bg-tertiary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        <section.icon className="w-5 h-5 text-text-primary group-hover:text-primary transition-colors" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary-light transition-colors">
                                            {section.title}
                                        </h3>
                                        <p className="text-text-secondary">
                                            {section.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <div className="card bg-bg-secondary/30 border border-border p-8 rounded-2xl">
                        <h2 className="text-2xl font-bold mb-6">Temas Populares</h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            <a href="#" className="flex items-center gap-2 text-text-secondary hover:text-primary-light transition-colors">
                                <FileText className="w-4 h-4" />
                                Configuración de Integración Odoo
                            </a>
                            <a href="#" className="flex items-center gap-2 text-text-secondary hover:text-primary-light transition-colors">
                                <FileText className="w-4 h-4" />
                                Configuración de WhatsApp API
                            </a>
                            <a href="#" className="flex items-center gap-2 text-text-secondary hover:text-primary-light transition-colors">
                                <FileText className="w-4 h-4" />
                                Buenas Prácticas de Seguridad VPS
                            </a>
                            <a href="#" className="flex items-center gap-2 text-text-secondary hover:text-primary-light transition-colors">
                                <FileText className="w-4 h-4" />
                                Nodos de Flujo Personalizados
                            </a>
                            <a href="#" className="flex items-center gap-2 text-text-secondary hover:text-primary-light transition-colors">
                                <FileText className="w-4 h-4" />
                                Gestión de Claves API
                            </a>
                            <a href="#" className="flex items-center gap-2 text-text-secondary hover:text-primary-light transition-colors">
                                <FileText className="w-4 h-4" />
                                Respaldo y Restauración
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Docs;
