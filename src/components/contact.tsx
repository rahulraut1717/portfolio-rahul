"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Send, Github, Linkedin, ArrowUpRight } from "lucide-react";

const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/rahulraut1717" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/rahul-raut-0a9242265/" },
];

export function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormState((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsSubmitting(false);
        setSubmitStatus("success");
        setFormState({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitStatus("idle"), 3000);
    };

    return (
        <section id="contact" className="section" ref={ref}>
            <div className="container">
                {/* Section Header */}
                <motion.div
                    className="mb-8 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <p className="section-label">Contact</p>
                    <h2 className="section-title">Get in touch</h2>
                    <p className="section-subtitle">Have a project in mind? Let&apos;s talk.</p>
                </motion.div>

                <div className="max-w-md mx-auto">
                    {/* Email Link */}
                    <motion.div
                        className="mb-8 text-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <a
                            href="mailto:rahulraut6334@gmail.com"
                            className="inline-flex items-center gap-2 text-foreground hover:opacity-80 transition-opacity group"
                        >
                            <Mail size={16} />
                            <span>rahulraut6334@gmail.com</span>
                            <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        className="space-y-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="name" className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formState.name}
                                    onChange={handleChange}
                                    required
                                    className="input"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange}
                                    required
                                    className="input"
                                    placeholder="you@email.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-xs uppercase tracking-wider text-muted-foreground mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formState.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="input resize-none"
                                placeholder="Your message..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? (
                                <motion.div
                                    className="w-4 h-4 border-2 border-background border-t-transparent rounded-full"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                />
                            ) : (
                                <>
                                    Send Message
                                    <Send size={15} />
                                </>
                            )}
                        </button>

                        {submitStatus === "success" && (
                            <motion.p
                                className="text-center text-sm text-green-400"
                                initial={{ opacity: 0, y: 5 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                ✓ Message sent! I&apos;ll get back to you soon.
                            </motion.p>
                        )}
                    </motion.form>

                    {/* Social Links */}
                    <motion.div
                        className="mt-8 flex justify-center gap-2"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        {socialLinks.map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="icon-btn"
                                aria-label={social.name}
                            >
                                <social.icon size={18} />
                            </a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
