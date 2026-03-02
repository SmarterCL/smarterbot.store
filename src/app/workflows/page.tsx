'use client';

import { useState } from 'react';
import { Search, Filter, Download, Star, GitBranch, ExternalLink, Zap, ShoppingCart, TrendingUp, Server, Code, Globe, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

interface Workflow {
    id: string;
    name: string;
    description: string;
    category: string;
    nodes: number;
    downloads: string;
    rating: number;
    icon: any;
}

export default function Workflows() {
    const { t } = useLanguage();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    const workflows: Workflow[] = [
        {
            id: '1',
            name: 'E-commerce Order Processing',
            description: 'Automatically process orders from your online store and sync with Odoo ERP',
            category: 'ecommerce',
            nodes: 12,
            downloads: '2.4k',
            rating: 4.9,
            icon: ShoppingCart,
        },
        {
            id: '2',
            name: 'Meta Ads Lead Capture',
            description: 'Capture leads from Meta Ads and automatically add to your CRM',
            category: 'marketing',
            nodes: 8,
            downloads: '1.8k',
            rating: 4.8,
            icon: TrendingUp,
        },
        {
            id: '3',
            name: 'Server Monitoring Alerts',
            description: 'Monitor server health and send alerts via multiple channels',
            category: 'infrastructure',
            nodes: 15,
            downloads: '1.2k',
            rating: 4.7,
            icon: Server,
        },
        {
            id: '4',
            name: 'Custom API Integration',
            description: 'Connect any API with your existing tools and automate data flow',
            category: 'development',
            nodes: 10,
            downloads: '950',
            rating: 4.6,
            icon: Code,
        },
        {
            id: '5',
            name: 'Domain Registration Automation',
            description: 'Automate domain registration and DNS configuration',
            category: 'domains',
            nodes: 7,
            downloads: '800',
            rating: 4.5,
            icon: Globe,
        },
        {
            id: '6',
            name: 'Customer Support Ticket Router',
            description: 'Automatically route support tickets to the right team',
            category: 'support',
            nodes: 9,
            downloads: '1.5k',
            rating: 4.8,
            icon: MessageSquare,
        },
    ];

    const categories = [
        { id: 'all', name: 'All', icon: Filter },
        { id: 'ecommerce', name: 'E-commerce', icon: ShoppingCart },
        { id: 'marketing', name: 'Marketing', icon: TrendingUp },
        { id: 'infrastructure', name: 'Infrastructure', icon: Server },
        { id: 'development', name: 'Development', icon: Code },
        { id: 'domains', name: 'Domains', icon: Globe },
        { id: 'support', name: 'Support', icon: MessageSquare },
    ];

    const filteredWorkflows = workflows.filter(workflow => {
        const matchesSearch = workflow.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            workflow.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || workflow.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="pt-24 pb-16 min-h-screen">
            <div className="container">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="badge bg-primary/20 text-primary border border-primary/30 mb-4">
                        <GitBranch size={14} className="me-1" />
                        {t('home.stats.workflows')}
                    </div>
                    <h1 className="display-4 fw-bold mb-4">
                        Browse {t('home.stats.workflows')}
                    </h1>
                    <p className="lead text-secondary mb-4 max-w-2xl mx-auto">
                        4,343+ production-ready automation workflows ready to deploy
                    </p>
                </div>

                {/* Search and Filter */}
                <div className="row g-4 mb-8">
                    <div className="col-md-6">
                        <div className="input-group">
                            <span className="input-group-text bg-bg-tertiary border-border">
                                <Search size={18} className="text-secondary" />
                            </span>
                            <input
                                type="text"
                                className="form-control bg-bg-tertiary border-border text-primary"
                                placeholder="Search workflows..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="d-flex gap-2 flex-wrap">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    className={`btn btn-sm ${selectedCategory === category.id ? 'btn-primary' : 'btn-outline-secondary'}`}
                                    onClick={() => setSelectedCategory(category.id)}
                                >
                                    <category.icon size={14} className="me-1" />
                                    {category.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Workflows Grid */}
                <div className="row g-4">
                    {filteredWorkflows.map((workflow) => (
                        <div key={workflow.id} className="col-md-6 col-lg-4">
                            <div className="card card-custom glass h-100 p-4">
                                <div className="d-flex align-items-start gap-3 mb-3">
                                    <div className="w-12 h-12 rounded-lg bg-bg-tertiary flex items-center justify-center">
                                        <workflow.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div className="flex-grow-1">
                                        <div className="d-flex justify-content-between align-items-start">
                                            <h3 className="h5 fw-bold mb-1">{workflow.name}</h3>
                                            <div className="d-flex align-items-center gap-1 text-warning">
                                                <Star size={14} fill="currentColor" />
                                                <span className="small">{workflow.rating}</span>
                                            </div>
                                        </div>
                                        <p className="text-secondary small mb-0">{workflow.description}</p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center pt-3 border-top border-border">
                                    <div className="d-flex gap-3 text-secondary small">
                                        <span className="d-flex align-items-center gap-1">
                                            <Zap size={14} />
                                            {workflow.nodes} nodes
                                        </span>
                                        <span className="d-flex align-items-center gap-1">
                                            <Download size={14} />
                                            {workflow.downloads}
                                        </span>
                                    </div>
                                    <button className="btn btn-sm btn-primary">
                                        <ExternalLink size={14} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-12">
                    <div className="card card-custom glass p-6 max-w-2xl mx-auto">
                        <h2 className="h3 fw-bold mb-3">Want More Workflows?</h2>
                        <p className="text-secondary mb-4">
                            Get access to all 4,343+ production-ready workflows with our premium plan
                        </p>
                        <div className="d-flex gap-3 justify-content-center">
                            <Link href="/pricing" className="btn btn-warning text-dark">
                                View Pricing
                            </Link>
                            <Link href="/contact" className="btn btn-outline-secondary">
                                Contact Sales
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
