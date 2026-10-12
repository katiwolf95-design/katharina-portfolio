import { getLanguageFromPath } from "../../i18n/language";

export default function Footer() {
    const language = getLanguageFromPath(window.location.pathname);

    return (
        <footer className="border-t border-(--border) bg-(--surface)">
            <div className="mx-auto w-ful max-w-300 px-8 py-16 lg:px-2">

                <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">

                    {/** Brand */}
                    <div className="max-w-sm">
                        <p className="mb-3 font-medium text-2xl">
                            Katharina Wolf
                        </p>

                        <p className="text-(--text-light)">
                            {language === "de" ? "Digital Product Designerin" : "Digital Product Designer"}
                            <br />
                            {language === "de" ? "& Fullstack-Entwicklerin" : "& Fullstack Developer"}
                        </p>
                    </div>

                    {/** Navigation */}
                    <nav>
                        <p className="mb-5 text-xs uppercase tracking-[0.3em] text-(--text-muted)">
                            {language === "de" ? "Navigation" : "Navigation"}
                        </p>

                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="#home"
                                    className="transition-opacity hover:opacity-50">
                                        {language === "de" ? "Startseite" : "Home"}
                                    </a>
                            </li>

                            <li>
                                <a
                                    href="#projects"
                                    className="transition-opacity hover:opacity-50">
                                        {language === "de" ? "Projekte" : "Projects"}
                                    </a>
                            </li>

                            <li>
                                <a
                                    href="#about"
                                    className="transition-opacity hover:opacity-50">
                                        {language === "de" ? "Über mich" : "About"}
                                    </a>
                            </li>

                            <li>
                                <a
                                    href="#contact"
                                    className="transition-opacity hover:opacity-50">
                                        {language === "de" ? "Kontakt" : "Contact"}
                                    </a>
                            </li>
                        </ul>
                    </nav>

                    {/** Contact */}
                    <div>
                        <p className="mb-5 text-xs uppercase tracking-[0.3em] text-(--text-muted)">
                            {language === "de" ? "Kontakt" : "Let's talk"}
                        </p>

                        <a
                            href="mailto:kawolf6388@gmail.com"
                            className="
                                font-(--font-heading)
                                text-lg italic
                                transition-opacity
                                hover:opacity-50
                            "
                        >
                            {language === "de" ? "Schreib mir →" : "Get in touch →"}
                        </a>

                        <a 
                            href="https://buymeacoffee.com/kawolf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                mt-5 block text-sm text-(--text-light)
                                transition-opacity hover:opacity-50
                            "
                        >
                            ☕ Buy me a coffee
                        </a>
                    </div>

                </div>

                {/** Bottom */}
                <div className="
                    mt-16 flex flex-col gap-4 border-t border-(--border) pt-6 text-sm
                    text-(--text-light) md:flex-row md:items-center md:justify-between
                    "
                >
                    <p>
                        © 2026 Katharina Wolf
                    </p>

                    <p>
                        Made with curiosity +
                    </p>
                </div>

            </div>
        </footer>
    )
}