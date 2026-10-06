import { projects } from "../../data/projects";
import mockup from "../../assets/images/case-studies/solinea-crm/mockup-crm.png";
import dashboard from "../../assets/images/case-studies/solinea-crm/crm-dashboard.png";
import inquiries from "../../assets/images/case-studies/solinea-crm/inquiries.png";
import inquiriesEdit from "../../assets/images/case-studies/solinea-crm/inquiries-edit.png";
import projectsPreview from "../../assets/images/case-studies/solinea-crm/crm-projects.png";
import projectsEdit from "../../assets/images/case-studies/solinea-crm/projects-edit.png";
import customerDetail from "../../assets/images/case-studies/solinea-crm/customer-detail.png";
import customers from "../../assets/images/case-studies/solinea-crm/customers.png";


export default function SolineaCRM() {
    const projectIndex = projects.findIndex(
        (item) => item.slug === "freelancer-crm"
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
                        Case Study · Product Design · Fullstack
                    </p>

                    <h1 className="section-title mb-8 max-w-5xl text-(--text-primary)">
                        Solinea CRM
                    </h1>

                    <p className="body-text mb-10 max-w-3xl text-(--text-light)">
                        Ein CRM für Freelancer, das Kinden, Projekte und Anfragen
                        zusammenführt – klar, fokusiert und ohne unnötige Komplexität.
                    </p>

                    <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-(--text-secondary)">
                        <li>• Product Design</li>
                        <li>• UX / UI</li>
                        <li>• Fullstack Development</li>
                        <li>• SaaS</li>
                    </ul>

                    <div className="mt-16">
                        <img
                            src={mockup}
                            alt="Solinea CRM Dashboard auf einem MacBook"
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
                                    Product Design & Fullstack Development
                                </p>
                            </div>

                            <div>
                                <p className="mb-2 text-sm text-(--text-muted)">Type</p>
                                <p className="text-(--text-primary)">
                                    Personal Product / SaaS
                                </p>
                            </div>

                            <div>
                                <p className="mb-2 text-sm text-(--text-muted)">Stack</p>
                                <p className="text-(--text-primary)">
                                    Next.js · TypeScript · Prisma · PostgreSQL
                                </p>
                            </div>

                            <div>
                                <p className="mb-2 text-sm text-(--text-muted)">Status</p>
                                <p className="text-(--text-primary)">MVP</p>
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
                        Freelancer brauchen Struktur – aber kein weiteres kompliziertes
                        System.
                    </h2>

                    <p className="body-text mt-10 max-w-3xl text-(--text-light)">
                        Solinea CRM entstand aus der Idee, ein digitales Werkzeug zu
                        entwickeln, das die wichtigsten Bereiche der täglichen
                        Freelancer-Arbeit an einem Ort bündelt.
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
                                title: "Problem",
                                text: "Die Anforderungen und Herausforderungen eines Freelance-Workflows verstehen.",
                            },
                            {
                                number: "02",
                                title: "Structure",
                                text: "Informationen, Funktionen und Nutzerwege in eine klare Struktur bringen.",
                            },
                            {
                                number: "03",
                                title: "Interface",
                                text: "Eine reduzierte und verständliche Oberfläche entwickeln.",
                            },
                            {
                                number: "04",
                                title: "Implementation",
                                text: "Das Produkt als funktionierenden Fullstack-MVP umsetzen.",
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
                        <p className="text-sm uppercase tracking-[0.2em] text-(--primary) mb-3">
                            Ausgewählte Ansichten
                        </p>

                        <h2 className="max-w-5xl font-(--font-heading) text-4xl leading-tight text-(--text-primary) md:text-6xl">
                            Die wichtigsten Bereiche des CRM im Überblick.
                        </h2>

                        <p className="mt-4 text-lg text-gray-600">
                            Von der zentralen Dashboard-Ansicht über Anfragen und Projekte
                            bis zur Kundenverwaltung.
                        </p>
                    </div>

                    {/* Dashboard */}
                    <div className="mb-20">
                        <div className="mb-6">
                            <h3 className="text-2xl font-semibold">
                                01 — Dashboard
                            </h3>
                            <p className="mt-2 text-gray-600">
                                Eine zentrale Übersicht über Kunden, Projekte, Anfragen und  Umsatz.
                            </p>
                        </div>

                        <img
                            src={dashboard}
                            alt="Solinea CRM dashboard"
                            className="w-full max-w-5xl mx-auto rounded-2xl border border-black/5 shadow-sm"
                        />
                    </div>

                    {/* Anfragen */}
                    <div className="mb-20">
                        <div className="mb-6">
                            <h3 className="text-2xl font-semibold">
                                02 — Inquiries Management
                            </h3>
                            <p className="mt-2 text-gray-600">
                                Eingehende Anfragen lassen sich nach Status, Budget und Projektart verwalten.
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            <img
                                src={inquiries}
                                alt="Solinea CRM inquiry management"
                                className="w-full mx-auto rounded-2xl border border-black/5 shadow-sm"
                            />

                            <img
                                src={inquiriesEdit}
                                alt="Solinea CRM inquiry editing"
                                className="w-full rounded-2xl border border-black/5 shadow-sm"
                            />
                        </div>
                    </div>

                    {/* Projekte */}
                    <div className="mb-20">
                        <div className="mb-6">
                            <h3 className="text-2xl font-semibold">
                                03 — Projects Management
                            </h3>
                            <p className="mt-2 text-gray-600">
                                Projekte sind nach Status, Fortschritt, Budget und Frist organisiert.
                            </p>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            <img
                                src={projectsPreview}
                                alt="Solinea CRM project management"
                                className="w-full rounded-2xl border border-black/5 shadow-sm"
                            />

                            <img
                                src={projectsEdit}
                                alt="Solinea CRM project editing"
                                className="w-full rounded-2xl border border-black/5 shadow-sm"
                            />
                        </div>
                    </div>

                    {/* Kundenverwaltung */}
                    <div className="mb-20">
                        <div className="mb-6">
                            <h3 className="text-2xl font-semibold">
                                04 — Customers Management
                            </h3>
                            <p className="mt-2 text-gray-600">
                                Kundendaten, Projekte, Umsatz und Notizen sind an einem Ort zusammengefasst.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                            <img
                                src={customers}
                                alt="Solinea CRM customers overview"
                                className="w-full rounded-2xl border border-black/5 shadow-sm"
                            />

                            <img
                                src={customerDetail}
                                alt="Solinea CRM customer detail"
                                className="w-full rounded-2xl border border-black/5 shadow-sm"
                            />
                        </div>
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
                                Vom Konzept zum funktionierenden Produkt.
                            </h2>

                            <p className="body-text max-w-3xl text-(--text-light)">
                                Solinea CRM verbindet eine klar strukturierte Benutzeroberfläche
                                mit einer eigenen technischen Umsetzung. Kunden, Projekte und
                                Anfragen bilden dabei die zentralen Bereiche des Produkts.
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
                        Ein funktionierender Fullstack-MVP als Grundlage für ein
                        zukünftiges SaaS-Produkt.
                    </h2>

                    <p className="body-text mt-10 max-w-3xl text-(--text-light)">
                        Das Projekt verbindet Product Design, UX und technische Umsetzung –
                        von der Struktur und Benutzerführung bis zur Implementierung der
                        Anwendung.
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