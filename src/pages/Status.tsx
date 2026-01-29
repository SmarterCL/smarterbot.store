import React from 'react';
import { CheckCircle, Activity } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Status = () => {
    const { t } = useLanguage();

    const services = [
        { name: t('status.services.web'), status: t('status.operational') },
        { name: t('status.services.engine'), status: t('status.operational') },
        { name: t('status.services.db'), status: t('status.operational') },
        { name: t('status.services.storage'), status: t('status.operational') },
        { name: t('status.services.email'), status: t('status.operational') },
        { name: t('status.services.integrations'), status: t('status.operational') },
    ];

    const incidents = [
        // { date: '15 de Ene, 2026', title: 'Mantenimiento Programado', status: 'completado', description: 'Actualización de base de datos completada exitosamente.' }
    ];

    return (
        <div className="pt-24 pb-16 min-h-screen">
            <div className="container">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center justify-between mb-8">
                        <h1 className="text-4xl font-bold">{t('status.title')}</h1>
                        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
                            <Activity className="w-5 h-5 text-green-500 animate-pulse" />
                            <span className="text-green-500 font-medium">{t('status.allOperational')}</span>
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

                    <h2 className="text-2xl font-bold mb-6">{t('status.pastIncidents')}</h2>
                    {incidents.length > 0 ? (
                        <div className="space-y-4">
                            {incidents.map((incident: any, index: number) => (
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
                            <p>{t('status.noIncidents')}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Status;
