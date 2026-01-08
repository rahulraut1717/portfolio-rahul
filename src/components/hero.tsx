"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

export function Hero() {
    const handleScrollToProjects = () => {
        const target = document.querySelector("#projects");
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleScrollToContact = () => {
        const target = document.querySelector("#contact");
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="hero"
            className="min-h-[calc(100vh-4rem)] flex items-center justify-center relative"
        >
            <div className="container py-16 md:py-20">
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                    {/* Photo with glow effect */}
                    <motion.div
                        className="mb-6"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <div className="relative">
                            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border border-white/10 glow">
                                <Image
                                    src="/rahul-photo.jpg"
                                    alt="Rahul Raut"
                                    width={128}
                                    height={128}
                                    className="w-full h-full object-cover"
                                    priority
                                />
                            </div>
                            {/* Online indicator */}
                            <motion.div
                                className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.5, type: "spring" }}
                            />
                        </div>
                    </motion.div>

                    {/* Greeting with iOS hand emoji */}
                    <motion.div
                        className="flex items-center gap-2 mb-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                    >
                        <motion.span
                            className="text-2xl"
                            animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                            transition={{
                                duration: 2.5,
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatDelay: 1
                            }}
                        >
                            👋
                        </motion.span>
                        <span className="text-muted-foreground">Hi, I&apos;m</span>
                    </motion.div>

                    {/* Name with Mystery Quest font */}
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-display mb-2 text-foreground tracking-tight"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                    >
                        Rahul Raut
                    </motion.h1>

                    {/* Role with typing effect */}
                    <motion.div
                        className="flex items-center gap-2 mb-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                    >
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <h2 className="text-base md:text-lg text-muted-foreground">
                            Full Stack Developer
                        </h2>
                    </motion.div>

                    {/* Tagline */}
                    <motion.p
                        className="text-muted-foreground text-sm md:text-base max-w-md mb-6 leading-relaxed"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                    >
                        Building clean, performant web experiences with modern technologies.
                        Passionate about great design and clean code.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex items-center gap-3 mb-6"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 }}
                    >
                        <button onClick={handleScrollToProjects} className="btn-primary group">
                            View Work
                            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                        </button>
                        <button onClick={handleScrollToContact} className="btn-secondary">
                            Contact
                        </button>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        className="flex items-center gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                    >
                        <a
                            href="https://github.com/rahulraut1717"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon-btn"
                            aria-label="GitHub"
                        >
                            <Github size={18} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/rahul-raut-0a9242265/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="icon-btn"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={18} />
                        </a>
                        <a
                            href="mailto:rahulraut6334@gmail.com"
                            className="icon-btn"
                            aria-label="Email"
                        >
                            <Mail size={18} />
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll hint */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
            >
                <motion.div
                    className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-2"
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <motion.div className="w-1 h-1.5 bg-white/40 rounded-full" />
                </motion.div>
            </motion.div>
        </section>
    );
}
