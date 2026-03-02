'use client';

import { CheckCircle, Activity } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Status() {
    const { t } = useLanguage();

    const services = [
        { name: t('status.services.web'), status: t('status.operational') },
        { name: t('status.services.engine'), status: t('status.operational') },
        { name: t('status.services.db'), status: t('status.operational') },
        { name: t('status.services.storage'), status: t('status.operational') },
        { name: t('status.services.email'), status: t('status.operational') },
        { name: t('status.services.integrations'), status: t('status.operational') },
    ];

    return (
        <div className="pt-24 pb-16 min-h-screen">
            <div className="container">
                <div className="text-center mb-12">
                    <div className="badge bg-success/20 text-success border border-success/30 mb-4">
                        <Activity size={14} className="me-1" />
                        {t('status.title')}
                    </div>
                    <h1 className="display-4 fw-bold mb-4">{t('status.title')}</h1>
                    <p className="lead text-success mb-4">
                        <CheckCircle size={20} className="me-2" />
                        {t('status.allOperational')}
                    </p>
                </div>

                <div className="row g-4 mb-12">
                    {services.map((service, index) => (
                        <div key={index} className="col-md-6">
                            <div className="card card-custom glass p-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <span className="fw-semibold">{service.name}</span>
                                    <span className="badge bg-success/20 text-success border border-success/30">
                                        <CheckCircle size={14} className="me-1" />
                                        {service.status}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="card card-custom glass p-6">
                    <h2 className="h3 fw-bold mb-4">{t('status.pastIncidents')}</h2>
                    <p className="text-secondary">
                        {t('status.noIncidents')}
                    </p>
                </div>
            </div>
        </div>
    );
}
