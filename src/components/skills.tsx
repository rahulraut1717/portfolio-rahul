"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Server, Database, Wrench } from "lucide-react";

interface SkillCategory {
    name: string;
    icon: React.ElementType;
    skills: string[];
    color: string;
}

const skillCategories: SkillCategory[] = [
    {
        name: "Frontend",
        icon: Code2,
        color: "from-blue-500/20 to-cyan-500/20",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
    },
    {
        name: "Backend",
        icon: Server,
        color: "from-green-500/20 to-emerald-500/20",
        skills: ["Node.js", "Express", "Python", "REST APIs", "GraphQL"]
    },
    {
        name: "Database",
        icon: Database,
        color: "from-purple-500/20 to-pink-500/20",
        skills: ["PostgreSQL", "MongoDB", "Redis", "Supabase", "Prisma"]
    },
    {
        name: "Tools",
        icon: Wrench,
        color: "from-orange-500/20 to-yellow-500/20",
        skills: ["Git", "Docker", "Vercel", "VS Code", "Figma"]
    },
];

export function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <section id="skills" className="py-8 md:py-10" ref={ref}>
            <div className="container">
                <motion.div
                    className="mb-8 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    <p className="section-label">Skills</p>
                    <h2 className="section-title text-2xl md:text-3xl">What I work with</h2>
                    <p className="text-muted-foreground mt-2">Technologies I use to bring ideas to life</p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                    {skillCategories.map((category, i) => {
                        const Icon = category.icon;
                        return (
                            <motion.div
                                key={category.name}
                                className="group relative overflow-hidden rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-muted-foreground/30"
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                                whileHover={{ y: -4 }}
                            >
                                {/* Background gradient */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-opacity`} />

                                {/* Content */}
                                <div className="relative">
                                    {/* Icon and Title */}
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <Icon size={18} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                                        </div>
                                        <h3 className="font-semibold text-foreground">
                                            {category.name}
                                        </h3>
                                    </div>

                                    {/* Skills list */}
                                    <ul className="space-y-2">
                                        {category.skills.map((skill, skillIndex) => (
                                            <motion.li
                                                key={skill}
                                                className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                                transition={{ duration: 0.3, delay: 0.3 + i * 0.1 + skillIndex * 0.05 }}
                                                whileHover={{ x: 4 }}
                                            >
                                                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
                                                {skill}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
