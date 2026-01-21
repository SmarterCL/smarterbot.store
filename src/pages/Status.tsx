import { CheckCircle, AlertCircle, Activity } from 'lucide-react';

const Status = () => {
    const services = [
        { name: 'Website & API', status: 'operational' },
        { name: 'Workflow Engine', status: 'operational' },
        { name: 'Database Clusters', status: 'operational' },
        { name: 'Storage Service', status: 'operational' },
        { name: 'Email Delivery', status: 'operational' },
        { name: 'Third-party Integrations', status: 'operational' },
    ];

    const incidents = [
        // { date: 'Jan 15, 2026', title: 'Scheduled Maintenance', status: 'completed', description: 'Database upgrade completed successfully.' }
    ];

    return (
        <div className="pt-24 pb-16 min-h-screen">
            <div className="container">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center justify-between mb-8">
                        <h1 className="text-4xl font-bold">System Status</h1>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
                            <Activity className="w-5 h-5 text-green-500 animate-pulse" />
                            <span className="text-green-500 font-medium">All systems operational</span>
                        </div>
                    </div>

                    <div className="card glass divide-y divide-border mb-12">
                        {services.map((service, index) => (
                            <div key={index} className="flex items-center justify-between p-6">
                                <span className="font-medium text-lg">{service.name}</span>
                                <div className="flex items-center gap-2 text-green-500">
                                    <CheckCircle className="w-5 h-5" />
                                    <span className="capitalize">{service.status}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <h2 className="text-2xl font-bold mb-6">Past Incidents</h2>
                    {incidents.length > 0 ? (
                        <div className="space-y-4">
                            {incidents.map((incident, index) => (
                                <div key={index} className="card bg-bg-secondary/30 p-6">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-bold">{incident.title}</h3>
                                        <span className="text-sm text-text-tertiary">{incident.date}</span>
                                    </div>
                                    <p className="text-text-secondary">{incident.description}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="card glass p-8 text-center text-text-secondary">
                            <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                            <p>No incidents reported in the last 90 days.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Status;
