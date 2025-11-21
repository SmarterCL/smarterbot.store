import { Mail, Phone, MapPin, Send, MessageSquare, Twitter, Linkedin, Github } from 'lucide-react';

const Contact = () => {
    return (
        <div className="min-h-screen pt-24 pb-16">
            <div className="container">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="mb-4">
                        Get in <span className="gradient-text">Touch</span>
                    </h1>
                    <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                        Have questions? We'd love to hear from you. Send us a message and we'll respond as soon
                        as possible.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Contact Information */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Contact Methods */}
                        <div className="card">
                            <h3 className="text-xl font-bold mb-6">Contact Information</h3>

                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="font-semibold mb-1">Email</div>
                                        <a
                                            href="mailto:smarterbotcl@gmail.com"
                                            className="text-text-secondary hover:text-primary-light transition-colors"
                                        >
                                            smarterbotcl@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-gradient-secondary flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="font-semibold mb-1">Phone</div>
                                        <a
                                            href="tel:+1234567890"
                                            className="text-text-secondary hover:text-primary-light transition-colors"
                                        >
                                            +1 (234) 567-890
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-gradient-accent flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="font-semibold mb-1">Office</div>
                                        <p className="text-text-secondary">
                                            123 Automation Street
                                            <br />
                                            Tech City, TC 12345
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="card">
                            <h3 className="text-xl font-bold mb-6">Follow Us</h3>
                            <div className="flex gap-3">
                                <a
                                    href="https://github.com/SmarterCL"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 rounded-lg bg-bg-tertiary border border-border flex items-center justify-center text-text-secondary hover:text-primary-light hover:border-primary transition-all hover:shadow-glow"
                                >
                                    <Github className="w-6 h-6" />
                                </a>
                                <a
                                    href="#"
                                    className="w-12 h-12 rounded-lg bg-bg-tertiary border border-border flex items-center justify-center text-text-secondary hover:text-primary-light hover:border-primary transition-all hover:shadow-glow"
                                >
                                    <Twitter className="w-6 h-6" />
                                </a>
                                <a
                                    href="#"
                                    className="w-12 h-12 rounded-lg bg-bg-tertiary border border-border flex items-center justify-center text-text-secondary hover:text-primary-light hover:border-primary transition-all hover:shadow-glow"
                                >
                                    <Linkedin className="w-6 h-6" />
                                </a>
                            </div>
                        </div>

                        {/* Business Hours */}
                        <div className="card">
                            <h3 className="text-xl font-bold mb-6">Business Hours</h3>
                            <div className="space-y-2 text-text-secondary">
                                <div className="flex justify-between">
                                    <span>Monday - Friday</span>
                                    <span className="font-semibold text-text-primary">9:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Saturday</span>
                                    <span className="font-semibold text-text-primary">10:00 AM - 4:00 PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sunday</span>
                                    <span className="font-semibold text-text-primary">Closed</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="card">
                            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>

                            <form className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            className="input"
                                            placeholder="John"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            className="input"
                                            placeholder="Doe"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="input"
                                        placeholder="john.doe@example.com"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                                        Phone Number (Optional)
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="input"
                                        placeholder="+1 (234) 567-890"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        className="input"
                                        placeholder="How can we help you?"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={6}
                                        className="input resize-none"
                                        placeholder="Tell us more about your project or inquiry..."
                                        required
                                    ></textarea>
                                </div>

                                <div className="flex items-start gap-3">
                                    <input
                                        type="checkbox"
                                        id="privacy"
                                        name="privacy"
                                        className="mt-1"
                                        required
                                    />
                                    <label htmlFor="privacy" className="text-sm text-text-secondary">
                                        I agree to the{' '}
                                        <a href="/privacy" className="text-primary-light hover:underline">
                                            Privacy Policy
                                        </a>{' '}
                                        and consent to being contacted by SmarterBOT.
                                    </label>
                                </div>

                                <button type="submit" className="btn btn-primary w-full md:w-auto">
                                    <Send className="w-5 h-5" />
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* Quick Contact Options */}
                        <div className="grid md:grid-cols-2 gap-4 mt-6">
                            <div className="card glass hover:border-primary transition-all cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0">
                                        <MessageSquare className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Live Chat</h4>
                                        <p className="text-sm text-text-secondary">Chat with our support team</p>
                                    </div>
                                </div>
                            </div>

                            <div className="card glass hover:border-primary transition-all cursor-pointer">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-gradient-secondary flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Email Support</h4>
                                        <p className="text-sm text-text-secondary">Get help via email</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
