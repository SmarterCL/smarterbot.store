import { useState } from 'react';
import { Search, Filter, Download, Star, GitBranch, Clock, ExternalLink } from 'lucide-react';

interface Workflow {
    id: string;
    name: string;
    description: string;
    category: string;
    nodes: number;
    downloads: string;
    rating: number;
    lastUpdated: string;
    tags: string[];
}

const Workflows = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    // Sample workflows data - In production, this would come from the GitHub API
    const workflows: Workflow[] = [
        {
            id: '1',
            name: 'Odoo Order Automation',
            description: 'Automatically process new orders, send confirmations, and update inventory in Odoo',
            category: 'E-commerce',
            nodes: 12,
            downloads: '2.5K',
            rating: 4.8,
            lastUpdated: '2 days ago',
            tags: ['Odoo', 'E-commerce', 'Automation'],
        },
        {
            id: '2',
            name: 'Meta Ads Campaign Manager',
            description: 'Automate ad creation, budget allocation, and performance tracking',
            category: 'Marketing',
            nodes: 18,
            downloads: '1.8K',
            rating: 4.9,
            lastUpdated: '1 week ago',
            tags: ['Meta Ads', 'Marketing', 'Analytics'],
        },
        {
            id: '3',
            name: 'Odoo CRM Sync',
            description: 'Sync customer data between multiple platforms and Odoo CRM',
            category: 'CRM',
            nodes: 15,
            downloads: '3.2K',
            rating: 4.7,
            lastUpdated: '3 days ago',
            tags: ['Odoo', 'CRM', 'Sync'],
        },
        {
            id: '4',
            name: 'Email Campaign Automation',
            description: 'Create, schedule, and track email campaigns with advanced segmentation',
            category: 'Marketing',
            nodes: 10,
            downloads: '4.1K',
            rating: 4.9,
            lastUpdated: '1 day ago',
            tags: ['Email', 'Marketing', 'Automation'],
        },
        {
            id: '5',
            name: 'Database Backup & Sync',
            description: 'Automated database backups with multi-cloud redundancy',
            category: 'DevOps',
            nodes: 8,
            downloads: '1.5K',
            rating: 4.6,
            lastUpdated: '5 days ago',
            tags: ['Database', 'Backup', 'DevOps'],
        },
        {
            id: '6',
            name: 'Social Media Scheduler',
            description: 'Schedule and publish content across all major social platforms',
            category: 'Marketing',
            nodes: 14,
            downloads: '5.3K',
            rating: 4.8,
            lastUpdated: '4 days ago',
            tags: ['Social Media', 'Content', 'Scheduling'],
        },
    ];

    const categories = [
        'all',
        'E-commerce',
        'Marketing',
        'CRM',
        'DevOps',
        'Analytics',
        'Integration',
    ];

    const filteredWorkflows = workflows.filter((workflow) => {
        const matchesSearch =
            workflow.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            workflow.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            workflow.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));

        const matchesCategory = selectedCategory === 'all' || workflow.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="container">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="mb-4">
                        n8n <span className="gradient-text">Workflow Collection</span>
                    </h1>
                    <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                        Browse our collection of 4,343+ production-ready workflows from the{' '}
                        <a
                            href="https://github.com/Zie619/n8n-workflows"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-light hover:underline inline-flex items-center gap-1"
                        >
                            n8n-workflows repository
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    </p>
                </div>

                {/* Search and Filters */}
                <div className="mb-8">
                    <div className="flex flex-col md:flex-row gap-4 mb-6">
                        {/* Search Bar */}
                        <div className="flex-1 relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-muted" />
                            <input
                                type="text"
                                placeholder="Search workflows..."
                                className="input pl-12"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        {/* Filter Button (Mobile) */}
                        <button className="btn btn-secondary md:hidden">
                            <Filter className="w-5 h-5" />
                            Filters
                        </button>
                    </div>

                    {/* Category Filters */}
                    <div className="flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`px-4 py-2 rounded-lg font-medium transition-all ${selectedCategory === category
                                    ? 'bg-primary text-white shadow-glow'
                                    : 'bg-bg-tertiary text-text-secondary hover:bg-bg-card-hover border border-border'
                                    }`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Results Count */}
                <div className="mb-6">
                    <p className="text-text-secondary">
                        Showing <span className="text-text-primary font-semibold">{filteredWorkflows.length}</span>{' '}
                        workflows
                    </p>
                </div>

                {/* Workflows Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredWorkflows.map((workflow) => (
                        <div key={workflow.id} className="card card-interactive card-glow group">
                            {/* Header */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="badge badge-primary">{workflow.category}</div>
                                <div className="flex items-center gap-1 text-yellow-500">
                                    <Star className="w-4 h-4 fill-current" />
                                    <span className="text-sm font-semibold">{workflow.rating}</span>
                                </div>
                            </div>

                            {/* Title & Description */}
                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary-light transition-colors">
                                {workflow.name}
                            </h3>
                            <p className="text-text-secondary mb-4 line-clamp-2">{workflow.description}</p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {workflow.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="text-xs px-2 py-1 rounded bg-bg-tertiary text-text-tertiary border border-border"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Stats */}
                            <div className="flex items-center justify-between text-sm text-text-tertiary mb-4">
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-1">
                                        <GitBranch className="w-4 h-4" />
                                        <span>{workflow.nodes} nodes</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Download className="w-4 h-4" />
                                        <span>{workflow.downloads}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    <span>{workflow.lastUpdated}</span>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex gap-2">
                                <button className="btn btn-primary flex-1">
                                    <Download className="w-4 h-4" />
                                    Download
                                </button>
                                <button className="btn-icon btn-secondary">
                                    <ExternalLink className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* GitHub CTA */}
                <div className="card glass-strong text-center py-12 px-8 mt-12">
                    <h3 className="text-2xl font-bold mb-4">Want More Workflows?</h3>
                    <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
                        Explore our complete collection of 4,343+ workflows on GitHub. Star the repo to stay updated!
                    </p>
                    <a
                        href="https://github.com/Zie619/n8n-workflows"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary inline-flex items-center gap-2"
                    >
                        <ExternalLink className="w-5 h-5" />
                        View on GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Workflows;
