'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
    Zap, ShoppingCart, TrendingUp, Server, Code, Globe, 
    MessageSquare, Database, Cloud, Shield, Layers, 
    BarChart3, Mail, Calendar, FileText, Users,
    ArrowRight, ExternalLink, Star, Search, Filter
} from 'lucide-react';
import FacebookLoginButton from '@/components/FacebookLoginButton';

interface Integration {
    id: string;
    name: string;
    description: string;
    category: string;
    icon: any;
    image: string;
    rating: number;
    workflows: string;
    popular?: boolean;
}

export default function Integrations() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const integrations: Integration[] = [
        {
            id: '1',
            name: 'Odoo v19.2',
            description: 'Integración completa ERP para automatización de inventario, ventas y contabilidad en tiempo real.',
            category: 'erp',
            icon: Layers,
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
            rating: 4.9,
            workflows: '245+',
            popular: true,
        },
        {
            id: '2',
            name: 'Chatwoot',
            description: 'Plataforma de atención al cliente con chat en vivo y soporte omnicanal.',
            category: 'support',
            icon: MessageSquare,
            image: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?w=800&q=80',
            rating: 4.8,
            workflows: '180+',
            popular: true,
        },
        {
            id: '3',
            name: 'Meta Business',
            description: 'Automatiza campañas de Facebook e Instagram Ads con optimización mediante IA.',
            category: 'marketing',
            icon: TrendingUp,
            image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
            rating: 4.9,
            workflows: '320+',
            popular: true,
        },
        {
            id: '4',
            name: 'VPS SmarterOS',
            description: 'Despliegue y gestión de servidores privados virtuales con aprovisionamiento automático.',
            category: 'infrastructure',
            icon: Server,
            image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
            rating: 4.7,
            workflows: '156+',
        },
        {
            id: '5',
            name: 'E-commerce Pro',
            description: 'Conecta tu tienda online con procesamiento automático de pedidos e inventario sincronizado.',
            category: 'ecommerce',
            icon: ShoppingCart,
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
            rating: 4.8,
            workflows: '289+',
            popular: true,
        },
        {
            id: '6',
            name: 'Gestión de Dominios',
            description: 'Automatiza registro de dominios, configuración DNS y certificados SSL.',
            category: 'domains',
            icon: Globe,
            image: 'https://images.unsplash.com/photo-1558494949-ef526b0042a0?w=800&q=80',
            rating: 4.6,
            workflows: '98+',
        },
        {
            id: '7',
            name: 'API Custom',
            description: 'Construye integraciones a medida con cualquier API REST o GraphQL.',
            category: 'development',
            icon: Code,
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80',
            rating: 4.7,
            workflows: '412+',
        },
        {
            id: '8',
            name: 'Sincro Base de Datos',
            description: 'Sincroniza datos entre múltiples bases de datos en tiempo real.',
            category: 'database',
            icon: Database,
            image: 'https://images.unsplash.com/photo-1544383835-b513e6c987c1?w=800&q=80',
            rating: 4.5,
            workflows: '134+',
        },
    ];

    const categories = [
        { id: 'all', name: 'Todas', icon: Layers },
        { id: 'erp', name: 'ERP', icon: Database },
        { id: 'marketing', name: 'Marketing', icon: TrendingUp },
        { id: 'infrastructure', name: 'Infraestructura', icon: Server },
        { id: 'ecommerce', name: 'E-commerce', icon: ShoppingCart },
        { id: 'productivity', name: 'Productividad', icon: FileText },
    ];

    const filteredIntegrations = integrations.filter(i => {
        const matchesCategory = selectedCategory === 'all' || i.category === selectedCategory;
        const matchesSearch = i.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                             i.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="pt-32 pb-24 min-h-screen bg-soft">
            <div className="container">
                {/* Hero */}
                <div className="text-center mb-16 animate-in fade-in slide-in-from-top-4">
                    <div className="badge-premium mb-4">
                        <Zap size={14} className="me-2" />
                        Ecosistema Smarter
                    </div>
                    <h1 className="text-6xl font-black tracking-tighter text-black mb-4">
                        Integraciones <span className="text-success">Ilimitadas</span>
                    </h1>
                    <p className="text-secondary small fw-bold max-w-2xl mx-auto leading-relaxed">
                        Conecta Smarter con más de 365 herramientas y servicios para automatizar todo el flujo de trabajo de tu negocio.
                    </p>
                </div>

                {/* Filters & Search */}
                <div className="bg-white rounded-4xl p-4 shadow-xl border border-light mb-12 flex flex-col md:flex-row gap-4 items-center animate-in fade-in slide-in-from-bottom-4">
                    <div className="relative flex-1 w-full">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary" size={20} />
                        <input 
                            type="text" 
                            placeholder="Buscar integraciones..." 
                            className="w-full bg-soft border-none rounded-2xl py-3 pl-12 pr-4 font-bold text-sm focus:ring-2 focus:ring-success/20"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setSelectedCategory(cat.id)}
                                className={`px-4 py-3 rounded-2xl text-xs font-black uppercase tracking-widest whitespace-nowrap transition-all flex items-center gap-2 ${
                                    selectedCategory === cat.id 
                                    ? 'bg-black text-white shadow-lg' 
                                    : 'bg-soft text-secondary hover:bg-subtle'
                                }`}
                            >
                                <cat.icon size={14} className={selectedCategory === cat.id ? 'text-success' : ''} />
                                {cat.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <div className="row g-4">
                    {filteredIntegrations.map((integration, i) => (
                        <div key={integration.id} className="col-md-6 col-lg-4 animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: `${i * 50}ms` }}>
                            <div className="bg-white rounded-4xl overflow-hidden shadow-lg border border-light h-100 flex flex-col group hover-lift">
                                <div className="relative h-48 overflow-hidden">
                                    <Image
                                        src={integration.image}
                                        alt={integration.name}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-2 py-1 rounded-xl flex items-center gap-1 shadow-sm">
                                        <Star size={12} className="text-warning" fill="currentColor" />
                                        <span className="text-[10px] font-black">{integration.rating}</span>
                                    </div>
                                    <div className="absolute bottom-4 left-4">
                                        <div className="bg-black text-white p-2 rounded-xl shadow-xl">
                                            <integration.icon size={20} className="text-success" />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 flex-1 flex flex-col">
                                    <h3 className="text-xl font-black tracking-tight mb-2">{integration.name}</h3>
                                    <p className="text-secondary small fw-bold mb-6 flex-1 line-clamp-2">
                                        {integration.description}
                                    </p>
                                    
                                    <div className="pt-6 border-t border-light flex items-center justify-between mt-auto">
                                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-secondary">
                                            <Zap size={14} className="text-success" />
                                            {integration.workflows} flujos
                                        </div>
                                        
                                        {integration.id === '3' ? (
                                            <div className="scale-90 origin-right">
                                                <FacebookLoginButton />
                                            </div>
                                        ) : (
                                            <Link href="/bot" className="btn btn-black btn-sm rounded-xl px-4 py-2 text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover-scale">
                                                Conectar
                                                <ArrowRight size={12} />
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* No results */}
                {filteredIntegrations.length === 0 && (
                    <div className="text-center py-24">
                        <div className="bg-subtle w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Search size={32} className="text-secondary opacity-20" />
                        </div>
                        <h3 className="text-2xl font-black tracking-tight mb-2">No encontramos resultados</h3>
                        <p className="text-secondary small fw-bold">Intenta con otra categoría o término de búsqueda.</p>
                    </div>
                )}

                {/* Footer CTA */}
                <div className="mt-24 text-center">
                    <div className="bg-black rounded-4xl p-12 text-white shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-success/10 blur-3xl rounded-full -mr-32 -mt-32"></div>
                        <h2 className="text-4xl font-black tracking-tighter mb-4 relative">¿Necesitas una integración personalizada?</h2>
                        <p className="text-secondary small fw-bold max-w-2xl mx-auto mb-8 relative">
                            Nuestro equipo puede construir conectores a medida para cualquier sistema legacy o API específica que tu negocio requiera.
                        </p>
                        <div className="flex gap-4 justify-center flex-wrap relative">
                            <Link href="/contact" className="btn btn-success-premium">
                                Solicitar Integración
                            </Link>
                            <Link href="/docs" className="btn btn-outline-light rounded-pill px-5 py-3 fw-bold border-2">
                                Documentación API
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
