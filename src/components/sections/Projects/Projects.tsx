import { useState } from "react";
import Container from "../../layout/Container";
import ProjectViewer from "./ProjectViewer";
import ProjectNavigation from "./ProjectNavigation";
import { AnimatePresence } from "motion/react";
import Button from "../../ui/Button";


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
                {/* =========================
                    DESKTOP / TABLET
                ========================== */}
                <div className="hidden md:block relative top-0 py-16 mb-30">

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

                {/* =========================
                    MOBILE
                ========================== */}
                <div className="md:hidden page-container py-12">

                    {/* Header */}
                    <div className="mb-10 flex items-center justify-between">

                        <h2 className="text-sm uppercase tracking-[0.25em] text-(--text-muted)">
                            Selected Projects
                        </h2>

                        <span className="text-xs tracking-[0.25em] text-(--text-muted)">
                            Swipe →
                        </span>

                    </div>

                    {/* Divider */}
                    <div className="mb-10 flex items-center">
                        <span className="h-3 w-3 shrink-0 rounded-full bg-(--border)" />

                        <div
                            className="h-[2px] flex-1"
                            style={{
                                background:
                                    "linear-gradient(to right, var(--border) 0%, transparent 100%)",
                            }}
                        />
                    </div>

                    {/* Horizontal project scroll */}
                    <div
                        className="
                            
                            flex
                            snap-x
                            snap-mandatory
                            gap-15
                            overflow-x-auto
                            px-6
                            pb-6
                            [scrollbar-width:none]
                            [&::-webkit-scrollbar]:hidden
                        "
                    >
                        {projects.map((project) => (
                            <article
                                key={project.id}
                                className="
                                    w-[82vw]
                                    max-w-[420px]
                                    shrink-0
                                    snap-start
                                "
                            >

                                {/* Image */}
                                <div
                                    className="
                                        mb-7
                                        flex
                                        min-h-[220px]
                                        items-center
                                        justify-center
                                        overflow-hidden
                                        rounded-2xl
                                        bg-(--background-secondary)
                                    "
                                >
                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full"
                                        />
                                    ) : (
                                        <div className="px-8 text-center">
                                            <span className="text-xs uppercase tracking-[0.25em] text-(--text-muted)">
                                                
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <h3 className="mb-4 text-3xl font-(--font-heading) text-(--text-primary)">
                                    {project.title}
                                </h3>

                                <blockquote
                                    className="
                                        mb-6
                                        max-w-[300px]
                                        border-l-2
                                        border-(--primary-light)
                                        pl-4
                                        italic
                                        text-(--text-secondary)
                                    "
                                >
                                    "{project.subtitle}"
                                </blockquote>

                                {/* Tags */}
                                <ul className="mb-8 space-y-2 text-sm text-(--text-secondary)">
                                    {project.tags.map((tag) => (
                                        <li key={tag}>• {tag}</li>
                                    ))}
                                </ul>

                                {/* Button */}
                                <Button
                                    variant="filled" 
                                    className="
                                        text-sm w-full
                                        tracking-[0.08em]
                                        text-(--text-primary)
                                        transition-opacity
                                        hover:opacity-60
                                    "
                                    onClick={() => {
                                        window.location.href =
                                            `/projects/${project.slug}`;
                                    }}
                                >
                                    → {project.button}
                                </Button>

                            </article>
                        ))}
                    </div>

                </div>
            </Container>
        </section>
    );
}