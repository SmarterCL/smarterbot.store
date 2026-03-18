'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Default to Spanish as requested
    const [language, setLanguageState] = useState<Language>('es');
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem('language');
        if (saved === 'es' || saved === 'en') {
            setLanguageState(saved);
        }
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (isMounted) {
            localStorage.setItem('language', language);
            document.documentElement.lang = language;
        }
    }, [language, isMounted]);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
    };

    // Simple translation function that nested keys like 'home.hero.title'
    const t = (path: string) => {
        const keys = path.split('.');
        let current: any = translations[language];

        for (const key of keys) {
            if (current?.[key] !== undefined) {
                current = current[key];
            } else {
                return path; // Fallback to key name
            }
        }
        return current;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

// We'll move this to a separate file later if it gets too big
const translations: Record<Language, any> = {
    es: {
        nav: {
            home: 'Inicio',
            clawOs: 'Claw OS',
            workflows: 'Flujos',
            services: 'Servicios',
            integrations: 'Integraciones',
            pricing: 'Precios',
            contact: 'Contacto',
            getStarted: 'Empezar',
        },
        footer: {
            description: 'Ecosistema de IA soberana y automatización para empresas modernas. Despliega tu propio Claw OS, conecta Odoo, Chatwoot y más.',
            product: 'Producto',
            integrations: 'Integraciones',
            company: 'Empresa',
            legal: 'Legal',
            rights: 'Todos los derechos reservados.',
            madeWith: 'Hecho con',
            by: 'por el equipo de Smarter Claw OS',
            about: 'Saber más',
            blog: 'Blog',
            support: 'Soporte',
            privacy: 'Política de Privacidad',
            terms: 'Términos de Servicio',
            cookies: 'Política de Cookies',
        },
        home: {
            hero: {
                badge: 'IA soberana lista para usar en un clic',
                title: 'Automatiza tu Negocio con',
                description: 'La infraestructura de IA privada que evoluciona contigo. De Startup a Gran Empresa, escala tu propio stack de agentes sin configuraciones complejas.',
                ctaWorkflows: 'Claw OS Store',
                ctaDemo: 'Carga tu VPS',
            },
            stats: {
                workflows: 'Agentes Activos',
                integrations: 'Módulos OS',
                users: 'Nodos Privados',
                uptime: 'Disponibilidad',
            },
            features: {
                title: 'Todo lo que necesitas para',
                titleAccent: 'Escalar',
                description: 'Desde agentes de IA hasta hosting soberano, te cubrimos con soluciones de nivel empresarial.',
                n8n: {
                    title: 'Claw OS App Grid',
                    description: 'Accede a Odoo, Chatwoot, y FastAPI pre-configurados en tu propia infraestructura.',
                },
                ecommerce: {
                    title: 'Listo para Odoo',
                    description: 'Integraciones fluidas con el ERP líder para tu negocio en tiempo real.',
                },
                meta: {
                    title: 'Marketing Intelligence',
                    description: 'Automatiza tus campañas de Meta Ads con agentes de IA especializados.',
                },
                vps: {
                    title: 'Hosting Soberano',
                    description: 'VPS optimizados para IA con despliegue instantáneo.',
                },
                custom: {
                    title: 'Modelos a Medida',
                    description: 'Ajuste fino de LLMs y flujos personalizados para tu vertical.',
                },
                domains: {
                    title: 'Dominios IA',
                    description: 'Gestión de dominios premium para tus agentes de IA.',
                },
                learnMore: 'Saber más',
            },
            integrations: {
                title: 'Potentes',
                titleAccent: 'Integraciones',
                description: 'Conectamos tu Claw OS con las herramientas que ya dominas.',
                viewAll: 'Ver Todo el Ecosistema',
            },
            benefits: {
                badge: 'Despliega en minutos, no días',
                title: '¿Por qué elegir',
                description: 'Hacemos que la IA privada sea accesible, potente y asequible. Únete a la revolución soberana con Smarter Claw OS.',
                items: [
                    'Despliegue ultra rápido',
                    'Privacidad total (Self-hosted)',
                    'Soporte 24/7 en español',
                    'Actualizaciones del OS',
                    'Hardware-ready (Mac Mini & VPS)',
                    'Smarter App Store',
                ],
                cta: 'Ver Precios',
                rating: 'Calificación',
                responseTime: 'Soporte Directo',
                uptime: 'SLA Privado',
            },
            cta: {
                title: '¿Listo para tu',
                titleAccent: 'Claw OS',
                description: 'Empieza con tu propio nodo de IA privada hoy mismo. Garantía de reembolso de 30 días.',
                button: 'Crear mi Nodo',
                sales: 'Hablar con Ventas',
            },
        },
        // ... rest stays consistent or can be updated as needed
        support: {
            title: 'Centro de Soporte',
            description: 'Estamos aquí para ayudar. Elige la mejor forma de contactarnos.',
            emailTitle: 'Soporte por Email',
            emailDesc: 'Para consultas generales, problemas técnicos o preguntas de facturación. Respondemos generalmente dentro de 24 horas.',
            docsTitle: 'FAQs y Documentación',
            docsDesc: 'Revisa nuestra documentación y preguntas frecuentes para respuestas rápidas a problemas comunes.',
            docsButton: 'Ver Documentación',
            communityTitle: 'Soporte de la Comunidad',
            communityDesc: 'Únete a nuestra comunidad en GitHub para reportar errores, sugerir funcionalidades o discutir con otros usuarios.',
            communityButton: 'Visitar GitHub Issues',
        },
        privacy: {
            title: 'Política de Privacidad',
            updated: 'Última actualización: 21 de enero, 2026',
            intro: 'En Smarter Claw OS, nos tomamos su privacidad muy en serio. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos su información cuando visita nuestro sitio web smarterbot.store.',
            sections: [
                {
                    title: '1. Recopilación de su Información',
                    content: 'Podemos recopilar información sobre usted de varias maneras. La información que podemos recopilar en el Sitio incluye:',
                    list: [
                        '<strong>Datos Personales:</strong> Información de identificación personal, como su nombre y correo electrónico.',
                        '<strong>Datos Derivados:</strong> Información que nuestros servidores recopilan automáticamente.'
                    ]
                },
                {
                    title: '2. Uso de su Información',
                    content: 'Específicamente, podemos usar la información recopilada para administrar su cuenta, procesar pagos y enviarle actualizaciones críticas.',
                    list: [
                        'Crear y administrar su cuenta.',
                        'Procesar sus pedidos y pagos.',
                        'Fomentar la soberanía de sus datos.'
                    ]
                },
                {
                    title: '5. Contáctenos',
                    content: 'Si tiene preguntas o comentarios, contáctenos en smarterbotcl@gmail.com'
                }
            ]
        },
        terms: {
            title: 'Términos de Servicio',
            updated: 'Última actualización: 21 de Enero de 2026',
            intro: 'Estos Términos rigen su acceso al ecosistema Smarter Claw OS.',
            sections: [
                {
                    title: '1. Uso de los Servicios',
                    content: 'Usted es el dueño de su servidor. El software se entrega tal cual para su despliegue soberano.'
                }
            ]
        },
        status: {
            title: 'Estado del Sistema',
            allOperational: 'Todos los nexos operativos',
            pastIncidents: 'Incidentes Pasados',
            noIncidents: 'No se han reportado incidentes en los últimos 90 días.',
            services: {
                web: 'Portal Smarter Store',
                engine: 'Gestor de Nodos',
                db: 'Nexos de Datos',
                storage: 'Almacenamiento Soberano',
                email: 'Gestión de Alertas',
                integrations: 'Integraciones Externas'
            },
            operational: 'disponible'
        }
    },
    en: {
        nav: {
            home: 'Home',
            clawOs: 'Claw OS',
            workflows: 'Flows',
            services: 'Services',
            integrations: 'Integrations',
            pricing: 'Pricing',
            contact: 'Contact',
            getStarted: 'Get Started',
        },
        footer: {
            description: 'Sovereign AI ecosystem and automation for modern businesses. Deploy your own Claw OS, connect Odoo, Chatwoot, and more.',
            product: 'Product',
            integrations: 'Integrations',
            company: 'Company',
            legal: 'Legal',
            rights: 'All rights reserved.',
            madeWith: 'Made with',
            by: 'by the Smarter Claw OS team',
            about: 'About',
            blog: 'Blog',
            support: 'Support',
            privacy: 'Privacy Policy',
            terms: 'Terms of Service',
            cookies: 'Cookie Policy',
        },
        home: {
            hero: {
                badge: 'Sovereign AI ready in one click',
                title: 'Automate Your Business with',
                description: 'The private AI infrastructure that grows with you. From Startup to Enterprise, scale your own agent stack without complex setups.',
                ctaWorkflows: 'Claw OS Store',
                ctaDemo: 'Deploy VPS',
            },
            stats: {
                workflows: 'Active Agents',
                integrations: 'OS Modules',
                users: 'Private Nodes',
                uptime: 'Availability',
            },
            features: {
                title: 'Everything You Need to',
                titleAccent: 'Scale',
                description: 'From AI agents to sovereign hosting, we cover you with enterprise-grade solutions.',
                n8n: {
                    title: 'Claw OS App Grid',
                    description: 'Access Odoo, Chatwoot, and FastAPI pre-configured in your own infrastructure.',
                },
                ecommerce: {
                    title: 'Odoo Ready',
                    description: 'Seamless integrations with the leading ERP for your business in real-time.',
                },
                meta: {
                    title: 'Marketing Intelligence',
                    description: 'Automate your Meta Ads campaigns with specialized AI agents.',
                },
                vps: {
                    title: 'Sovereign Hosting',
                    description: 'IA-optimized VPS with instant deployment.',
                },
                custom: {
                    title: 'Custom Models',
                    description: 'LLM fine-tuning and custom flows for your specific vertical.',
                },
                domains: {
                    title: 'AI Domains',
                    description: 'Premium domain management for your AI agents.',
                },
                learnMore: 'Learn more',
            },
            integrations: {
                title: 'Powerful',
                titleAccent: 'Integrations',
                description: 'We connect your Claw OS with the tools you already master.',
                viewAll: 'View All Ecosystem',
            },
            benefits: {
                badge: 'Deploy in minutes, not days',
                title: 'Why Choose',
                description: 'We make private AI accessible, powerful, and affordable. Join the sovereign revolution with Smarter Claw OS.',
                items: [
                    'Ultra-fast deployment',
                    'Total privacy (Self-hosted)',
                    '24/7 Spanish support',
                    'OS Updates',
                    'Hardware-ready (Mac Mini & VPS)',
                    'Smarter App Store',
                ],
                cta: 'View Pricing',
                rating: 'Rating',
                responseTime: 'Direct Support',
                uptime: 'Private SLA',
            },
            cta: {
                title: 'Ready for your',
                titleAccent: 'Claw OS',
                description: 'Start with your own private AI node today. 30-day money-back guarantee.',
                button: 'Create My Node',
                sales: 'Talk to Sales',
            },
        },
        support: {
            title: 'Support Center',
            description: 'We\'re here to help. Choose the best way to get in touch with us.',
            emailTitle: 'Email Support',
            emailDesc: 'For general inquiries, technical issues, or billing questions. We typically respond within 24 hours.',
            docsTitle: 'FAQs & Documentation',
            docsDesc: 'Check our documentation and frequently asked questions for quick answers to common problems.',
            docsButton: 'View Documentation',
            communityTitle: 'Community Support',
            communityDesc: 'Join our community on GitHub to report bugs, suggest features, or discuss with other users.',
            communityButton: 'Visit GitHub Issues',
        },
        privacy: {
            title: 'Privacy Policy',
            updated: 'Last updated: January 21, 2026',
            intro: 'At Smarter Claw OS, we take your privacy very seriously. This Privacy Policy explains how we collect and protect your information.',
            sections: [
                {
                    title: '1. Collection of Your Information',
                    content: 'We collect minimal data to ensure your sovereign deployment works perfectly.'
                }
            ]
        },
        terms: {
            title: 'Terms of Service',
            updated: 'Last updated: January 21, 2026',
            intro: 'These Terms govern your access to Smarter Claw OS.'
        },
        status: {
            title: 'System Status',
            allOperational: 'All nodes operational',
            pastIncidents: 'Past Incidents',
            noIncidents: 'No incidents reported in the last 90 days.',
            services: {
                web: 'Smarter Store Portal',
                engine: 'Node Manager',
                db: 'Data Nexus',
                storage: 'Sovereign Storage',
                email: 'Alert Management',
                integrations: 'External Integrations'
            },
            operational: 'available'
        }
    }
};
