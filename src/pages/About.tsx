import { useEffect } from "react";

import HorizontalTimeline from "../components/sections/About/Timeline/HorizontalTimeline";
import VerticalTimeline from "../components/sections/About/Timeline/VerticalTimeline";

export default function About() {
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
                Mehr über meinen Weg
            </h1>

            <p className="body-text max-w-3xl text-(--text-light)">
                Mein beruflicher Weg war nie eine gerade Linie.
            </p>

            <p className="body-text mt-6 max-w-3xl text-(--text-light)">
                Über die Jahre habe ich unterschiedliche Dinge ausprobiert, eigene 
                Projekte gestartet, neue Bereiche kennengelernt und dabei immer
                wieder neue F#higkeiten entwickelt. Manche Wege haben funktioniert,
                andere nicht – aber jeder hat zu dem beigetragen, was ich heute kann
                und wie ich an Projekte herangehe.
            </p>

            <p className="body-text mt-6 max-w-3xl text-(--text-light)">
                Aus Design und Kommunikation wurden mit der Zeit Marketing, ein 
                tieferes Verständnis für Menschen und schließlich Technologie und
                Systeme. Heute verbinde ich diese Perspektiven , um digitale Produkte 
                nicht nur zu gestalten, sondern sie auch zu verstehen, zu
                strukturieren und selbst unzusetzen.
            </p>

        </section>

        {/* Timeline */}
        <HorizontalTimeline />
        <VerticalTimeline />

        {/* Was ich heute verbinde */}
        <section className="mx-auto w-full max-w-300 px-6 py-24 md:px-15 md:py-32">
            <div className="max-w-4xl">
                <p className="mb-6 text-sm uppercase tracking-[0.3em] text-(--text-muted)">
                    Was ich heute verbinde
                </p>

                <h2 className="section-title mb-16 text-(--text-primary)">
                    Vier Perspektiven, die heute zusammenkommen.
                </h2>
            </div>

            <div className="grid gap-10 md:grid-cols-2">
                <div>
                    <h3 className="mb-4 text-xl font-semibold text-(--text-primary)">
                        Design
                    </h3>
                    <p className="body-text text-(--text-light)">
                        Ich denke visuell und konzeptionell. Für mich soll Design nicht
                        nur gut aussehen, sondern Inhalte verständlicher machen,
                        Orientierung geben und Menschen durch ein Produkt führen.
                    </p>
                </div>

                <div>
                    <h3 className="mb-4 text-xl font-semibold text-(--text-primary)">
                        Menschen
                    </h3>
                    <p className="body-text text-(--text-light)">
                        Mich interessiert, was Menschen brauchen, was sie motiviert und
                        wie sie sich in digitalen Produkten bewegen. Gute Lösungen
                        entstehen für mich dort, wo Gestaltung und menschliches Verhalten
                        zusammengedacht werden.
                    </p>
                </div>

                <div>
                    <h3 className="mb-4 text-xl font-semibold text-(--text-primary)">
                        Strategie
                    </h3>
                    <p className="body-text text-(--text-light)">
                        Ich versuche, nicht nur einzelne Aufgaben zu sehen, sondern das
                        größere System dahinter: Ziele, Zusammenhänge, Prioritäten und
                        die Frage, was tatsächlich gebraucht wird.
                    </p>
                </div>

                <div>
                    <h3 className="mb-4 text-xl font-semibold text-(--text-primary)">
                        Technologie
                    </h3>
                    <p className="body-text text-(--text-light)">
                        Heute kann ich Gestaltung und technische Umsetzung miteinander
                        verbinden. Dadurch kann ich nicht nur Ideen entwickeln, sondern
                        auch verstehen, wie sie technisch funktionieren und selbst an
                        ihrer Umsetzung arbeiten.
                    </p>
                </div>
            </div>
        </section>
    </main>
  );
}