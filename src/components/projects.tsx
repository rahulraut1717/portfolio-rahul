"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

interface Project {
    title: string;
    description: string;
    tags: string[];
    github?: string;
    demo?: string;
}

const projects: Project[] = [
    {
        title: "E-Commerce Platform",
        description: "Full-featured e-commerce with cart, checkout, and payment integration.",
        tags: ["Next.js", "TypeScript", "Stripe"],
        github: "https://github.com/rahulraut1717",
        demo: "https://example.com",
    },
    {
        title: "Task Management App",
        description: "Collaborative task management with real-time updates.",
        tags: ["React", "Node.js", "Socket.io"],
        github: "https://github.com/rahulraut1717",
        demo: "https://example.com",
    },
    {
        title: "AI Content Generator",
        description: "AI-powered tool for generating blog posts and copy.",
        tags: ["Next.js", "OpenAI", "Tailwind"],
        github: "https://github.com/rahulraut1717",
    },
    {
        title: "Weather Dashboard",
        description: "Weather app with forecasts and location search.",
        tags: ["React", "Weather API"],
        github: "https://github.com/rahulraut1717",
    },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-30px" });

    return (
        <motion.article
            ref={ref}
            className="card p-5 group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ y: -4 }}
        >
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
                <h3 className="font-medium text-foreground text-[0.9375rem] group-hover:text-white transition-colors flex items-center gap-1">
                    {project.title}
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <div className="flex gap-2">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors p-1"
                            aria-label="View source code"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Github size={15} />
                        </a>
                    )}
                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-foreground transition-colors p-1"
                            aria-label="View live demo"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <ExternalLink size={15} />
                        </a>
                    )}
                </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                    <span
                        key={tag}
                        className="text-xs text-muted-foreground/80 px-2 py-0.5 bg-white/[0.02] rounded"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </motion.article>
    );
}

export function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <section id="projects" className="section" ref={ref}>
            <div className="container">
                {/* Section Header */}
                <motion.div
                    className="mb-8 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <p className="section-label">Work</p>
                    <h2 className="section-title">Selected Projects</h2>
                    <p className="section-subtitle">Some things I&apos;ve built</p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>

                {/* View More */}
                <motion.div
                    className="text-center mt-8"
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <a
                        href="https://github.com/rahulraut1717"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors link-hover"
                    >
                        <Github size={15} />
                        View more on GitHub
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
