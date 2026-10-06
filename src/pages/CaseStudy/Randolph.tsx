import { projects } from "../../data/projects";
import redesign from "../../assets/images/case-studies/randolph/randolph-redesign.png";

export default function Randolph() {
    const projectIndex = projects.findIndex(
        (item) => item.slug === "randolph"
    );

    const previousProject =
        projects[(projectIndex - 1 + projects.length) % projects.length];

    const nextProject =
        projects[(projectIndex + 1) % projects.length];

    return (
        <main>
            {/* Hero */}
            <section className="relative">
                <div className="mx-auto w-full max-w-300 px-6 py-24 md:px-15 md:py-32">
                    <p className="mb-6 text-sm uppercase tracking-[0.3em] text-(--text-muted)">
                        Website Redesign · UX/UI · Development
                    </p>

                    <h1 className="section-title mb-8 max-w-5xl text-(--text-primary)">
                        Randolph Art
                    </h1>

                    <p className="body-text mb-10 max-w-3xl text-(--text-light)">
                        Redesign und digitale Neupositionierung der Website des Künstlers Randolph – 
                        mit Fokus auf eine klare Präsentation seiner Arbeiten, Ausstellungen und 
                        künstlerischen Identität.
                    </p>

                    {/* <div className="mt-16">
                        <img
                            src={redesign}
                            alt="Randolph Art Website Redesign"
                            className="w-full rounded-3xl"
                        />
                    </div> */}
                </div>
            </section>

            {/* Overview */}
            <section>
                <div className="mx-auto w-full max-w-300 px-6 py-24 md:px-15 md:py-32">
                    <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
                        <p className="text-sm uppercase tracking-[0.3em] text-(--text-muted)">
                            Overview
                        </p>

                        <div className="grid gap-8 sm:grid-cols-2">
                            <div>
                                <p className="mb-2 text-sm text-(--text-muted)">Role</p>
                                <p className="text-(--text-primary)">
                                    UX/UI Design & Development
                                </p>
                            </div>

                            <div>
                                <p className="mb-2 text-sm text-(--text-muted)">Type</p>
                                <p className="text-(--text-primary)">
                                    Website Redesign
                                </p>
                            </div>

                            <div>
                                <p className="mb-2 text-sm text-(--text-muted)">Stack</p>
                                <p className="text-(--text-primary)">
                                    React · TypeScript · Tailwind · Strapi
                                </p>
                            </div>

                            <div>
                                <p className="mb-2 text-sm text-(--text-muted)">Focus</p>
                                <p className="text-(--text-primary)">Art Direction · UX · Content Structure</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Challenge */}
            <section>
                <div className="mx-auto w-full max-w-300 px-6 py-24 md:px-15 md:py-32">
                    <p className="mb-8 text-sm uppercase tracking-[0.3em] text-(--text-muted)">
                        The Challenge
                    </p>

                    <h2 className="max-w-5xl font-(--font-heading) text-4xl leading-tight text-(--text-primary) md:text-6xl">
                        Eine künstlerische Identität digital klar und eigenständig präsentieren.
                    </h2>

                    <p className="body-text mt-10 max-w-3xl text-(--text-light)">
                        Die bestehende Website sollte neu strukturiert und visuell weiterentwickelt
                        werden, um Arbeiten, Ausstellungen und Informationen über den Künstler
                        übersichtlicher und stärker aus der visuellen Identität heraus zu präsentieren.
                    </p>
                </div>
            </section>

            {/* Approach */}
            <section>
                <div className="mx-auto w-full max-w-300 px-6 py-24 md:px-15 md:py-32">
                    <p className="mb-10 text-sm uppercase tracking-[0.3em] text-(--text-muted)">
                        The Approach
                    </p>

                    <div className="grid gap-12 md:grid-cols-4">
                        {[
                            {
                                number: "01",
                                title: "Analyse",
                                text: "Bestehende Inhalte, Seitenstruktur und visuelle Identität analysieren.",
                            },
                            {
                                number: "02",
                                title: "Struktur",
                                text: "Inhalte und Navigation neu ordnen und eine klarere Nutzerführung entwickeln.",
                            },
                            {
                                number: "03",
                                title: "Visual Design",
                                text: "Eine visuelle Sprache entwickeln, die die Kunstwerke und die Persönlichkeit des Künstlers unterstützt.",
                            },
                            {
                                number: "04",
                                title: "Development",
                                text: "Das Redesign als responsive Website mit React, Tailwind und Strapi umsetzen.",
                            },
                        ].map((step) => (
                            <div key={step.number}>
                                <span className="mb-4 block text-sm text-(--text-muted)">
                                    {step.number}
                                </span>

                                <h3 className="mb-4 text-xl font-medium text-(--text-primary)">
                                    {step.title}
                                </h3>

                                <p className="text-(--text-light)">
                                    {step.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Selected Work */}
            <section>
                <div className="mx-auto w-full max-w-300 px-6 py-24 md:px-15 md:py-32">

                    <div className="mb-12">
                        <p className="mb-3 text-sm uppercase tracking-[0.2em] text-(--primary)">
                            Selected Work
                        </p>

                        {/* <h2 className="max-w-5xl font-(--font-heading) text-4xl leading-tight text-(--text-primary) md:text-6xl">
                            Eine neue digitale Bühne für Randolphs Arbeiten.
                        </h2>

                        <p className="mt-4 max-w-3xl text-lg text-(--text-light)">
                            Die neue Website verbindet eine klare Informationsstruktur
                            mit einer visuellen Gestaltung, die die Kunstwerke in den
                            Mittelpunkt stellt.
                        </p> */}
                    </div>

                    <img
                        src={redesign}
                        alt="Randolph Art Website Redesign"
                        className="w-full rounded-3xl"
                    />

                </div>
            </section>

            {/* The Solution */}
            <section>
                <div className="mx-auto w-full max-w-300 px-6 py-24 md:px-15 md:py-32">
                    <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
                        <p className="text-sm uppercase tracking-[0.3em] text-(--text-muted)">
                        The Solution
                        </p>

                        <div>
                            <h2 className="mb-8 font-(--font-heading) text-4xl leading-tight text-(--text-primary) md:text-6xl">
                                Eine digitale Bühne für die Kunst.
                            </h2>

                            <p className="body-text max-w-3xl text-(--text-light)">
                                Das Redesign verbindet eine reduzierte Informationsarchitektur mit einer visuellen 
                                Gestaltung, die den Arbeiten Raum gibt und gleichzeitig einen klaren Zugang zu 
                                Ausstellungen, Künstlerprofil und weiteren Inhalten schafft.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Outcome */}
            <section>
                <div className="mx-auto w-full max-w-300 px-6 py-24 md:px-15 md:py-32">
                    <p className="mb-8 text-sm uppercase tracking-[0.3em] text-(--text-muted)">
                        Outcome
                    </p>

                    <h2 className="max-w-5xl font-(--font-heading) text-4xl leading-tight text-(--text-primary) md:text-6xl">
                        Ein ausgearbeitetes Website-Redesign als visuelles und technisches Konzept.
                    </h2>

                    <p className="body-text mt-10 max-w-3xl text-(--text-light)">
                        Das Projekt zeigt, wie eine bestehende Künstler-Website strukturell, visuell und 
                        technisch neu gedacht und als responsive Webanwendung umgesetzt werden kann.
                    </p>
                </div>
            </section>

            {/* Project Navigation */}
            <section>
                <div className="page-container flex w-full flex-col gap-8 py-16 md:py-24">

                    <a
                        href={`/projects/${previousProject.slug}`}
                        className="text-(--text-light) transition-opacity hover:opacity-60"
                    >
                        ← {previousProject.title}
                    </a>

                    <a
                        href={`/projects/${nextProject.slug}`}
                        className="self-start text-(--text-primary) transition-opacity hover:opacity-60"
                    >
                        Next project: {nextProject.title} →
                    </a>

                </div>
            </section>
        </main>
    )
}