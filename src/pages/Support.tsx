import { Mail, MessageCircle, HelpCircle } from 'lucide-react';

const Support = () => {
    return (
        <div className="pt-24 pb-16 min-h-screen">
            <div className="container">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold mb-6">
                        Support Center
                    </h1>
                    <p className="text-xl text-text-secondary mb-12">
                        We're here to help. Choose the best way to reach us.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Email Support */}
                        <div className="card glass p-8">
                            <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-6">
                                <Mail className="w-6 h-6 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Email Support</h3>
                            <p className="text-text-secondary mb-6">
                                For general inquiries, technical issues, or billing questions. We usually respond within 24 hours.
                            </p>
                            <a href="mailto:support@smarterbot.store" className="btn btn-primary w-full justify-center">
                                support@smarterbot.store
                            </a>
                        </div>

                        {/* Terms & Policies */}
                        <div className="card glass p-8">
                            <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-6">
                                <HelpCircle className="w-6 h-6 text-secondary" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">FAQs & Docs</h3>
                            <p className="text-text-secondary mb-6">
                                Check our documentation and frequently asked questions for quick answers.
                            </p>
                            <a href="/docs" className="btn btn-secondary w-full justify-center">
                                Visit Documentation
                            </a>
                        </div>
                    </div>

                    <div className="mt-12 p-8 card bg-bg-secondary/50 border border-border">
                        <div className="flex items-start gap-4">
                            <MessageCircle className="w-6 h-6 text-accent mt-1" />
                            <div>
                                <h3 className="text-xl font-bold mb-2">Community Support</h3>
                                <p className="text-text-secondary">
                                    Join our community on GitHub to report bugs, suggest features, or discuss with other users.
                                </p>
                                <a
                                    href="https://github.com/SmarterCL/smarterbot.store/issues"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary-light hover:underline mt-2 inline-block"
                                >
                                    Visit GitHub Issues &rarr;
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;
