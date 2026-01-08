"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface SkillCategory {
    name: string;
    skills: string[];
}

const skillCategories: SkillCategory[] = [
    {
        name: "Frontend",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
        name: "Backend",
        skills: ["Node.js", "Express", "Python", "REST APIs", "GraphQL"],
    },
    {
        name: "Database",
        skills: ["PostgreSQL", "MongoDB", "Redis", "Supabase"],
    },
    {
        name: "Tools",
        skills: ["Git", "Docker", "Vercel", "VS Code", "Figma"],
    },
];

export function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section id="skills" className="section" ref={ref}>
            <div className="container">
                {/* Section Header */}
                <motion.div
                    className="mb-8 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <p className="section-label">Skills</p>
                    <h2 className="section-title">What I work with</h2>
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {skillCategories.map((category) => (
                        <motion.div key={category.name} variants={itemVariants}>
                            <h3 className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3">
                                {category.name}
                            </h3>
                            <ul className="space-y-2">
                                {category.skills.map((skill) => (
                                    <motion.li
                                        key={skill}
                                        className="text-sm text-foreground/80 hover:text-foreground transition-colors cursor-default"
                                        whileHover={{ x: 4 }}
                                    >
                                        {skill}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
