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
    const [language, setLanguage] = useState<Language>(() => {
        const saved = localStorage.getItem('language');
        return (saved as Language) || 'es';
    });

    useEffect(() => {
        localStorage.setItem('language', language);
        document.documentElement.lang = language;
    }, [language]);

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
            workflows: 'Flujos',
            services: 'Servicios',
            integrations: 'Integraciones',
            pricing: 'Precios',
            contact: 'Contacto',
            getStarted: 'Empezar',
        },
        footer: {
            description: 'Flujos de automatización e integraciones para empresas modernas. Despliega potentes flujos de n8n, conecta Odoo, Meta Ads y más.',
            product: 'Producto',
            integrations: 'Integraciones',
            company: 'Empresa',
            legal: 'Legal',
            rights: 'Todos los derechos reservados.',
            madeWith: 'Hecho con',
            by: 'por el equipo de SmarterBOT',
            about: 'Saber más',
            blog: 'Blog',
            support: 'Soporte',
            privacy: 'Política de Privacidad',
            terms: 'Términos de Servicio',
            cookies: 'Política de Cookies',
        },
        home: {
            hero: {
                badge: 'Con la confianza de más de 10.000 empresas',
                title: 'Automatiza tu Negocio con',
                description: 'Despliega potentes flujos de n8n, integra Odoo, escala con hosting VPS y potencia tu marketing con Meta Ads. Todo en una sola plataforma.',
                ctaWorkflows: 'Ver Flujos',
                ctaDemo: 'Empezar Gratis',
            },
            stats: {
                workflows: 'Flujos',
                integrations: 'Integraciones',
                users: 'Usuarios Activos',
                uptime: 'Tiempo de Actividad',
            },
            features: {
                title: 'Todo lo que Necesitas para',
                titleAccent: 'Automatizar',
                description: 'Desde flujos de trabajo hasta hosting, te cubrimos con soluciones de nivel empresarial',
                n8n: {
                    title: 'Flujos n8n',
                    description: 'Más de 4.343 flujos listos para producción de nuestra colección curada',
                },
                ecommerce: {
                    title: 'Listo para E-commerce',
                    description: 'Integraciones fluidas con Odoo para tu tienda online y negocio',
                },
                meta: {
                    title: 'Integración Meta Ads',
                    description: 'Potente automatización de marketing con campañas de Meta Ads',
                },
                vps: {
                    title: 'VPS y Hosting',
                    description: 'Soluciones de hosting de nivel empresarial impulsadas por Hostinger',
                },
                custom: {
                    title: 'Desarrollo a Medida',
                    description: 'Soluciones de automatización personalizadas para tus necesidades únicas',
                },
                domains: {
                    title: 'Dominios Globales',
                    description: 'Registro de dominios premium y servicios de gestión',
                },
                learnMore: 'Saber más',
            },
            integrations: {
                title: 'Potentes',
                titleAccent: 'Integraciones',
                description: 'Conéctate con las herramientas que ya usas y amas',
                viewAll: 'Ver Todas las Integraciones',
            },
            benefits: {
                badge: 'Despliega en minutos, no días',
                title: '¿Por qué elegir',
                description: 'Hacemos que la automatización sea accesible, potente y asequible para empresas de todos los tamaños. Únete a miles de empresas que ya automatizan con SmarterBOT.',
                items: [
                    'Despliegue ultra rápido',
                    'Seguridad de nivel empresarial',
                    'Soporte 24/7',
                    'Actualizaciones automáticas',
                    'Infraestructura escalable',
                    'Integraciones personalizadas',
                ],
                cta: 'Ver Precios',
                rating: 'Calificación',
                responseTime: 'Tiempo de respuesta',
                uptime: 'SLA de disponibilidad',
            },
            cta: {
                title: '¿Listo para',
                titleAccent: 'Automatizar',
                description: 'Empieza con nuestro plan gratuito y escala a medida que creces. No se requiere tarjeta de crédito.',
                button: 'Prueba Gratis',
                sales: 'Hablar con Ventas',
            },
        },
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
            intro: 'En SmarterBOT, nos tomamos su privacidad muy en serio. Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y protegemos su información cuando visita nuestro sitio web smarterbot.store, incluyendo cualquier otro medio, canal de medios, sitio web móvil o aplicación móvil relacionada o conectada.',
            sections: [
                {
                    title: '1. Recopilación de su Información',
                    content: 'Podemos recopilar información sobre usted de varias maneras. La información que podemos recopilar en el Sitio incluye:',
                    list: [
                        '<strong>Datos Personales:</strong> Información de identificación personal, como su nombre, dirección de envío, dirección de correo electrónico y número de teléfono, que nos proporciona voluntariamente cuando se registra en el Sitio.',
                        '<strong>Datos Derivados:</strong> Información que nuestros servidores recopilan automáticamente cuando accede al Sitio, como su dirección IP, tipo de navegador, sistema operativo, tiempos de acceso y las páginas que ha visto directamente antes y después de acceder al Sitio.'
                    ]
                },
                {
                    title: '2. Uso de su Información',
                    content: 'Tener información precisa sobre usted nos permite brindarle una experiencia fluida, eficiente y personalizada. Específicamente, podemos usar la información recopilada sobre usted a través del Sitio para:',
                    list: [
                        'Crear y administrar su cuenta.',
                        'Procesar sus pedidos y pagos.',
                        'Enviarle correos electrónicos sobre su cuenta o pedido.',
                        'Cumplir y gestionar compras, pedidos, pagos y otras transacciones relacionadas con el Sitio.',
                        'Enviarle un boletín informativo.',
                        'Solicitar comentarios y contactarlo sobre su uso del Sitio.'
                    ]
                },
                {
                    title: '3. Divulgación de su Información',
                    content: 'Podemos compartir la información que hemos recopilado sobre usted en ciertas situaciones. Su información puede ser divulgada de la siguiente manera:',
                    list: [
                        '<strong>Por Ley o para Proteger Derechos:</strong> Si creemos que la divulgación de información sobre usted es necesaria para responder a procesos legales, investigar o remediar posibles violaciones de nuestras políticas, o proteger los derechos, propiedad y seguridad de otros.',
                        '<strong>Proveedores de Servicios Externos:</strong> Podemos compartir su información con terceros que realizan servicios para nosotros o en nuestro nombre, incluido el procesamiento de pagos, análisis de datos, entrega de correo electrónico, servicios de alojamiento, servicio al cliente y asistencia de marketing.'
                    ]
                },
                {
                    title: '4. Seguridad de su Información',
                    content: 'Utilizamos medidas de seguridad administrativas, técnicas y físicas para ayudar a proteger su información personal. Si bien hemos tomado medidas razonables para proteger la información personal que nos proporciona, tenga en cuenta que a pesar de nuestros esfuerzos, ninguna medida de seguridad es perfecta o impenetrable, y ningún método de transmisión de datos puede garantizarse contra cualquier intercepción u otro tipo de uso indebido.'
                },
                {
                    title: '5. Contáctenos',
                    content: 'Si tiene preguntas o comentarios sobre esta Política de Privacidad, contáctenos en:'
                }
            ]
        },
        terms: {
            title: 'Términos de Servicio',
            updated: 'Última actualización: 21 de Enero de 2026',
            intro: 'Estos Términos de Servicio ("Términos") rigen su acceso y uso del sitio web y los servicios de SmarterBOT. Al acceder o utilizar nuestros servicios, usted acepta estar sujeto a estos Términos y nuestra Política de Privacidad.',
            sections: [
                {
                    title: '1. Uso de los Servicios',
                    content: 'Puede utilizar nuestros servicios solo para fines legales. Usted acepta no utilizar nuestros servicios de ninguna manera que viole cualquier ley o regulación local, nacional o internacional aplicable.'
                },
                {
                    title: '2. Cuentas',
                    content: 'Cuando crea una cuenta con nosotros, debe proporcionar información precisa, completa y actual en todo momento. El no hacerlo constituye un incumplimiento de los Términos, lo que puede resultar en la terminación inmediata de su cuenta en nuestro Servicio.',
                    extra: 'Usted es responsable de proteger la contraseña que utiliza para acceder al Servicio y de cualquier actividad o acción bajo su contraseña.'
                },
                {
                    title: '3. Propiedad Intelectual',
                    content: 'El Servicio y su contenido original, características y funcionalidad son y seguirán siendo propiedad exclusiva de SmarterBOT y sus licenciantes. El Servicio está protegido por derechos de autor, marcas registradas y otras leyes tanto de Chile como de países extranjeros.'
                },
                {
                    title: '4. Enlaces a Otros Sitios Web',
                    content: 'Nuestro Servicio puede contener enlaces a sitios web o servicios de terceros que no son propiedad ni están controlados por SmarterBOT. SmarterBOT no tiene control ni asume responsabilidad por el contenido, las políticas de privacidad o las prácticas de sitios web o servicios de terceros.'
                },
                {
                    title: '5. Terminación',
                    content: 'Podemos terminar o suspender su cuenta inmediatamente, sin previo aviso o responsabilidad, por cualquier motivo, incluido, entre otros, si incumple los Términos. Tras la terminación, su derecho a utilizar el Servicio cesará inmediatamente.'
                },
                {
                    title: '6. Limitación de Responsabilidad',
                    content: 'En ningún caso SmarterBOT, ni sus directores, empleados, socios, agentes, proveedores o afiliados, serán responsables de daños indirectos, incidentales, especiales, consecuentes o punitivos, incluidos, entre otros, pérdida de ganancias, datos, uso, buena voluntad u otras pérdidas intangibles.'
                },
                {
                    title: '7. Cambios',
                    content: 'Nos reservamos el derecho, a nuestra sola discreción, de modificar o reemplazar estos Términos en cualquier momento. Si una revisión es importante, intentaremos proporcionar un aviso de al menos 30 días antes de que entren en vigor los nuevos términos.'
                },
                {
                    title: '8. Contáctenos',
                    content: 'Si tiene alguna pregunta sobre estos Términos, contáctenos en:'
                }
            ]
        },
        status: {
            title: 'Estado del Sistema',
            allOperational: 'Todos los sistemas operativos',
            pastIncidents: 'Incidentes Pasados',
            noIncidents: 'No se han reportado incidentes en los últimos 90 días.',
            services: {
                web: 'Sitio Web y API',
                engine: 'Motor de Flujos',
                db: 'Clusters de Base de Datos',
                storage: 'Servicio de Almacenamiento',
                email: 'Envío de Correos',
                integrations: 'Integraciones de Terceros'
            },
            operational: 'operativo'
        }
    },
    en: {
        nav: {
            home: 'Home',
            workflows: 'Workflows',
            services: 'Services',
            integrations: 'Integrations',
            pricing: 'Pricing',
            contact: 'Contact',
            getStarted: 'Get Started',
        },
        footer: {
            description: 'Automation workflows and integrations for modern businesses. Deploy powerful n8n workflows, connect Odoo, Meta Ads, and more.',
            product: 'Product',
            integrations: 'Integrations',
            company: 'Company',
            legal: 'Legal',
            rights: 'All rights reserved.',
            madeWith: 'Made with',
            by: 'by the SmarterBOT team',
            about: 'About',
            blog: 'Blog',
            support: 'Support',
            privacy: 'Privacy Policy',
            terms: 'Terms of Service',
            cookies: 'Cookie Policy',
        },
        home: {
            hero: {
                badge: 'Trusted by 10,000+ businesses worldwide',
                title: 'Automate Your Business with',
                description: 'Deploy powerful n8n workflows, integrate Odoo, scale with VPS hosting, and supercharge your marketing with Meta Ads. All in one platform.',
                ctaWorkflows: 'Browse Workflows',
                ctaDemo: 'Get Started Free',
            },
            stats: {
                workflows: 'Workflows',
                integrations: 'Integrations',
                users: 'Active Users',
                uptime: 'Uptime',
            },
            features: {
                title: 'Everything You Need to',
                titleAccent: 'Automate',
                description: 'From workflows to hosting, we\'ve got you covered with enterprise-grade solutions',
                n8n: {
                    title: 'n8n Workflows',
                    description: '4,343+ production-ready automation workflows from our curated collection',
                },
                ecommerce: {
                    title: 'E-commerce Ready',
                    description: 'Seamless Odoo integrations for your online store and business',
                },
                meta: {
                    title: 'Meta Ads Integration',
                    description: 'Powerful marketing automation with Meta Ads campaigns',
                },
                vps: {
                    title: 'VPS & Hosting',
                    description: 'Enterprise-grade hosting solutions powered by Hostinger',
                },
                custom: {
                    title: 'Custom Development',
                    description: 'Tailored automation solutions for your unique business needs',
                },
                domains: {
                    title: 'Global Domains',
                    description: 'Premium domain registration and management services',
                },
                learnMore: 'Learn more',
            },
            integrations: {
                title: 'Powerful',
                titleAccent: 'Integrations',
                description: 'Connect with the tools you already use and love',
                viewAll: 'View All Integrations',
            },
            benefits: {
                badge: 'Deploy in minutes, not days',
                title: 'Why Choose',
                description: 'We make automation accessible, powerful, and affordable for businesses of all sizes. Join thousands of companies already automating with SmarterBOT.',
                items: [
                    'Lightning-fast deployment',
                    'Enterprise-grade security',
                    '24/7 support',
                    'Automatic updates',
                    'Scalable infrastructure',
                    'Custom integrations',
                ],
                cta: 'View Pricing',
                rating: 'Customer Rating',
                responseTime: 'Response Time',
                uptime: 'Uptime SLA',
            },
            cta: {
                title: 'Ready to',
                titleAccent: 'Automate',
                description: 'Start with our free tier and scale as you grow. No credit card required.',
                button: 'Start Free Trial',
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
            intro: 'At SmarterBOT, we take your privacy very seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website smarterbot.store, including any other media form, media channel, mobile website, or mobile application related or connected thereto.',
            sections: [
                {
                    title: '1. Collection of Your Information',
                    content: 'We may collect information about you in a variety of ways. The information we may collect on the Site includes:',
                    list: [
                        '<strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us when you register with the Site.',
                        '<strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.'
                    ]
                },
                {
                    title: '2. Use of Your Information',
                    content: 'Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:',
                    list: [
                        'Create and manage your account.',
                        'Process your orders and payments.',
                        'Email you regarding your account or order.',
                        'Fulfill and manage purchases, orders, payments, and other transactions related to the Site.',
                        'Send you a newsletter.',
                        'Solicit feedback and contact you about your use of the Site.'
                    ]
                },
                {
                    title: '3. Disclosure of Your Information',
                    content: 'We may share information we have collected about you in certain situations. Your information may be disclosed as follows:',
                    list: [
                        '<strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others.',
                        '<strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.'
                    ]
                },
                {
                    title: '4. Security of Your Information',
                    content: 'We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.'
                },
                {
                    title: '5. Contact Us',
                    content: 'If you have questions or comments about this Privacy Policy, please contact us at:'
                }
            ]
        },
        terms: {
            title: 'Terms of Service',
            updated: 'Last updated: January 21, 2026',
            intro: 'These Terms of Service ("Terms") govern your access and use of the SmarterBOT website and services. By accessing or using our services, you agree to be bound by these Terms and our Privacy Policy.',
            sections: [
                {
                    title: '1. Use of Services',
                    content: 'You may use our services only for lawful purposes. You agree not to use our services in any way that violates any applicable local, national, or international law or regulation.'
                },
                {
                    title: '2. Accounts',
                    content: 'When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.',
                    extra: 'You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.'
                },
                {
                    title: '3. Intellectual Property',
                    content: 'The Service and its original content, features, and functionality are and will remain the exclusive property of SmarterBOT and its licensors. The Service is protected by copyright, trademark, and other laws of both Chile and foreign countries.'
                },
                {
                    title: '4. Links to Other Web Sites',
                    content: 'Our Service may contain links to third-party web sites or services that are not owned or controlled by SmarterBOT. SmarterBOT has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services.'
                },
                {
                    title: '5. Termination',
                    content: 'We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.'
                },
                {
                    title: '6. Limitation of Liability',
                    content: 'In no event shall SmarterBOT, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.'
                },
                {
                    title: '7. Changes',
                    content: 'We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days\' notice prior to any new terms taking effect.'
                },
                {
                    title: '8. Contact Us',
                    content: 'If you have any questions about these Terms, please contact us at:'
                }
            ]
        },
        status: {
            title: 'System Status',
            allOperational: 'All systems operational',
            pastIncidents: 'Past Incidents',
            noIncidents: 'No incidents reported in the last 90 days.',
            services: {
                web: 'Website and API',
                engine: 'Flow Engine',
                db: 'Database Clusters',
                storage: 'Storage Service',
                email: 'Email Delivery',
                integrations: 'Third-party Integrations'
            },
            operational: 'operational'
        }
    }
};
