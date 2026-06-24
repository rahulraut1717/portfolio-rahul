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
        <section id="hero" className="pt-20 pb-4">
            <div className="container">
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 max-w-4xl mx-auto">
                    {/* Photo - Left Side on Desktop */}
                    <motion.div
                        className="flex-shrink-0"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="relative">
                            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-border shadow-lg">
                                <Image
                                    src="/rahul-photo.jpg"
                                    alt="Rahul Raut"
                                    width={176}
                                    height={176}
                                    className="w-full h-full object-cover"
                                    priority
                                />
                            </div>
                            <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background" />
                        </div>
                    </motion.div>

                    {/* Content - Right Side on Desktop */}
                    <div className="flex-1 text-center md:text-left">
                        {/* Greeting */}
                        <motion.div
                            className="flex items-center gap-2 mb-1 justify-center md:justify-start"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                        >
                            <span className="text-2xl">👋</span>
                            <span className="text-muted-foreground text-lg">Hi, I&apos;m</span>
                        </motion.div>

                        {/* Name - BIGGER */}
                        <motion.h1
                            className="text-5xl md:text-6xl lg:text-7xl font-display mb-2 text-foreground tracking-tight"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                        >
                            Rahul Raut
                        </motion.h1>

                        {/* Role - BIGGER */}
                        <motion.div
                            className="flex items-center gap-2 mb-3 justify-center md:justify-start"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                        >
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                            <h2 className="text-lg md:text-xl text-muted-foreground font-medium">
                                Full Stack Developer
                            </h2>
                        </motion.div>

                        {/* Tagline - BIGGER */}
                        <motion.p
                            className="text-muted-foreground text-base md:text-lg max-w-lg mb-5 leading-relaxed mx-auto md:mx-0"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.4 }}
                        >
                            Building clean, performant web experiences with modern technologies.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            className="flex items-center gap-3 mb-4 justify-center md:justify-start"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.5 }}
                        >
                            <button
                                onClick={handleScrollToProjects}
                                className="btn-primary group text-base px-5 py-2.5"
                            >
                                View Work
                                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                            </button>
                            <button
                                onClick={handleScrollToContact}
                                className="btn-secondary text-base px-5 py-2.5"
                            >
                                Contact
                            </button>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            className="flex items-center gap-3 justify-center md:justify-start"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.6 }}
                        >
                            <a
                                href="https://github.com/rahulraut1717"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="icon-btn w-10 h-10"
                                aria-label="GitHub"
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/rahul-raut-0a9242265/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="icon-btn w-10 h-10"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="mailto:rahulraut6334@gmail.com"
                                className="icon-btn w-10 h-10"
                                aria-label="Email"
                            >
                                <Mail size={20} />
                            </a>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
