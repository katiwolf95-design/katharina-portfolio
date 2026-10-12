import { motion } from "motion/react";
import { getLanguageFromPath } from "../../../i18n/language";

export default function SecretNote() {
    const language = getLanguageFromPath(window.location.pathname);

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
                w-[260px]
                md:w-[280px]
                rounded-xl
                border
                border-(--border)
                bg-(--background)
                p-6
                shadow-(--shadow-soft)
            "
        >
            <div className="space-y-4 md:space-y-5 text-center">

                <p className="text-3xl">
                    🦄
                </p>

                <p className="font-medium leading-7">
                    {language === "de"
                        ? "Du hast das Einhorn gefunden!"
                        : "You found the unicorn!"}
                </p>

                <p className="text-base leading-6 text-(--text-light)">
                    {language === "de" ? (
                        <>
                            Neugier ist meistens der Anfang
                            
                            von etwas Schönem.
                        </>
                    ) : (
                        <>
                            Curiosity is often the beginning
                            
                            of something beautiful.
                        </>
                    )}
                </p>

                <p className="text-base leading-6 text-(--text-light)">
                    {language === "de" ? (
                        <>
                            Wenn wir einmal zusammenarbeiten,
                            
                            erwähne einfach das Wort
                        </>
                    ) : (
                        <>
                            If we ever work together,
                            
                            just mention the word
                        </>
                    )}
                </p>

                <p
                    className="
                        text-lg
                        font-semibold
                        tracking-[0.35em]
                        text-(--primary)
                    "
                >
                    {language === "de" ? "EINHORN" : "UNICORN"}
                </p>

                <p className="text-base leading-6 text-(--text-light)">
                    {language === "de" ? (
                        <>
                            Dann wartet eine kleine
                            
                            Überraschung auf dich.
                        </>
                    ) : (
                        <>
                            A little surprise
                            
                            will be waiting for you.
                        </>
                    )}
                </p>

                <p className="leading-7 text-(--text-light) font-(family-name:--font-heading) italic">
                    K. W.
                </p>

            </div>
        </motion.div>
    );
}