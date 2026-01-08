"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const techStack = [
    "React", "Next.js", "TypeScript", "Node.js",
    "PostgreSQL", "MongoDB", "Tailwind CSS", "Framer Motion"
];

export function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section id="about" className="section" ref={ref}>
            <div className="container">
                <motion.div
                    className="max-w-2xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {/* Section Header */}
                    <motion.div className="mb-8" variants={itemVariants}>
                        <p className="section-label">About</p>
                        <h2 className="section-title">A bit about me</h2>
                    </motion.div>

                    {/* Bio */}
                    <motion.div className="space-y-4 mb-8" variants={itemVariants}>
                        <p className="text-muted-foreground leading-relaxed text-[0.9375rem]">
                            I&apos;m a full-stack developer based in India who enjoys building
                            things for the web. I focus on creating clean, user-friendly experiences
                            with attention to detail.
                        </p>
                        <p className="text-muted-foreground leading-relaxed text-[0.9375rem]">
                            I work primarily with React and Next.js on the frontend, and Node.js
                            on the backend. Always exploring new technologies and ways to improve.
                        </p>
                    </motion.div>

                    {/* Tech Stack */}
                    <motion.div variants={itemVariants}>
                        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Technologies</p>
                        <div className="flex flex-wrap gap-2">
                            {techStack.map((tech, index) => (
                                <motion.span
                                    key={tech}
                                    className="tag"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
