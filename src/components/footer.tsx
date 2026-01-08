"use client";

import { motion } from "framer-motion";
import { ArrowUp, Github, Linkedin } from "lucide-react";
import { useState, useEffect } from "react";

const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/rahulraut1717" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/rahul-raut-0a9242265/" },
];

export function Footer() {
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => setShowBackToTop(window.scrollY > 200);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <footer className="border-t border-border py-6">
            <div className="container">
                <div className="flex flex-col md:flex-row items-center justify-between gap-3">
                    <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Rahul Raut</p>
                    <nav className="flex gap-4">
                        {["About", "Projects", "Skills", "Contact"].map((name) => (
                            <a key={name} href={`#${name.toLowerCase()}`} onClick={(e) => handleNavClick(e, `#${name.toLowerCase()}`)} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                                {name}
                            </a>
                        ))}
                    </nav>
                    <div className="flex gap-3">
                        {socialLinks.map((s) => (
                            <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors" aria-label={s.name}>
                                <s.icon size={14} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <motion.div
                className="fixed bottom-5 right-5"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: showBackToTop ? 1 : 0, scale: showBackToTop ? 1 : 0 }}
                transition={{ duration: 0.2 }}
            >
                <motion.button onClick={scrollToTop} className="icon-btn" whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }} aria-label="Back to top">
                    <ArrowUp size={14} />
                </motion.button>
            </motion.div>
        </footer>
    );
}
