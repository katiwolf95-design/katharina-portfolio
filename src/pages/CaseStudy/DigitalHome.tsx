import { projects } from "../../data/projects";
import portfolio from "../../assets/images//case-studies/digital-home/digital-home-mockup.png";
import { getLanguageFromPath } from "../../i18n/language";
import { translations } from "../../i18n/translations";

export default function DigitalHome() {
    const language = getLanguageFromPath(window.location.pathname);
    const t = translations[language].digitalHome;

    const projectIndex = projects.findIndex(
        (item) => item.slug === "digital-home"
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
                        Concept · UX/UI · Interface Design
                    </p>

                    <h1 className="section-title mb-8 max-w-5xl text-(--text-primary)">
                        Digital Home
                    </h1>

                    <p className="body-text mb-10 max-w-3xl text-(--text-light)">
                        {t.description}
                    </p>

                    <div className="mt-16">
                        <img
                            src={portfolio}
                            alt="Digital Home Portfolio"
                            className="w-full rounded-3xl"
                        />
                    </div>
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
                                    UX/UI Design · Concept
                                </p>
                            </div>

                            <div>
                                <p className="mb-2 text-sm text-(--text-muted)">Type</p>
                                <p className="text-(--text-primary)">
                                    Personal Product / Portfolio Concept
                                </p>
                            </div>

                            <div>
                                <p className="mb-2 text-sm text-(--text-muted)">Focus</p>
                                <p className="text-(--text-primary)">
                                    Responsive Design · Interface · Personal Branding
                                </p>
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
                        {t.challenge}
                    </h2>
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
                                title: "Concept",
                                text: t.approach.concept,
                            },
                            {
                                number: "02",
                                title: "Structure",
                                text: t.approach.structure,
                            },
                            {
                                number: "03",
                                title: "Interface",
                                text: t.approach.interface,
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

            {/* The Solution */}
            <section>
                <div className="mx-auto w-full max-w-300 px-6 py-24 md:px-15 md:py-32">
                    <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
                        <p className="text-sm uppercase tracking-[0.3em] text-(--text-muted)">
                            The Solution
                        </p>

                        <div>
                            <h2 className="mb-8 font-(--font-heading) text-4xl leading-tight text-(--text-primary) md:text-6xl">
                                {t.solutionTitle}
                            </h2>

                            <p className="body-text mt-10 max-w-3xl text-(--text-light)">
                                {t.solutionText}
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
                        {t.outcomeTitle}
                    </h2>

                    <p className="body-text mt-10 max-w-3xl text-(--text-light)">
                        {t.outcomeText}
                    </p>
                </div>
            </section>

            {/* Project Navigation */}
            <section>
                <div className="page-container flex w-full flex-col gap-8 py-16 md:py-24">

                    <a
                        href={`/${language}/projects/${previousProject.slug}`}
                        className="text-(--text-light) transition-opacity hover:opacity-60"
                    >
                        ← {previousProject.title}
                    </a>

                    <a
                        href={`/${language}/projects/${nextProject.slug}`}
                        className="self-start text-(--text-primary) transition-opacity hover:opacity-60"
                    >
                        Next project: {nextProject.title} →
                    </a>

                </div>
            </section>
        </main>
    )
}