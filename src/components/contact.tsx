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
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success">("idle");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
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
        <section id="contact" className="py-8 md:py-10" ref={ref}>
            <div className="container">
                <motion.div
                    className="mb-6 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <p className="section-label">Contact</p>
                    <h2 className="section-title">Get in touch</h2>
                </motion.div>

                <div className="max-w-md mx-auto">
                    <motion.div
                        className="mb-5 text-center"
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <motion.a
                            href="mailto:rahulraut6334@gmail.com"
                            className="inline-flex items-center gap-1.5 text-sm text-foreground hover:opacity-80 transition-opacity group"
                            whileHover={{ scale: 1.02 }}
                        >
                            <Mail size={14} />
                            rahulraut6334@gmail.com
                            <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.a>
                    </motion.div>

                    <motion.form
                        onSubmit={handleSubmit}
                        className="space-y-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label htmlFor="name" className="block text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5">Name</label>
                                <input type="text" id="name" name="name" value={formState.name} onChange={handleChange} required className="input text-sm" placeholder="Name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5">Email</label>
                                <input type="email" id="email" name="email" value={formState.email} onChange={handleChange} required className="input text-sm" placeholder="Email" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-[10px] uppercase tracking-wider text-muted-foreground mb-1.5">Message</label>
                            <textarea id="message" name="message" value={formState.message} onChange={handleChange} required rows={3} className="input text-sm resize-none" placeholder="Message..." />
                        </div>

                        <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn-primary w-full text-sm disabled:opacity-50"
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                        >
                            {isSubmitting ? (
                                <motion.div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full" animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} />
                            ) : (
                                <>Send <Send size={14} /></>
                            )}
                        </motion.button>

                        {submitStatus === "success" && (
                            <motion.p className="text-center text-xs text-green-500" initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }}>
                                ✓ Sent! I&apos;ll reply soon.
                            </motion.p>
                        )}
                    </motion.form>

                    <motion.div
                        className="mt-5 flex justify-center gap-2"
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        {socialLinks.map((social) => (
                            <motion.a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="icon-btn"
                                aria-label={social.name}
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <social.icon size={16} />
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
