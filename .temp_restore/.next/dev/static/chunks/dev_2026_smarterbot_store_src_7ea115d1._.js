(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/dev/2026/smarterbot.store/src/contexts/LanguageContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/2026/smarterbot.store/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_sass@1.99.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/2026/smarterbot.store/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_sass@1.99.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const LanguageProvider = ({ children })=>{
    _s();
    // Default to Spanish as requested
    const [language, setLanguageState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('es');
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageProvider.useEffect": ()=>{
            const saved = localStorage.getItem('language');
            if (saved === 'es' || saved === 'en') {
                setLanguageState(saved);
            }
            setIsMounted(true);
        }
    }["LanguageProvider.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageProvider.useEffect": ()=>{
            if (isMounted) {
                localStorage.setItem('language', language);
                document.documentElement.lang = language;
            }
        }
    }["LanguageProvider.useEffect"], [
        language,
        isMounted
    ]);
    const setLanguage = (lang)=>{
        setLanguageState(lang);
    };
    // Simple translation function that nested keys like 'home.hero.title'
    const t = (path)=>{
        const keys = path.split('.');
        let current = translations[language];
        for (const key of keys){
            if (current?.[key] !== undefined) {
                current = current[key];
            } else {
                return path; // Fallback to key name
            }
        }
        return current;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            language,
            setLanguage,
            t
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/dev/2026/smarterbot.store/src/contexts/LanguageContext.tsx",
        lineNumber: 55,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LanguageProvider, "F0kUowMNsqTLlW72BqySiVEetEQ=");
_c = LanguageProvider;
const useLanguage = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
_s1(useLanguage, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
// We'll move this to a separate file later if it gets too big
const translations = {
    es: {
        nav: {
            home: 'Inicio',
            clawOs: 'Claw OS',
            workflows: 'Flujos',
            services: 'Servicios',
            integrations: 'Integraciones',
            pricing: 'Precios',
            contact: 'Contacto',
            getStarted: 'Empezar'
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
            cookies: 'Política de Cookies'
        },
        home: {
            hero: {
                badge: 'IA soberana lista para usar en un clic',
                title: 'Automatiza tu Negocio con',
                description: 'La infraestructura de IA privada que evoluciona contigo. De Startup a Gran Empresa, escala tu propio stack de agentes sin configuraciones complejas.',
                ctaWorkflows: 'Claw OS Store',
                ctaDemo: 'Carga tu VPS'
            },
            stats: {
                workflows: 'Agentes Activos',
                integrations: 'Módulos OS',
                users: 'Nodos Privados',
                uptime: 'Disponibilidad'
            },
            features: {
                title: 'Todo lo que necesitas para',
                titleAccent: 'Escalar',
                description: 'Desde agentes de IA hasta hosting soberano, te cubrimos con soluciones de nivel empresarial.',
                n8n: {
                    title: 'Claw OS App Grid',
                    description: 'Accede a Odoo, Chatwoot, y FastAPI pre-configurados en tu propia infraestructura.'
                },
                ecommerce: {
                    title: 'Listo para Odoo',
                    description: 'Integraciones fluidas con el ERP líder para tu negocio en tiempo real.'
                },
                meta: {
                    title: 'Marketing Intelligence',
                    description: 'Automatiza tus campañas de Meta Ads con agentes de IA especializados.'
                },
                vps: {
                    title: 'Hosting Soberano',
                    description: 'VPS optimizados para IA con despliegue instantáneo.'
                },
                custom: {
                    title: 'Modelos a Medida',
                    description: 'Ajuste fino de LLMs y flujos personalizados para tu vertical.'
                },
                domains: {
                    title: 'Dominios IA',
                    description: 'Gestión de dominios premium para tus agentes de IA.'
                },
                learnMore: 'Saber más'
            },
            integrations: {
                title: 'Potentes',
                titleAccent: 'Integraciones',
                description: 'Conectamos tu Claw OS con las herramientas que ya dominas.',
                viewAll: 'Ver Todo el Ecosistema'
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
                    'Smarter App Store'
                ],
                cta: 'Ver Precios',
                rating: 'Calificación',
                responseTime: 'Soporte Directo',
                uptime: 'SLA Privado'
            },
            cta: {
                title: '¿Listo para tu',
                titleAccent: 'Claw OS',
                description: 'Empieza con tu propio nodo de IA privada hoy mismo. Garantía de reembolso de 30 días.',
                button: 'Crear mi Nodo',
                sales: 'Hablar con Ventas'
            }
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
            communityButton: 'Visitar GitHub Issues'
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
            getStarted: 'Get Started'
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
            cookies: 'Cookie Policy'
        },
        home: {
            hero: {
                badge: 'Sovereign AI ready in one click',
                title: 'Automate Your Business with',
                description: 'The private AI infrastructure that grows with you. From Startup to Enterprise, scale your own agent stack without complex setups.',
                ctaWorkflows: 'Claw OS Store',
                ctaDemo: 'Deploy VPS'
            },
            stats: {
                workflows: 'Active Agents',
                integrations: 'OS Modules',
                users: 'Private Nodes',
                uptime: 'Availability'
            },
            features: {
                title: 'Everything You Need to',
                titleAccent: 'Scale',
                description: 'From AI agents to sovereign hosting, we cover you with enterprise-grade solutions.',
                n8n: {
                    title: 'Claw OS App Grid',
                    description: 'Access Odoo, Chatwoot, and FastAPI pre-configured in your own infrastructure.'
                },
                ecommerce: {
                    title: 'Odoo Ready',
                    description: 'Seamless integrations with the leading ERP for your business in real-time.'
                },
                meta: {
                    title: 'Marketing Intelligence',
                    description: 'Automate your Meta Ads campaigns with specialized AI agents.'
                },
                vps: {
                    title: 'Sovereign Hosting',
                    description: 'IA-optimized VPS with instant deployment.'
                },
                custom: {
                    title: 'Custom Models',
                    description: 'LLM fine-tuning and custom flows for your specific vertical.'
                },
                domains: {
                    title: 'AI Domains',
                    description: 'Premium domain management for your AI agents.'
                },
                learnMore: 'Learn more'
            },
            integrations: {
                title: 'Powerful',
                titleAccent: 'Integrations',
                description: 'We connect your Claw OS with the tools you already master.',
                viewAll: 'View All Ecosystem'
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
                    'Smarter App Store'
                ],
                cta: 'View Pricing',
                rating: 'Rating',
                responseTime: 'Direct Support',
                uptime: 'Private SLA'
            },
            cta: {
                title: 'Ready for your',
                titleAccent: 'Claw OS',
                description: 'Start with your own private AI node today. 30-day money-back guarantee.',
                button: 'Create My Node',
                sales: 'Talk to Sales'
            }
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
            communityButton: 'Visit GitHub Issues'
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
var _c;
__turbopack_context__.k.register(_c, "LanguageProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dev/2026/smarterbot.store/src/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/2026/smarterbot.store/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_sass@1.99.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/2026/smarterbot.store/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_sass@1.99.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/2026/smarterbot.store/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_sass@1.99.0/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/dev/2026/smarterbot.store/node_modules/.pnpm/lucide-react@0.468.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/dev/2026/smarterbot.store/node_modules/.pnpm/lucide-react@0.468.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/dev/2026/smarterbot.store/node_modules/.pnpm/lucide-react@0.468.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const Navbar = ()=>{
    _s();
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const handleScroll = {
                "Navbar.useEffect.handleScroll": ()=>{
                    setIsScrolled(window.scrollY > 10);
                }
            }["Navbar.useEffect.handleScroll"];
            window.addEventListener('scroll', handleScroll);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener('scroll', handleScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    const navLinks = [
        {
            name: 'Producto',
            path: '#producto'
        },
        {
            name: 'Cómo funciona',
            path: '#como-funciona'
        },
        {
            name: 'Precios',
            path: '#precios'
        },
        {
            name: 'Contacto',
            path: '/contact'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: `navbar navbar-expand-lg fixed-top transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm py-2' : 'bg-transparent py-4'}`,
        style: {
            borderBottom: isScrolled ? '1px solid rgba(0, 0, 0, 0.1)' : '1px solid transparent'
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "navbar-brand d-flex align-items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-lg bg-black p-1 d-flex align-items-center justify-content-center",
                            style: {
                                width: '32px',
                                height: '32px'
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                size: 20,
                                className: "text-white",
                                fill: "currentColor"
                            }, void 0, false, {
                                fileName: "[project]/dev/2026/smarterbot.store/src/components/Navbar.tsx",
                                lineNumber: 39,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/dev/2026/smarterbot.store/src/components/Navbar.tsx",
                            lineNumber: 38,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "fw-black tracking-tighter text-black fs-4",
                            children: "SMARTER"
                        }, void 0, false, {
                            fileName: "[project]/dev/2026/smarterbot.store/src/components/Navbar.tsx",
                            lineNumber: 41,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/dev/2026/smarterbot.store/src/components/Navbar.tsx",
                    lineNumber: 37,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "navbar-toggler border-0 shadow-none text-black",
                    type: "button",
                    onClick: ()=>setIsMobileMenuOpen(!isMobileMenuOpen),
                    children: isMobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        size: 24
                    }, void 0, false, {
                        fileName: "[project]/dev/2026/smarterbot.store/src/components/Navbar.tsx",
                        lineNumber: 51,
                        columnNumber: 41
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                        size: 24
                    }, void 0, false, {
                        fileName: "[project]/dev/2026/smarterbot.store/src/components/Navbar.tsx",
                        lineNumber: 51,
                        columnNumber: 59
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/dev/2026/smarterbot.store/src/components/Navbar.tsx",
                    lineNumber: 46,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `collapse navbar-collapse ${isMobileMenuOpen ? 'show bg-white p-4 rounded-4 mt-3 border border-black border-opacity-10' : ''}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "navbar-nav mx-auto mb-2 mb-lg-0 gap-3",
                            children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: "nav-item",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: link.path,
                                        className: "nav-link px-3 py-2 text-black hover-text-gray-600 transition-all fw-bold small uppercase tracking-wider",
                                        children: link.name
                                    }, void 0, false, {
                                        fileName: "[project]/dev/2026/smarterbot.store/src/components/Navbar.tsx",
                                        lineNumber: 58,
                                        columnNumber: 33
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, link.name, false, {
                                    fileName: "[project]/dev/2026/smarterbot.store/src/components/Navbar.tsx",
                                    lineNumber: 57,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/dev/2026/smarterbot.store/src/components/Navbar.tsx",
                            lineNumber: 55,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "d-flex align-items-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/register",
                                className: "btn btn-primary px-4 py-2 rounded-pill fw-bold shadow-primary transition-transform hover-scale d-flex align-items-center gap-2",
                                children: "Crear cuenta"
                            }, void 0, false, {
                                fileName: "[project]/dev/2026/smarterbot.store/src/components/Navbar.tsx",
                                lineNumber: 69,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/dev/2026/smarterbot.store/src/components/Navbar.tsx",
                            lineNumber: 68,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/dev/2026/smarterbot.store/src/components/Navbar.tsx",
                    lineNumber: 54,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/dev/2026/smarterbot.store/src/components/Navbar.tsx",
            lineNumber: 36,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/dev/2026/smarterbot.store/src/components/Navbar.tsx",
        lineNumber: 28,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Navbar, "0+zEKVBL95ILuBb5rHE6ViYOHu8=");
_c = Navbar;
const __TURBOPACK__default__export__ = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dev/2026/smarterbot.store/src/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/2026/smarterbot.store/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_sass@1.99.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/2026/smarterbot.store/node_modules/.pnpm/styled-jsx@5.1.6_@babel+core@7.29.0_react@19.2.4/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/2026/smarterbot.store/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_sass@1.99.0/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/dev/2026/smarterbot.store/node_modules/.pnpm/lucide-react@0.468.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/dev/2026/smarterbot.store/node_modules/.pnpm/lucide-react@0.468.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/zap.js [app-client] (ecmascript) <export default as Zap>");
'use client';
;
;
;
;
const Footer = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "jsx-afd63944960180d2" + " " + "bg-soft py-5 border-top border-light",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-afd63944960180d2" + " " + "container",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-afd63944960180d2" + " " + "row g-4 align-items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-afd63944960180d2" + " " + "col-md-4 text-center text-md-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "d-flex align-items-center gap-2 justify-content-center justify-content-md-start",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: '28px',
                                                height: '28px'
                                            },
                                            className: "jsx-afd63944960180d2" + " " + "rounded-lg bg-black p-1 d-flex align-items-center justify-content-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"], {
                                                size: 16,
                                                className: "text-white",
                                                fill: "currentColor"
                                            }, void 0, false, {
                                                fileName: "[project]/dev/2026/smarterbot.store/src/components/Footer.tsx",
                                                lineNumber: 14,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/dev/2026/smarterbot.store/src/components/Footer.tsx",
                                            lineNumber: 13,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "jsx-afd63944960180d2" + " " + "fw-black tracking-tighter text-black fs-5",
                                            children: "SMARTER"
                                        }, void 0, false, {
                                            fileName: "[project]/dev/2026/smarterbot.store/src/components/Footer.tsx",
                                            lineNumber: 16,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dev/2026/smarterbot.store/src/components/Footer.tsx",
                                    lineNumber: 12,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-afd63944960180d2" + " " + "text-secondary mt-2 mb-0 small fw-bold",
                                    children: "Potenciando el e-commerce del futuro."
                                }, void 0, false, {
                                    fileName: "[project]/dev/2026/smarterbot.store/src/components/Footer.tsx",
                                    lineNumber: 20,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dev/2026/smarterbot.store/src/components/Footer.tsx",
                            lineNumber: 11,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-afd63944960180d2" + " " + "col-md-4 text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "jsx-afd63944960180d2" + " " + "list-inline mb-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "jsx-afd63944960180d2" + " " + "list-inline-item mx-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "#funcionalidades",
                                            className: "text-secondary text-decoration-none hover-text-black transition-all fw-bold small uppercase tracking-wider",
                                            children: "Funciones"
                                        }, void 0, false, {
                                            fileName: "[project]/dev/2026/smarterbot.store/src/components/Footer.tsx",
                                            lineNumber: 28,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/dev/2026/smarterbot.store/src/components/Footer.tsx",
                                        lineNumber: 27,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "jsx-afd63944960180d2" + " " + "list-inline-item mx-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/pricing",
                                            className: "text-secondary text-decoration-none hover-text-black transition-all fw-bold small uppercase tracking-wider",
                                            children: "Precios"
                                        }, void 0, false, {
                                            fileName: "[project]/dev/2026/smarterbot.store/src/components/Footer.tsx",
                                            lineNumber: 31,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/dev/2026/smarterbot.store/src/components/Footer.tsx",
                                        lineNumber: 30,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "jsx-afd63944960180d2" + " " + "list-inline-item mx-3",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/docs",
                                            className: "text-secondary text-decoration-none hover-text-black transition-all fw-bold small uppercase tracking-wider",
                                            children: "Docs"
                                        }, void 0, false, {
                                            fileName: "[project]/dev/2026/smarterbot.store/src/components/Footer.tsx",
                                            lineNumber: 34,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/dev/2026/smarterbot.store/src/components/Footer.tsx",
                                        lineNumber: 33,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/dev/2026/smarterbot.store/src/components/Footer.tsx",
                                lineNumber: 26,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/dev/2026/smarterbot.store/src/components/Footer.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-afd63944960180d2" + " " + "col-md-4 text-center text-md-end",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "mailto:hola@smarter.store",
                                    className: "jsx-afd63944960180d2" + " " + "text-secondary text-decoration-none hover-text-black transition-all d-inline-flex align-items-center gap-2 fw-bold small",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/dev/2026/smarterbot.store/src/components/Footer.tsx",
                                            lineNumber: 41,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " hola@smarter.store"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dev/2026/smarterbot.store/src/components/Footer.tsx",
                                    lineNumber: 40,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "jsx-afd63944960180d2" + " " + "text-secondary opacity-50 mt-2 mb-0 x-small fw-bold",
                                    children: [
                                        "© ",
                                        new Date().getFullYear(),
                                        " Smarter. Todos los derechos reservados."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dev/2026/smarterbot.store/src/components/Footer.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dev/2026/smarterbot.store/src/components/Footer.tsx",
                            lineNumber: 39,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/dev/2026/smarterbot.store/src/components/Footer.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/dev/2026/smarterbot.store/src/components/Footer.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$styled$2d$jsx$40$5$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "afd63944960180d2",
                children: ".x-small.jsx-afd63944960180d2{font-size:.7rem}.hover-text-black.jsx-afd63944960180d2:hover{color:#000!important}"
            }, void 0, false, void 0, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/dev/2026/smarterbot.store/src/components/Footer.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Footer;
const __TURBOPACK__default__export__ = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dev/2026/smarterbot.store/src/components/FacebookSDK.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FacebookSDK,
    "facebookLogin",
    ()=>facebookLogin
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/dev/2026/smarterbot.store/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_sass@1.99.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/2026/smarterbot.store/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_sass@1.99.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/2026/smarterbot.store/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_sass@1.99.0/node_modules/next/script.js [app-client] (ecmascript)");
'use client';
;
;
function FacebookSDK() {
    const appId = ("TURBOPACK compile-time value", "736630128017532") || '736630128017532';
    const apiVersion = ("TURBOPACK compile-time value", "v21.0") || 'v21.0';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            id: "facebook-jssdk-init",
            strategy: "afterInteractive",
            dangerouslySetInnerHTML: {
                __html: `
            window.fbAsyncInit = function() {
              FB.init({
                appId      : '${appId}',
                cookie     : true,
                xfbml      : true,
                version    : '${apiVersion}'
              });
                
              FB.AppEvents.logPageView();   
            };

            (function(d, s, id){
               var js, fjs = d.getElementsByTagName(s)[0];
               if (d.getElementById(id)) {return;}
               js = d.createElement(s); js.id = id;
               js.src = "https://connect.facebook.net/en_US/sdk.js";
               fjs.parentNode.insertBefore(js, fjs);
             }(document, 'script', 'facebook-jssdk'));
          `
            }
        }, void 0, false, {
            fileName: "[project]/dev/2026/smarterbot.store/src/components/FacebookSDK.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_c = FacebookSDK;
const facebookLogin = (configId)=>{
    return new Promise((resolve, reject)=>{
        if (("TURBOPACK compile-time value", "object") === 'undefined' || !window.FB) {
            reject(new Error('Facebook SDK not loaded'));
            return;
        }
        window.FB.login((response)=>{
            if (response.authResponse) {
                resolve(response.authResponse);
            } else {
                reject(new Error('User cancelled login or did not fully authorize.'));
            }
        }, {
            config_id: configId,
            response_type: 'code',
            override_default_response_type: true
        });
    });
};
var _c;
__turbopack_context__.k.register(_c, "FacebookSDK");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/dev/2026/smarterbot.store/src/components/ChatWidget.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ChatWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/dev/2026/smarterbot.store/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_sass@1.99.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/2026/smarterbot.store/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_sass@1.99.0/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/2026/smarterbot.store/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_sass@1.99.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/dev/2026/smarterbot.store/node_modules/.pnpm/lucide-react@0.468.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/dev/2026/smarterbot.store/node_modules/.pnpm/lucide-react@0.468.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/dev/2026/smarterbot.store/node_modules/.pnpm/lucide-react@0.468.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__ = __turbopack_context__.i("[project]/dev/2026/smarterbot.store/node_modules/.pnpm/lucide-react@0.468.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/bot.js [app-client] (ecmascript) <export default as Bot>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/dev/2026/smarterbot.store/node_modules/.pnpm/lucide-react@0.468.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__ = __turbopack_context__.i("[project]/dev/2026/smarterbot.store/node_modules/.pnpm/lucide-react@0.468.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/paperclip.js [app-client] (ecmascript) <export default as Paperclip>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__ = __turbopack_context__.i("[project]/dev/2026/smarterbot.store/node_modules/.pnpm/lucide-react@0.468.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/maximize-2.js [app-client] (ecmascript) <export default as Maximize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__ = __turbopack_context__.i("[project]/dev/2026/smarterbot.store/node_modules/.pnpm/lucide-react@0.468.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/minimize-2.js [app-client] (ecmascript) <export default as Minimize2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$34$2e$3_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/2026/smarterbot.store/node_modules/.pnpm/framer-motion@12.34.3_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$34$2e$3_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/2026/smarterbot.store/node_modules/.pnpm/framer-motion@12.34.3_react-dom@19.2.4_react@19.2.4__react@19.2.4/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/dev/2026/smarterbot.store/node_modules/.pnpm/next@16.1.6_@babel+core@7.29.0_react-dom@19.2.4_react@19.2.4__react@19.2.4_sass@1.99.0/node_modules/next/script.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function ChatWidget() {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMinimized, setIsMinimized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [messages, setMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            id: '1',
            text: '¡Hola! Soy tu asistente de Smarter. ¿En qué puedo ayudarte hoy?',
            sender: 'bot',
            timestamp: new Date()
        }
    ]);
    const [inputValue, setInputValue] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isLoggedIn, setIsLoggedIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const messagesEndRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const CLAW_API_URL = ("TURBOPACK compile-time value", "https://n8n.smarterbot.store") || 'https://n8n.smarterbot.store';
    const BOT_USERNAME = ("TURBOPACK compile-time value", "SmarterChat_bot") || 'SmarterChat_bot';
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ChatWidget.useEffect": ()=>{
            scrollToBottom();
            const session = localStorage.getItem('smarterbot_session');
            if (session) setIsLoggedIn(true);
            window.onTelegramAuth = ({
                "ChatWidget.useEffect": (user)=>{
                    localStorage.setItem('smarterbot_session', JSON.stringify(user));
                    setIsLoggedIn(true);
                    setMessages({
                        "ChatWidget.useEffect": (prev)=>[
                                ...prev,
                                {
                                    id: Date.now().toString(),
                                    text: `¡Bienvenido ${user.first_name}! Ya puedes chatear conmigo.`,
                                    sender: 'bot',
                                    timestamp: new Date()
                                }
                            ]
                    }["ChatWidget.useEffect"]);
                }
            })["ChatWidget.useEffect"];
        }
    }["ChatWidget.useEffect"], [
        messages,
        isOpen
    ]);
    const scrollToBottom = ()=>{
        messagesEndRef.current?.scrollIntoView({
            behavior: 'smooth'
        });
    };
    const handleSendMessage = async ()=>{
        if (!inputValue.trim()) return;
        const userMessage = {
            id: Date.now().toString(),
            text: inputValue,
            sender: 'user',
            timestamp: new Date()
        };
        setMessages((prev)=>[
                ...prev,
                userMessage
            ]);
        setInputValue('');
        setIsLoading(true);
        try {
            // API call to Claw/n8n
            const response = await fetch(`${CLAW_API_URL}/api/chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message: inputValue,
                    userId: localStorage.getItem('smarterbot_session') ? JSON.parse(localStorage.getItem('smarterbot_session')).id : 'guest'
                })
            });
            if (response.ok) {
                const data = await response.json();
                const botMessage = {
                    id: (Date.now() + 1).toString(),
                    text: data.response || 'He recibido tu mensaje. Estoy procesando la información.',
                    sender: 'bot',
                    timestamp: new Date()
                };
                setMessages((prev)=>[
                        ...prev,
                        botMessage
                    ]);
            } else {
                throw new Error('API Error');
            }
        } catch (error) {
            // Fallback response
            setTimeout(()=>{
                const botMessage = {
                    id: (Date.now() + 1).toString(),
                    text: 'Lo siento, estoy teniendo problemas para conectar con mi cerebro central. ¿Puedes intentar de nuevo?',
                    sender: 'bot',
                    timestamp: new Date()
                };
                setMessages((prev)=>[
                        ...prev,
                        botMessage
                    ]);
            }, 1000);
        } finally{
            setIsLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$34$2e$3_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                initial: {
                    scale: 0,
                    opacity: 0
                },
                animate: {
                    scale: 1,
                    opacity: 1
                },
                whileHover: {
                    scale: 1.1
                },
                whileTap: {
                    scale: 0.9
                },
                onClick: ()=>setIsOpen(!isOpen),
                className: "fixed bottom-6 right-6 z-50 w-16 h-16 bg-black text-white rounded-full shadow-2xl flex items-center justify-center border-2 border-emerald-500/20 group overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity"
                    }, void 0, false, {
                        fileName: "[project]/dev/2026/smarterbot.store/src/components/ChatWidget.tsx",
                        lineNumber: 121,
                        columnNumber: 9
                    }, this),
                    isOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        size: 28
                    }, void 0, false, {
                        fileName: "[project]/dev/2026/smarterbot.store/src/components/ChatWidget.tsx",
                        lineNumber: 122,
                        columnNumber: 19
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                        size: 28
                    }, void 0, false, {
                        fileName: "[project]/dev/2026/smarterbot.store/src/components/ChatWidget.tsx",
                        lineNumber: 122,
                        columnNumber: 37
                    }, this),
                    !isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white animate-pulse"
                    }, void 0, false, {
                        fileName: "[project]/dev/2026/smarterbot.store/src/components/ChatWidget.tsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/dev/2026/smarterbot.store/src/components/ChatWidget.tsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$34$2e$3_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$framer$2d$motion$40$12$2e$34$2e$3_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 100,
                        scale: 0.9,
                        transformOrigin: 'bottom right'
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        height: isMinimized ? '80px' : '600px'
                    },
                    exit: {
                        opacity: 0,
                        y: 100,
                        scale: 0.9
                    },
                    className: `fixed bottom-24 right-6 z-50 w-full max-w-[400px] bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden flex flex-col transition-all duration-300 ${isMinimized ? 'h-20' : 'h-[600px]'}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-black p-4 flex items-center justify-between text-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-10 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-lg shadow-emerald-500/20",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bot$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bot$3e$__["Bot"], {
                                                size: 22,
                                                className: "text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/dev/2026/smarterbot.store/src/components/ChatWidget.tsx",
                                                lineNumber: 146,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/dev/2026/smarterbot.store/src/components/ChatWidget.tsx",
                                            lineNumber: 145,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-sm font-black tracking-tight leading-none mb-1",
                                                    children: "SMARTER ASSISTANT"
                                                }, void 0, false, {
                                                    fileName: "[project]/dev/2026/smarterbot.store/src/components/ChatWidget.tsx",
                                                    lineNumber: 149,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1.5 text-[10px] font-bold text-emerald-400 uppercase tracking-widest",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"
                                                        }, void 0, false, {
                                                            fileName: "[project]/dev/2026/smarterbot.store/src/components/ChatWidget.tsx",
                                                            lineNumber: 151,
                                                            columnNumber: 21
                                                        }, this),
                                                        "Online"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/dev/2026/smarterbot.store/src/components/ChatWidget.tsx",
                                                    lineNumber: 150,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/dev/2026/smarterbot.store/src/components/ChatWidget.tsx",
                                            lineNumber: 148,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dev/2026/smarterbot.store/src/components/ChatWidget.tsx",
                                    lineNumber: 144,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsMinimized(!isMinimized),
                                            className: "p-2 hover:bg-white/10 rounded-lg transition-colors",
                                            children: isMinimized ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$maximize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Maximize2$3e$__["Maximize2"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/dev/2026/smarterbot.store/src/components/ChatWidget.tsx",
                                                lineNumber: 161,
                                                columnNumber: 34
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$minimize$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Minimize2$3e$__["Minimize2"], {
                                                size: 16
                                            }, void 0, false, {
                                                fileName: "[project]/dev/2026/smarterbot.store/src/components/ChatWidget.tsx",
                                                lineNumber: 161,
                                                columnNumber: 60
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/dev/2026/smarterbot.store/src/components/ChatWidget.tsx",
                                            lineNumber: 157,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsOpen(false),
                                            className: "p-2 hover:bg-white/10 rounded-lg transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                size: 18
                                            }, void 0, false, {
                                                fileName: "[project]/dev/2026/smarterbot.store/src/components/ChatWidget.tsx",
                                                lineNumber: 167,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/dev/2026/smarterbot.store/src/components/ChatWidget.tsx",
                                            lineNumber: 163,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dev/2026/smarterbot.store/src/components/ChatWidget.tsx",
                                    lineNumber: 156,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/dev/2026/smarterbot.store/src/components/ChatWidget.tsx",
                            lineNumber: 143,
                            columnNumber: 13
                        }, this),
                        !isMinimized && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50",
                                    children: [
                                        messages.map((msg)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: `flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `max-w-[80%] p-3.5 rounded-2xl text-sm font-medium leading-relaxed shadow-sm ${msg.sender === 'user' ? 'bg-black text-white rounded-tr-none' : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none'}`,
                                                    children: msg.text
                                                }, void 0, false, {
                                                    fileName: "[project]/dev/2026/smarterbot.store/src/components/ChatWidget.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 23
                                                }, this)
                                            }, msg.id, false, {
                                                fileName: "[project]/dev/2026/smarterbot.store/src/components/ChatWidget.tsx",
                                                lineNumber: 177,
                                                columnNumber: 21
                                            }, this)),
                                        isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-start",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white p-3 rounded-2xl border border-slate-100 rounded-tl-none",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                                    size: 18,
                                                    className: "animate-spin text-emerald-500"
                                                }, void 0, false, {
                                                    fileName: "[project]/dev/2026/smarterbot.store/src/components/ChatWidget.tsx",
                                                    lineNumber: 193,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/dev/2026/smarterbot.store/src/components/ChatWidget.tsx",
                                                lineNumber: 192,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/dev/2026/smarterbot.store/src/components/ChatWidget.tsx",
                                            lineNumber: 191,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: messagesEndRef
                                        }, void 0, false, {
                                            fileName: "[project]/dev/2026/smarterbot.store/src/components/ChatWidget.tsx",
                                            lineNumber: 197,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dev/2026/smarterbot.store/src/components/ChatWidget.tsx",
                                    lineNumber: 175,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 bg-white border-t border-slate-100",
                                    children: [
                                        !isLoggedIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-4 p-3 bg-emerald-50 rounded-2xl border border-emerald-100 flex flex-col items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-[10px] font-black text-emerald-700 uppercase tracking-widest",
                                                    children: "Inicia sesión para funciones avanzadas"
                                                }, void 0, false, {
                                                    fileName: "[project]/dev/2026/smarterbot.store/src/components/ChatWidget.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    src: "https://telegram.org/js/telegram-widget.js?22",
                                                    strategy: "afterInteractive",
                                                    "data-telegram-login": BOT_USERNAME,
                                                    "data-size": "medium",
                                                    "data-radius": "8",
                                                    "data-onauth": "onTelegramAuth(user)",
                                                    "data-request-access": "write"
                                                }, void 0, false, {
                                                    fileName: "[project]/dev/2026/smarterbot.store/src/components/ChatWidget.tsx",
                                                    lineNumber: 205,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/dev/2026/smarterbot.store/src/components/ChatWidget.tsx",
                                            lineNumber: 203,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 p-1.5 bg-slate-100 rounded-2xl",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "p-2 text-slate-400 hover:text-slate-600",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$paperclip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Paperclip$3e$__["Paperclip"], {
                                                        size: 20
                                                    }, void 0, false, {
                                                        fileName: "[project]/dev/2026/smarterbot.store/src/components/ChatWidget.tsx",
                                                        lineNumber: 218,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/dev/2026/smarterbot.store/src/components/ChatWidget.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: inputValue,
                                                    onChange: (e)=>setInputValue(e.target.value),
                                                    onKeyPress: (e)=>e.key === 'Enter' && handleSendMessage(),
                                                    placeholder: "Escribe un mensaje...",
                                                    className: "flex-1 bg-transparent border-none focus:ring-0 text-sm font-medium text-slate-700 placeholder:text-slate-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/dev/2026/smarterbot.store/src/components/ChatWidget.tsx",
                                                    lineNumber: 220,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: handleSendMessage,
                                                    disabled: !inputValue.trim() || isLoading,
                                                    className: "w-10 h-10 bg-black text-white rounded-xl flex items-center justify-center shadow-lg disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95 transition-all",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$29$2e$0_react$2d$dom$40$19$2e$2$2e$4_react$40$19$2e$2$2e$4_$5f$react$40$19$2e$2$2e$4_sass$40$1$2e$99$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$dev$2f$2026$2f$smarterbot$2e$store$2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$468$2e$0_react$40$19$2e$2$2e$4$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                        size: 18
                                                    }, void 0, false, {
                                                        fileName: "[project]/dev/2026/smarterbot.store/src/components/ChatWidget.tsx",
                                                        lineNumber: 233,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/dev/2026/smarterbot.store/src/components/ChatWidget.tsx",
                                                    lineNumber: 228,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/dev/2026/smarterbot.store/src/components/ChatWidget.tsx",
                                            lineNumber: 216,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/dev/2026/smarterbot.store/src/components/ChatWidget.tsx",
                                    lineNumber: 201,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true)
                    ]
                }, void 0, true, {
                    fileName: "[project]/dev/2026/smarterbot.store/src/components/ChatWidget.tsx",
                    lineNumber: 131,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/dev/2026/smarterbot.store/src/components/ChatWidget.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(ChatWidget, "2Z5g4pdabL6lyUkd6mL1mRSRmoY=");
_c = ChatWidget;
var _c;
__turbopack_context__.k.register(_c, "ChatWidget");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=dev_2026_smarterbot_store_src_7ea115d1._.js.map