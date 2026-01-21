import { Book, Code, Terminal, FileText, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Docs = () => {
    const sections = [
        {
            icon: Book,
            title: 'Getting Started',
            description: 'Learn the basics of SmarterBOT, installation, and initial setup.',
            link: '#'
        },
        {
            icon: Code,
            title: 'API Reference',
            description: 'Detailed API documentation for developers and integrators.',
            link: '#'
        },
        {
            icon: Terminal,
            title: 'Workflows Guide',
            description: 'How to create, import, and manage n8n workflows.',
            link: '#'
        },
        {
            icon: Globe,
            title: 'Hosting & Deployment',
            description: 'Guides on deploying to VPS, Docker, and managing domains.',
            link: '#'
        }
    ];

    return (
        <div className="pt-24 pb-16 min-h-screen">
            <div className="container">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold mb-6">
                            Documentation
                        </h1>
                        <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                            Everything you need to build, deploy, and scale with SmarterBOT.
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
                        <h2 className="text-2xl font-bold mb-6">Popular Topics</h2>
                        <div className="grid md:grid-cols-3 gap-4">
                            <a href="#" className="flex items-center gap-2 text-text-secondary hover:text-primary-light transition-colors">
                                <FileText className="w-4 h-4" />
                                Setting up Odoo Integration
                            </a>
                            <a href="#" className="flex items-center gap-2 text-text-secondary hover:text-primary-light transition-colors">
                                <FileText className="w-4 h-4" />
                                WhatsApp API Setup
                            </a>
                            <a href="#" className="flex items-center gap-2 text-text-secondary hover:text-primary-light transition-colors">
                                <FileText className="w-4 h-4" />
                                VPS Security Best Practices
                            </a>
                            <a href="#" className="flex items-center gap-2 text-text-secondary hover:text-primary-light transition-colors">
                                <FileText className="w-4 h-4" />
                                Custom Workflow Nodes
                            </a>
                            <a href="#" className="flex items-center gap-2 text-text-secondary hover:text-primary-light transition-colors">
                                <FileText className="w-4 h-4" />
                                Managing API Keys
                            </a>
                            <a href="#" className="flex items-center gap-2 text-text-secondary hover:text-primary-light transition-colors">
                                <FileText className="w-4 h-4" />
                                Backup & Restore
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Docs;
