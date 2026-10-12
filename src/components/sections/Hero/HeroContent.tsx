import Button from "../../ui/Button";
import { motion } from "motion/react";
import { fadeUp, greeting, staggerContainer } from "../../../data/hero.animations";
import { getLanguageFromPath } from "../../../i18n/language";
import { translations } from "../../../i18n/translations";

export default function HeroContent() {
  const language = getLanguageFromPath(window.location.pathname);
  const t = translations[language].hero;

  return (
    <motion.div 
        className="mx-auto md:max-w-[420px] lg:mx-0 max-w-[500px]"
        variants={staggerContainer}
        initial="hidden"
        animate="show"
    >
        <motion.p 
            variants={fadeUp}
            className="hero-kicker mb-12">
            • Welcome to my Digital Home.
        </motion.p>

        <motion.h1 
            variants={greeting}
            className="hero-greeting mb-6">
            {t.greeting}
        </motion.h1>

        <motion.p 
            variants={fadeUp}
            className="hero-name mb-8">
            {t.name}
        </motion.p>

        <motion.h2 
            variants={fadeUp}
            className="hero-title mb-px">
            {t.title}
        </motion.h2>

        <motion.h2 
            variants={fadeUp}
            className="hero-subtitle mb-12">
            {t.subtitle}
        </motion.h2>

        <motion.p 
            variants={fadeUp}
            className="hero-description mb-12 lg:mb-20">
            {t.description}.
        </motion.p>
        
        <motion.div 
            variants={fadeUp}
            className="flex justify-center sm:justify-start"
        >
            <a href="#projects">
                <Button variant="outline">
                    {t.cta}
                </Button>
            </a>
        </motion.div>

    </motion.div>
  );
}