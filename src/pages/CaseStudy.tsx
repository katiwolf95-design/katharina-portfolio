import { projects } from "../data/projects";

type CaseStudyProps = {
  slug: string;
};

export default function CaseStudy({ slug }: CaseStudyProps) {
  const projectIndex = projects.findIndex((item) => item.slug === slug);
  const project = projects[projectIndex];

  if (!project) {
    return (
      <main className="min-h-screen">
        <div className="mx-auto w-full max-w-300 px-6 py-32 md:px-15">
          <h1 className="section-title">Projekt nicht gefunden</h1>
        </div>
      </main>
    );
  }

  const previousProject =
    projects[(projectIndex - 1 + projects.length) % projects.length];

  const nextProject = 
    projects[(projectIndex + 1) % projects.length];

  return (
    <main>
        {/* =========================
          Hero
        ========================= */}
        <section className="relative">
            <div className="mx-auto w-full max-w-300 px-6 py-24 md:px-15 md:py-32">
                <p className="mb-6 text-sm uppercase tracking-[0.3em] text-(--text-muted)">
                    Case Study
                </p>

                <h1 className="section-title mb-8 max-w-4xl text-(--text-primary)">
                    {project.title}
                </h1>

                <p className="body-text mb-10 max-w-2xl text-(--text-light)">
                    {project.subtitle}
                </p>

                <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-(--text-secondary)">
                    {project.tags.map((tag) => (
                        <li key={tag}>• {tag}</li>
                    ))}
                </ul>

                {project.image && (
                    <div className="mt-16 overflow-hidden">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full object-cover"
                        />
                    </div>
                )}
            </div>
        </section>

        {/* =========================
          Overview
        ========================= */}

        <section>
            <div className="mx-auto w-full max-w-300 px-6 py-24 md:px-15 md:py-32">
                <div className="grid gap-12 md:grid-cols-[1fr_2fr]">

                    <p className="text-sm uppercase tracking-[0.3em] text-(--text-muted)">
                        Overview
                    </p>

                    <div>
                        <p className="body-text max-w-3xl text-(--text-light)">
                            Projektinformationen und Kontext werden hier später ergänzt.
                        </p>
                    </div>

                </div>
            </div>
        </section>

        {/* =========================
          Challenge
        ========================= */}

        <section>
            <div className="mx-auto w-full max-w-300 px-6 py-24 md:px-15 md:py-32">

            <p className="mb-8 text-sm uppercase tracking-[0.3em] text-(--text-muted)">
                The Challenge
            </p>

            <h2 className="max-w-4xl font-(--font-heading) text-4xl leading-tight text-(--text-primary) md:text-6xl">
                Die Herausforderung wird hier später beschrieben.
            </h2>

            </div>
        </section>

        {/* =========================
          Approach
        ========================= */}

        <section>
            <div className="mx-auto w-full max-w-300 px-6 py-24 md:px-15 md:py-32">

                <p className="mb-10 text-sm uppercase tracking-[0.3em] text-(--text-muted)">
                    The Approach
                </p>

                <div className="grid gap-12 md:grid-cols-4">

                    {[1, 2, 3, 4] .map((step) => (
                        <div key={step}>

                            <span className="mb-4 block text-sm text-(--text-muted)">
                                0{step}
                            </span>

                            <h3 className="mb-4 text-xl font-medium text-(--text-primary)">
                                Step {step}
                            </h3>

                            <p className="text-(--text-light)">
                                Inhalt wird später ergänzt.
                            </p>

                        </div>
                    ))}
                </div>

            </div>
        </section>

        {/* =========================
          Selected Work
        ========================= */}

        <section>
            <div className="mx-auto w-full max-w-300 px-6 py-24 md:px-15 md:py-32">

                <p className="mb-12 text-sm uppercase tracking-[0.3em] text-(--text-muted)">
                    Selected Work
                </p>

                <div className="min-h-[400px] rouded-[2rem] bg-(--surface) p-8 md:p-16">

                    <p className="body-text text-center text-(--text-light)">
                        Projektvisuals werden hier später ergänzt.
                    </p>

                </div>
            </div>
        </section>

        {/* =========================
          Solution
        ========================= */}

        <section>
            <div className="mx-auto w-full max-w-300 px-6 py-24 md:px-15 md:py-32">

                <div className="grid gap-12 md:grid-cols-[1fr_2fr]">

                    <p className="text-sm uppercase tracking-[0.3em] text-(--text-muted)">
                        The Solution
                    </p>

                    <div>
                        <h2 className="mb-8 font-(--font-heading) text-4xl leading-tight text-(--text-primary) md:text-6xl">
                            Die Lösung wird hier später beschrieben.
                        </h2>

                        <p className="body-text max-w-3xl text-(--text-light)">
                            Details zu Designentscheidungen, Umsetzung und Ergebnis werden 
                            ergänzt, sobald die Projektdaten vorliegen.
                        </p>
                    </div>

                </div>

            </div>
        </section>

        {/* =========================
          Outcome
        ========================= */}

        <section>
            <div className="mx-auto w-full max-w-300 px-6 py-24 md:px-15 md:py-32">

                <p className="mb-8 text-sm uppercase tracking-[0.3em] text-(--text-muted)">
                    Outcome
                </p>

                <h2 className="max-w-4xl font-(--font-heading) text-4xl leading-tight text-(--text-primary) md:text-6xl">
                    Das Ergebnis wird hier später beschrieben.
                </h2>

            </div>
        </section>

        {/* =========================
          Project Navigation
        ========================= */}

        <section>
            <div className="mx-auto flex w-full max-w-300 flex-col gap-8 px-6 py-16 md:px-15 md:py-24">

                <a
                    href={` /projects/${previousProject.slug}`}
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
  );
}