import { motion } from "motion/react";


export default function SecretNote() {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 20,
                scale: 0.95,
            }}
            animate={{
                opacity: 1,
                y: 0,
                scale: 1,
            }}
            exit={{
                opacity: 0,
                y: 20,
                scale: 0.95,
            }}
            transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
            }}
            className="
                absolute -top-62
                md:-top-2
                right-2
                z-0
                w-[280px]
                rounded-xl
                border
                border-(--border)
                bg-(--background)
                p-6
                shadow-(--shadow-soft)
            "
        >
            <div className="space-y-5 text-center">

                <p className="text-3xl">
                    🦄
                </p>

                <p className="font-medium leading-7">
                    Du hast das Einhorn gefunden!
                </p>

                <p className="leading-7 text-(--text-light)">
                    Neugier ist meistens der Anfang
                    <br />
                    von etwas Schönem.
                </p>

                <p className="leading-7 text-(--text-light)">
                    Wenn wir einmal zusammenarbeiten,
                    <br />
                    erwähne einfach das Wort
                </p>

                <p
                    className="
                        text-lg
                        font-semibold
                        tracking-[0.35em]
                        text-(--primary)
                    "
                >
                    EINHORN
                </p>

                <p className="leading-7 text-(--text-light)">
                    Dann wartet eine kleine 
                    <br />
                    Überraschung auf dich.
                </p>

                <p className="leading-7 text-(--text-light) font-(family-name:--font-heading) italic">
                    K. W.
                </p>

            </div>
        </motion.div>
    );
}