import Button from "../../ui/Button";
import { motion } from "motion/react";
import type { Project } from "../../../data/projects";

export default function ProjectViewer({ 
    project, 
}: {
    project: Project;
}) {

    if (project.layout === "left") {
        return (
            <motion.article 
                className="relative ml-0 md:ml-14 h-auto md:h-[clamp(450px,36vw,600px)]"
                initial={{ opacity: 0, }}
                animate={{ opacity: 1, }}
                exit={{ opacity: 0, }}
                transition={{ duration: 0.4, }}
            >

                {/* Titel */}
                <motion.h2 
                    initial={{ opacity: 0, y: 30, }}
                    animate={{ opacity: 1, y: 0, }}
                    transition={{ duration: 0.6 }}
                    className="
                        mb-[clamp(2rem,3vw,3em)] section-title text-(--text-primary) pl-8
                        md:right-0"
                >
                    {project.title}
                </motion.h2>

                {/* Laptop */}
                <div className="
                    relative mx-auto mb-10 w-[85%] max-w-[380px] md:w-[54%] lg:w-[50%]
                    md:absolute md:right-0 md:top-[clamp(0rem,1vw,1rem)] md:mb-0 
                    md:w-[clamp(460px,44vw,850px)] md:max-w-none
                "> 
                    <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full"
                        initial={{ opacity: 0, x: 80, }}
                        animate={{ opacity: 1, x: 0, }}
                        transition={{ duration: 0.5, }}
                    />
                </div>

                {/* Linke Spalte */}
                <div className="relative z-10 max-w-sm md:mt-[clamp(1rem,2vw,2rem)]">

                    {/* Zitat */}
                    <motion.blockquote 
                        className="
                            mb-[clamp(2.5rem,4vw,4rem)] ml-0 border-l-2 border-(--primary-light) 
                            max-w-[280px] pl-4 italic text-(--text-secundary)
                        "
                        initial={{ opacity: 0, y: 15, }}
                        animate={{ opacity: 1, y: 0, }}
                        transition={{ delay: 0.2, duration: 0.5, }}
                    >
                        "{project.subtitle}"
                    </motion.blockquote>

                    {/* Tags */}
                    <ul className="space-y-[clamp(0.5rem,1vw,0.75rem)] ml-[38px] text-(--text-secondary)">
                        {project.tags.map((tag) => (
                            <li key={tag}>• {tag}</li>
                        ))}
                    </ul>

                    {/* Button */}
                    <Button 
                        variant="filled" 
                        className="mt-[clamp(3rem,6vw,6rem)] ml-[38px]"
                        onClick={() => {
                            window.location.href = `/projects/${project.slug}`;
                        }}
                    >
                        → {project.button}
                    </Button>

                </div>
            </motion.article>
            
        );
    }

    if (project.layout === "center") {
        return (
            
                <motion.article 
                    className="relative h-[clamp(450px,36vw,600px)]"
                    initial={{ opacity: 0, }}
                    animate={{ opacity: 1, }}
                    exit={{ opacity: 0, }}
                    transition={{ duration: 0.4, }}
                >

                    <div className="ml-[35%] max-w-[680px]">
                        
                        {/* Titel */}
                        <motion.h2 
                            className="
                                mb-[clamp(2rem,3vw,2.5rem)] section-title 
                                text-(--text-primary)"
                            initial={{ opacity: 0, y: 30, }}
                            animate={{ opacity: 1, y: 0, }}
                            transition={{ duration: 0.5, }}
                        >
                            {project.title}
                        </motion.h2>
                    

                        {/* Linke Spalte */}
                        <div className="mt-8 max-w-sm">

                            {/* Zitat */}
                            <motion.blockquote 
                                className="
                                    mb-[clamp(2.5rem,4vw,4rem)] ml-[-38px] max-w-[280px] 
                                    border-l-2 border-(--primary-light) pl-4 italic 
                                    text-(--text-secundary)"
                                initial={{ opacity: 0, y: 15, }}
                                animate={{ opacity: 1, y: 0, }}
                                transition={{ delay: 0.2, duration: 0.5, }}
                            >
                                "{project.subtitle}"
                            </motion.blockquote>

                            {/* Tags */}
                            <ul className="
                                mb-[clamp(2.5rem,4vw,4rem)] space-y-[clamp(0.5rem,1vw,0.75rem)] 
                                text-(--text-secondary)">
                                {project.tags.map((tag) => (
                                    <li key={tag}>• {tag}</li>
                                ))}
                            </ul>

                            {/* Button */}
                            <Button 
                                variant="filled" 
                                className="mt-24"
                                onClick={() => {
                                    window.location.href = `/projects/${project.slug}`;
                                }}
                            >
                                → {project.button}
                            </Button>
                        </div>
                    </div>
                </motion.article>
            
        );
    }

    if (project.layout === "right") {
        return (
            
            <motion.article 
                className="relative h-auto md:h-[clamp(450px,36vw,600px)]"
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 1,
                }}
                exit={{
                    opacity: 0,
                }}
                transition={{
                    duration: 0.4,
                }}
            >
                
                {/* Bild links */}
                <div className="
                    relative mx-auto mt-10 mb-10 w-[88%] max-w-[420px] 
                    md:absolute md:left-0 md:top-[-3rem] md:mb-0 
                    md:w-[clamp(420px,44vw,600px)] md:max-w-none
                ">
                    <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full"
                        initial={{ opacity: 0, x: 80, }}
                        animate={{ opacity: 1, x: 0, }}
                        transition={{ duration: 0.6, }}
                    />
                </div>

                {/* Rechte Seite */}
                <div className="
                    relative z-10
                    mt-0 max-w-sm
                    md:absolute md:right-0 md:top-[8rem]
                    md:w-[30%] md:max-w-none
                    md:mt-0
                ">
                    {/* Titel */}
                    <motion.h2 
                        className="mb-10 section-title text-(--text-primary)"
                        initial={{ opacity: 0, y: 30, }}
                        animate={{ opacity: 1, y: 0, }}
                        transition={{ duration: 0.5, }}
                    >
                        {project.title}
                    </motion.h2>
                    

                    {/* Zitat */}
                    <motion.blockquote 
                        className="
                            mb-10 ml-0 md:ml-[-38px] max-w-[280px] 
                            border-l-2 border-(--primary-light) 
                            pl-4 italic text-(--text-secundary) md:ml-[-38px]
                        "
                        initial={{ opacity: 0, y: 15, }}
                        animate={{ opacity: 1, y: 0, }}
                        transition={{ delay: 0.2, duration: 0.5, }}
                    >
                        "{project.subtitle}"
                    </motion.blockquote>

                    {/* Tags */}
                    <ul className="
                        mb-0 space-y-3 ml-[38px] 
                        text-(--text-secondary)
                        "
                    >
                        {project.tags.map((tag) => (
                            <li key={tag}>• {tag}</li>
                        ))}
                    </ul>

                    {/* Button */}
                    <Button 
                        variant="filled" 
                        className="mt-16"
                        onClick={() => {
                            window.location.href = `/projects/${project.slug}`;
                        }}
                    >
                        → {project.button}
                    </Button>

                </div>

            </motion.article>
           
        );
    }
}