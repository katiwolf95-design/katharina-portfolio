import type { Variants } from "motion/react";

export const greeting: Variants = {
    hidden: {
        opacity: 0,
        x: 80,
    },

    show: {
        opacity: 1,
        x: 0,

        transition: {
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};
    
export const fadeUp: Variants = {
    hidden: {
        opacity: 0,
        y: 18,
    },

    show: {
        opacity: 1,
        y: 0,

        transition: {
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const staggerContainer: Variants = {
    hidden: {},
    show: {
        transition: {
            
            staggerChildren: 0.28,
        },
    },
};