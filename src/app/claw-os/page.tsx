'use client';

import Image from 'next/image';
import { 
    Cpu, 
    Cloud, 
    Zap, 
    Shield, 
    ArrowRight, 
    CheckCircle2, 
    Terminal, 
    Box
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function ClawOSPage() {
    return (
        <div className="claw-theme-wrapper min-h-screen bg-[#050505] text-white overflow-hidden pb-20">
            {/* Hero Section */}
            <section className="relative pt-40 pb-24 overflow-hidden">
                <div className="container px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex align-items-center gap-2 px-4 py-2 mb-8 text-xs font-bold tracking-[0.2em] uppercase text-yellow-500 border border-yellow-500/20 rounded-full bg-yellow-500/5 backdrop-blur-md">
                            <Box size={14} /> The Future of Sovereign Intelligence
                        </div>
                        <h1 className="display-2 fw-black mb-6 tracking-tight">
                            CLAW <span className="text-yellow-500">OS</span> Ecosystem
                        </h1>
                        <p className="lead text-white/50 mx-auto max-w-2xl mb-12">
                            A unified AI operating stack designed for absolute privacy, low latency, and infinite scalability. From the palm of your hand to the global edge.
                        </p>
                        
                        <div className="d-flex justify-content-center gap-3">
                            <a href="#compare" className="btn btn-warning px-5 py-3 rounded-xl fw-bold d-flex align-items-center gap-2">
                                Choose Your Tier <ArrowRight size={18} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Ambient Glow */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none z-0">
                        <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-yellow-500/10 rounded-full blur-[150px]"></div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-500/5 rounded-full blur-[150px]"></div>
                    </div>
                </div>
            </section>

            {/* Options Comparison */}
            <section id="compare" className="py-24 relative z-10">
                <div className="container px-6">
                    <div className="text-center mb-16">
                        <h2 className="h1 fw-bold mb-4">Select Your Deployment Path</h2>
                        <p className="text-white/40">Two ways to harness the power of Claw OS.</p>
                    </div>

                    <div className="row g-5">
                        
                        {/* NemoClaw - NVIDIA Card */}
                        <div className="col-lg-6">
                            <motion.div 
                                className="group relative h-full bg-[#0d0d0d] border border-white/5 rounded-[40px] p-8 overflow-hidden hover:border-green-500/30 transition-all duration-700 hover:shadow-[0_0_80px_-20px_rgba(16,185,129,0.15)]"
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="relative z-10">
                                    <div className="d-flex align-items-center justify-content-between mb-10">
                                        <div className="d-flex align-items-center gap-4">
                                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-600/5 flex items-center justify-center border border-green-500/20">
                                                <Cpu className="text-green-500 w-8 h-8" />
                                            </div>
                                            <div>
                                                <h3 className="h3 fw-bold mb-0">NVIDIA NemoClaw</h3>
                                                <span className="text-green-500 text-xs font-bold uppercase tracking-widest">Hardware-Accelerated Edge</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <h4 className="display-6 fw-bold mb-6">Sovereign Edge <br/><span className="text-white/40">Intelligence</span></h4>
                                    
                                    <ul className="list-unstyled space-y-4 mb-12">
                                        {[
                                            "Powered by NVIDIA Jetson Orin Nano",
                                            "Ultra-low latency local inference",
                                            "100% data privacy (No cloud required)",
                                            "Native NVIDIA NIM integration",
                                            "Signature Jensen Huang Edition hardware"
                                        ].map((item) => (
                                            <li key={item} className="d-flex align-items-center gap-3 text-white/60">
                                                <CheckCircle2 size={18} className="text-green-500 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="d-flex flex-column gap-3">
                                        <button className="btn btn-success py-4 rounded-2xl fw-bold tracking-tight hover:scale-[1.02] transition-transform">
                                            Order Hardware Kit
                                        </button>
                                        <div className="text-center text-xs text-white/30">Limited supply available for early-access developers.</div>
                                    </div>
                                </div>

                                {/* Product Image Wrapper */}
                                <div className="relative mt-12 h-[340px] -mx-8 -mb-8 rounded-b-[40px] overflow-hidden">
                                    <Image 
                                        src="/assets/images/claw-os/nvidia.png" 
                                        alt="NVIDIA NemoClaw Hardware" 
                                        fill 
                                        className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent"></div>
                                </div>
                            </motion.div>
                        </div>

                        {/* OpenClaw - Hostinger Card */}
                        <div className="col-lg-6">
                            <motion.div 
                                className="group relative h-full bg-[#0d0d0d] border border-white/5 rounded-[40px] p-8 overflow-hidden hover:border-blue-500/30 transition-all duration-700 hover:shadow-[0_0_80px_-20px_rgba(59,130,246,0.15)]"
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="relative z-10">
                                    <div className="d-flex align-items-center justify-content-between mb-10">
                                        <div className="d-flex align-items-center gap-4">
                                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/5 flex items-center justify-center border border-blue-500/20">
                                                <Cloud className="text-blue-400 w-8 h-8" />
                                            </div>
                                            <div>
                                                <h3 className="h3 fw-bold mb-0">OpenClaw Cloud</h3>
                                                <span className="text-blue-400 text-xs font-bold uppercase tracking-widest">Scalable Virtual Nodes</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <h4 className="display-6 fw-bold mb-6">Cloud Ready <br/><span className="text-white/40">Infrastructure</span></h4>
                                    
                                    <ul className="list-unstyled space-y-4 mb-12">
                                        {[
                                            "Hostinger VPS Cloud Ready",
                                            "Pre-installed AI Credits included",
                                            "1-Click Dockerized Deployment",
                                            "Encrypted Private Database",
                                            "Global low-latency edge nodes"
                                        ].map((item) => (
                                            <li key={item} className="d-flex align-items-center gap-3 text-white/60">
                                                <CheckCircle2 size={18} className="text-blue-400 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="d-flex flex-column gap-3">
                                        <button className="btn btn-primary py-4 rounded-2xl fw-bold tracking-tight hover:scale-[1.02] transition-transform">
                                            Deploy on Hostinger
                                        </button>
                                        <div className="text-center text-xs text-white/30">Instant setup. No credit card required for trial.</div>
                                    </div>
                                </div>

                                {/* Abstract Cloud Image Wrapper */}
                                <div className="relative mt-12 h-[340px] -mx-8 -mb-8 rounded-b-[40px] overflow-hidden">
                                    <Image 
                                        src="/assets/images/claw-os/hostinger.png" 
                                        alt="Hostinger OpenClaw Deployment" 
                                        fill 
                                        className="object-cover opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-transparent"></div>
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Bottom Value Props */}
            <section className="py-24 border-t border-white/5">
                <div className="container px-6">
                    <div className="row g-4">
                        {[
                            { icon: Shield, title: "Sovereign Privacy", desc: "Your data never leaves your infrastructure. 100% control." },
                            { icon: Zap, title: "Ultra Performance", desc: "Optimized for high-throughput AI agent communications." },
                            { icon: Terminal, title: "Developer First", desc: "Comprehensive SDK and 1-click installer for all platforms." }
                        ].map((prop, i) => (
                            <div key={i} className="col-md-4">
                                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 h-full">
                                    <prop.icon className="text-yellow-500 mb-4" size={32} />
                                    <h5 className="fw-bold mb-3">{prop.title}</h5>
                                    <p className="text-white/40 mb-0">{prop.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <style jsx>{`
                .claw-theme-wrapper {
                    position: relative;
                    z-index: 10;
                }
                .text-gradient-yellow {
                    background: linear-gradient(135deg, #fbbf24 0%, #d97706 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                .space-y-4 > * + * {
                    margin-top: 1rem;
                }
            `}</style>
        </div>
    );
}
