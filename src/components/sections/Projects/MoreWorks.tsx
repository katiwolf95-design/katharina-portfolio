import { getLanguageFromPath } from "../../../i18n/language";

export default function MoreWork() {
    const language = getLanguageFromPath(window.location.pathname);

    return (
        <section className="mx-auto w-full max-w-300 px-6 pb-24 md:px-15 md:pb-32">
            <div className="border-t border-(--border) pt-10">
                <p className="mb-4 text-xs uppercase tracking-[0.3em] text-(--text-muted)">
                    {language === "de" ? "Weitere Arbeiten" : "More work"}
                </p>

                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div className="max-w-2xl">
                        <h2 className="mb-4 font-(--font-heading) text-3xl text-(--text-primary) md:text-4xl">
                            {language === "de"
                                ? "Noch mehr meiner Arbeit entdecken."
                                : "Explore more of my work."}
                        </h2>

                        <p className="body-text text-(--text-light)">
                            {language === "de"
                                ? "Weitere Case Studies, interaktive Live-Demos und kreative Projekte findest du in meinem erweiterten Portfolio."
                                : "Discover more case studies, interactive live demos, and creative projects in my extended portfolio."}
                        </p>
                    </div>

                    <a
                        href="https://drive.google.com/file/d/1UrIBsTJhGSOaFjvnCF4z-7i25ARPijzI/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex shrink-0 items-center gap-2 font-medium transition-opacity hover:opacity-50"
                    >
                        {language === "de"
                            ? "Weitere Arbeiten ansehen"
                            : "Explore more projects"}
                        <span aria-hidden="true">↗</span>
                    </a>
                </div>
            </div>
        </section>
    );
}