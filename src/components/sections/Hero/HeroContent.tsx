import Button from "../../ui/Button";
import { motion } from "motion/react";
import { fadeUp, greeting, staggerContainer } from "../../../data/hero.animations";

export default function HeroContent() {
  return (
    <motion.div 
        className="max-auto max-w-md md:max-w-[420px] lg:mx-0 max-w-[500px]"
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
            Hallo.
        </motion.h1>

        <motion.p 
            variants={fadeUp}
            className="hero-name mb-8">
            Ich bin Katharina.
        </motion.p>

        <motion.h2 
            variants={fadeUp}
            className="hero-title mb-px">
            Fullstack-Entwicklerin & 
        </motion.h2>

        <motion.h2 
            variants={fadeUp}
            className="hero-subtitle mb-12">
            Digital Product Designerin.
        </motion.h2>

        <motion.p 
            variants={fadeUp}
            className="hero-description mb-12 lg:mb-20">
            Ich entwickle digitale Produkte, 
            die Technik, Design und Menschen 
            zusammenbringen.
        </motion.p>
        
        <motion.div 
            variants={fadeUp}
            className="flex justify-center sm:justify-start"
        >
            <a href="#projects">
                <Button variant="outline">
                    Projekte entdecken →
                </Button>
            </a>
        </motion.div>

    </motion.div>
  );
}