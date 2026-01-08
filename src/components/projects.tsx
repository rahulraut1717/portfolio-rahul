"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowUpRight, Folder } from "lucide-react";

interface Project {
    title: string;
    description: string;
    tags: string[];
    github?: string;
    demo?: string;
    featured?: boolean;
}

const projects: Project[] = [
    {
        title: "E-Commerce Platform",
        description: "Full-featured e-commerce with cart, checkout, and payment integration using Stripe.",
        tags: ["Next.js", "TypeScript", "Stripe", "Prisma"],
        github: "https://github.com/rahulraut1717",
        demo: "https://example.com",
        featured: true,
    },
    {
        title: "Task Management App",
        description: "Collaborative task management with real-time updates and team features.",
        tags: ["React", "Node.js", "Socket.io", "MongoDB"],
        github: "https://github.com/rahulraut1717",
        demo: "https://example.com",
        featured: true,
    },
    {
        title: "AI Content Generator",
        description: "AI-powered tool for generating blog posts, marketing copy, and social media content.",
        tags: ["Next.js", "OpenAI", "Tailwind"],
        github: "https://github.com/rahulraut1717",
    },
    {
        title: "Weather Dashboard",
        description: "Beautiful weather app with forecasts, location search, and interactive maps.",
        tags: ["React", "Weather API", "Charts"],
        github: "https://github.com/rahulraut1717",
    },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-30px" });

    return (
        <motion.article
            ref={ref}
            className={`group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:border-muted-foreground/30 ${project.featured ? "md:col-span-1" : ""
                }`}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
        >
            {/* Top row with folder icon and links */}
            <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                    <Folder size={22} className="text-muted-foreground" />
                </div>
                <div className="flex gap-3">
                    {project.github && (
                        <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                            aria-label="View source"
                            onClick={(e) => e.stopPropagation()}
                            whileHover={{ scale: 1.1, y: -2 }}
                        >
                            <Github size={18} />
                        </motion.a>
                    )}
                    {project.demo && (
                        <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors"
                            aria-label="View demo"
                            onClick={(e) => e.stopPropagation()}
                            whileHover={{ scale: 1.1, y: -2 }}
                        >
                            <ExternalLink size={18} />
                        </motion.a>
                    )}
                </div>
            </div>

            {/* Title */}
            <h3 className="font-semibold text-foreground text-lg mb-2 flex items-center gap-2 group-hover:text-primary transition-colors">
                {project.title}
                <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </h3>

            {/* Description */}
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                    <span
                        key={tag}
                        className="text-xs text-muted-foreground px-2.5 py-1 bg-secondary rounded-md font-medium"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Hover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </motion.article>
    );
}

export function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <section id="projects" className="py-8 md:py-10" ref={ref}>
            <div className="container">
                <motion.div
                    className="mb-8 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <p className="section-label">Work</p>
                    <h2 className="section-title text-2xl md:text-3xl">Selected Projects</h2>
                    <p className="text-muted-foreground mt-2">Some things I&apos;ve built recently</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>

                <motion.div
                    className="text-center mt-8"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <motion.a
                        href="https://github.com/rahulraut1717"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors px-4 py-2 rounded-lg border border-border hover:border-muted-foreground/50"
                        whileHover={{ y: -2 }}
                    >
                        <Github size={16} />
                        View more on GitHub
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
