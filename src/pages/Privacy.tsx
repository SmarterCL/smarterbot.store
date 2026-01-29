import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Privacy = () => {
    const { t } = useLanguage();
    const data = t('privacy');

    return (
        <div className="pt-24 pb-16 min-h-screen">
            <div className="container">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-4xl font-bold mb-8">{data.title}</h1>
                    <div className="prose prose-invert prose-lg max-w-none text-text-secondary">
                        <p className="mb-6">
                            {data.updated}
                        </p>
                        <p className="mb-6">
                            {data.intro}
                        </p>

                        {data.sections.map((section: any, index: number) => (
                            <div key={index}>
                                <h2 className="text-2xl font-bold text-text-primary mt-8 mb-4">{section.title}</h2>
                                <p className="mb-4">
                                    {section.content}
                                </p>
                                {section.list && (
                                    <ul className="list-disc pl-6 mb-6 space-y-2">
                                        {section.list.map((item: string, i: number) => (
                                            <li key={i} dangerouslySetInnerHTML={{ __html: item }}></li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}

                        <p className="font-semibold text-text-primary">
                            support@smarterbot.store
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Privacy;
