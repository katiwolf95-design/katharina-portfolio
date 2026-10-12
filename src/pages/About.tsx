import { useEffect } from "react";

import HorizontalTimeline from "../components/sections/About/Timeline/HorizontalTimeline";
import VerticalTimeline from "../components/sections/About/Timeline/VerticalTimeline";

import { getLanguageFromPath } from "../i18n/language";
import { translations } from "../i18n/translations";

export default function About() {
  const language = getLanguageFromPath(window.location.pathname);
  const t = translations[language].aboutPage;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen">
        {/* Intro */}
        <section className="mx-auto w-full max-w-300 px-6 py-24 md:px-15 md:py-32">

            <p className="mb-6 text-sm uppercase tracking-[0.3em] text-(--text-muted)">
                About
            </p>

            <h1 className="section-title mb-10 max-w-4xl text-(--text-primary)">
                {t.title}
            </h1>

            <p className="body-text max-w-3xl text-(--text-light)">
                {t.intro}
            </p>

            <p className="body-text mt-6 max-w-3xl text-(--text-light)">
                {t.story1}
            </p>

            <p className="body-text mt-6 max-w-3xl text-(--text-light)">
                {t.story2}
            </p>

        </section>

        {/* Timeline */}
        <HorizontalTimeline />
        <VerticalTimeline />

        {/* Was ich heute verbinde */}
        <section className="mx-auto w-full max-w-300 px-6 py-24 md:px-15 md:py-32">
            <div className="max-w-4xl">
                <p className="mb-6 text-sm uppercase tracking-[0.3em] text-(--text-muted)">
                    {t.sectionLabel}
                </p>

                <h2 className="mb-16 text-4xl md:text-6xl font-(--font-heading) leading-tight text-(--text-primary)">
                    {t.sectionTitle}
                </h2>
            </div>

            <div className="grid gap-10 md:grid-cols-2">
                <div>
                    <h3 className="mb-4 text-xl font-semibold text-(--text-primary)">
                        Design
                    </h3>
                    <p className="body-text text-(--text-light)">
                        {t.perspectives.design}
                    </p>
                </div>

                <div>
                    <h3 className="mb-4 text-xl font-semibold text-(--text-primary)">
                        {language === "de" ? "Menschen" : "People"}
                    </h3>
                    <p className="body-text text-(--text-light)">
                        {t.perspectives.people}
                    </p>
                </div>

                <div>
                    <h3 className="mb-4 text-xl font-semibold text-(--text-primary)">
                        {language === "de" ? "Strategie" : "Strategy"}
                    </h3>
                    <p className="body-text text-(--text-light)">
                        {t.perspectives.strategy}
                    </p>
                </div>

                <div>
                    <h3 className="mb-4 text-xl font-semibold text-(--text-primary)">
                        {language === "de" ? "Technologie" : "Technology"}
                    </h3>
                    <p className="body-text text-(--text-light)">
                        {t.perspectives.technology}
                    </p>
                </div>
            </div>
        </section>
    </main>
  );
}