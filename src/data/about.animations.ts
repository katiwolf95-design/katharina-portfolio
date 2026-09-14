import type { Variants } from "motion/react";

export const fadeUp: Variants = {
    hidden: {
        opacity: 0,
        x: 60,
    },

    show: {
        opacity: 1,
        x: 0,

        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const fadeUpDelayed: Variants = {
    hidden: {
        opacity: 0,
        x: 60,
    },

    show: {
        opacity: 1,
        x: 0,

        transition: {
            delay: .45,
            duration: .7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

export const staggerContainer: Variants = {
    hidden: {},

    show: {
        transition: {
            staggerChildren: 0.18,
        },
    },
};

export const storyContainer: Variants = {
    hidden: {},

    show: {
        transition: {
            staggerChildren: .2,
            delayChildren: .9,
        },
    },
};

export const buttonAnimation: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
    },

    show: {
        opacity: 1,
        y: 0,

        transition: {
            duration: .7,
            delay: 1.7,
        },
    },
};