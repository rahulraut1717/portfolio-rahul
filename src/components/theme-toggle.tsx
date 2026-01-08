"use client";

import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "./theme-provider";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="theme-toggle opacity-0">
                <Sun size={16} />
            </div>
        );
    }

    return (
        <motion.button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            whileTap={{ scale: 0.9 }}
        >
            <motion.div
                initial={false}
                animate={{ rotate: theme === "dark" ? 0 : 180 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </motion.div>
        </motion.button>
    );
}
