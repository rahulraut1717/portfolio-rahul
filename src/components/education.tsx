"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar } from "lucide-react";

interface Education {
    degree: string;
    institution: string;
    location: string;
    period: string;
    status?: string;
}

const educationData: Education[] = [
    {
        degree: "MCA (Master of Computer Applications)",
        institution: "MDA Education & Research Institute",
        location: "Kolpa, Latur",
        period: "2025 - 2027",
        status: "Ongoing",
    },
    {
        degree: "BCA (Bachelor of Computer Applications)",
        institution: "Rajashri Shahu Mahavidyalaya",
        location: "Latur",
        period: "2022 - 2025",
    },
];

export function Education() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    return (
        <section id="education" className="pt-4 pb-8" ref={ref}>
            <div className="container">
                <motion.div
                    className="max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                >
                    {/* Section Header */}
                    <div className="mb-6">
                        <p className="section-label">Education</p>
                        <h2 className="section-title">Academic Background</h2>
                    </div>

                    {/* Education Timeline */}
                    <div className="space-y-4">
                        {educationData.map((edu, index) => (
                            <motion.div
                                key={edu.degree}
                                className="card p-5 relative"
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.4, delay: index * 0.15 }}
                                whileHover={{ y: -2 }}
                            >
                                <div className="flex items-start gap-4">
                                    {/* Icon */}
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                                        <GraduationCap size={18} className="text-muted-foreground" />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-start justify-between gap-2 mb-1">
                                            <h3 className="font-medium text-foreground text-sm md:text-base">
                                                {edu.degree}
                                            </h3>
                                            {edu.status && (
                                                <span className="flex-shrink-0 text-[10px] px-2 py-0.5 bg-green-500/10 text-green-500 rounded-full font-medium">
                                                    {edu.status}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-muted-foreground text-sm mb-1">
                                            {edu.institution}, {edu.location}
                                        </p>
                                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                            <Calendar size={12} />
                                            <span>{edu.period}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
