"use client";

import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";

const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/rahulraut1717" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/rahul-raut-0a9242265/" },
];

const footerLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];

export function Footer() {
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 300);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer className="border-t border-border py-8 relative">
            <div className="container">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Copyright */}
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Rahul Raut
                    </p>

                    {/* Footer Links */}
                    <nav className="flex flex-wrap justify-center gap-4">
                        {footerLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Social Links */}
                    <div className="flex items-center gap-3">
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-foreground transition-colors"
                                aria-label={social.name}
                            >
                                <social.icon size={16} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Back to Top Button */}
            <motion.div
                className="fixed bottom-6 right-6"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                    opacity: showBackToTop ? 1 : 0,
                    scale: showBackToTop ? 1 : 0
                }}
                transition={{ duration: 0.2 }}
            >
                <motion.button
                    onClick={scrollToTop}
                    className="icon-btn"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label="Back to top"
                >
                    <ArrowUp size={16} />
                </motion.button>
            </motion.div>
        </footer>
    );
}
