import Container from "../../layout/Container";
import AnimatedWaves from "./AnimatedWaves";
import Button from "../../ui/Button";
import { motion } from "motion/react";
import { 
    fadeUp, fadeUpDelayed, 
    staggerContainer,
    storyContainer,
    buttonAnimation, 
} from "../../../data/about.animations";

export default function About() {
    return (
        <motion.section 
            id="about"
            initial="hidden"
            whileInView="show"
            viewport={{
                once: false,
                amount: 0.25,
            }}
            variants={staggerContainer}
            className="
                relative scroll-mt-24 overflow-hidden bg-background 
                pt-[clamp(7rem,12vw,12rem)]
                pb-[clamp(7rem,12vw,12rem)]
                mb-[clamp(5rem,8vw,8rem)]
            "
        >
            {/* Decorative Waves */}
            <AnimatedWaves position="top" />

            <Container>
                <div className="relative z-10 mx-auto flex flex-col items-center">

                    <header className="w-full max-w-[575px]">
                        {/* Headline */}
                        <motion.h2 
                            variants={fadeUp}
                            className="
                                text-left text-[clamp(2rem,2vw,3rem)] font-(--font-heading) text-(--text) 
                                leading-tight tracking-[-0.02em]
                            "
                        >
                            Ich wollte irgendwann
                            <br />

                            nicht mehr{" "}
                            <span className="text-(--primary)">nur gestalten.</span>
                        </motion.h2>

                        {/* highlight */}
                        <motion.h3 
                            variants={fadeUpDelayed}
                            className="
                                mt-6 font-(--font-heading) text-right text-[clamp(1.75rem,2vw,2.5rem)] 
                                text-(--primary)
                            "
                        >
                            Ich wollte verstehen.
                        </motion.h3>
                    </header>

                    {/* Story */}
                    <div 
                        
                        className="mt-[clamp(3rem,5vw,5rem)] flex max-w-[575px]"
                    >
                        <motion.div 
                            initial={{ scaleY: 0, }}
                            whileInView={{ scaleY: 1, }}
                            transition={{ delay: .8, duration: .8, }}
                            style={{ originY: 0, }}
                            className="mr-8 w-[3px] shrink-0 rounded-full bg-(--border)" 
                        />

                        <motion.div 
                            variants={storyContainer}                            
                            className="
                                space-y-[clamp(1rem,1.5vw,1.5em)] 
                                text-[clamp(1rem,1.25vw,1.125em)] 
                                leading-[1.8] text-(--text-light)
                            "
                        >
                            <motion.p variants={fadeUp}>
                                Früher habe ich digitale Produkte gestaltet.
                                Irgendwann wollte ich wissen,
                                warum manche Produkte funktionieren
                                und andere nicht.
                            </motion.p>

                            <motion.p variants={fadeUp}>
                                Deshalb bin ich den Weg
                                in die Entwicklung gegangen.
                            </motion.p>

                            <motion.p variants={fadeUp}>
                                Heute entwickle ich digitale Produkte,
                                die Design, Strategie und Entwicklung
                                zu einem Ganzen verbinden.
                            </motion.p>

                        </motion.div>
                    </div>

                    {/* CTA */}
                    <motion.div 
                        variants={buttonAnimation}
                        className="mt-16 flex w-full max-w-[475px] justify-end"
                    >
                        <a href="/about">
                            <Button variant="outline">
                                Mehr über meinen Weg →
                            </Button>
                        </a>
                    </motion.div>
                </div>
            </Container>

            {/* Bottom Waves */}
            <AnimatedWaves position="bottom" />
        </motion.section>
    );
}