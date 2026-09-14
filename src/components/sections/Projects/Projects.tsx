import { useState } from "react";
import Container from "../../layout/Container";
import ProjectViewer from "./ProjectViewer";
import ProjectNavigation from "./ProjectNavigation";
import { AnimatePresence } from "motion/react";


import { projects } from "../../../data/projects";

export default function Projects() {
    const [currentProject, setCurrentProject] = useState(0);

    /* const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (latest < 0.33) {
            setCurrentProject(0);
        } else if (latest < 0.66) {
            setCurrentProject(1);
        } else {
            setCurrentProject(2);
        }
    }); */

    const nextProject = () => {
        setCurrentProject((prev) => 
            (prev + 1) % projects.length
        );
    };

    const previousProject = () => {
        setCurrentProject((prev) =>
            (prev - 1 + projects.length) % projects.length
        );
    };

    return (
        <section 
            id="projects" 
            className="relative scroll-mt-24"
        >
            <Container>
                <div className="relative top-0 py-16 mb-30">

                    {/* Header */}
                    <div className="mb-12 flex items-center justify-between">

                        <h2 className="text-sm uppercase tracking-[0.3em] text-(--text-muted)">
                            Selected Projects
                        </h2>

                        
                        {/* Navigation */}
                        <ProjectNavigation
                            current={currentProject}
                            total={projects.length}
                            onNext={nextProject}
                            onPrevious={previousProject}
                        />

                    </div>

                    {/* Divider */}
                    <div className="mb-16 flex items-center">
                        <span className="h-3 w-3 rounded-full bg-(--border)" />

                        <div
                            className="h-[2px] flex-1"
                            style={{
                                background:
                                    "linear-gradient(to right, var(--border) 0%, transparent 100%)",
                            }}
                        />
                    </div>

                    <AnimatePresence mode="wait">
                        <ProjectViewer
                            key={projects[currentProject].id}
                            project={projects[currentProject]}
                        />
                    </AnimatePresence>

                </div>
            </Container>
        </section>
    );
}