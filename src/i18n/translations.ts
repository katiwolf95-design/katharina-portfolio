import type { Language } from "./language";

export const translations = {
    de: {
        nav: {
            projects: "Projects",
            about: "About",
            contact: "Contact",
            letsTalk: "Let's talk",
        },
        hero: {
            greeting: "Hallo.",
            name: "Ich bin Katharina.",
            title: "Fullstack-Entwicklerin &",
            subtitle: "Digital Product Designerin.",
            description:
                "Ich entwickle digitale Produkte, die Technik, Design und Menschen zusammenbringen.",
            cta: "Projekte entdecken →",
        },
        about: {
            headlineStart: "Ich wollte irgendwann",
            headlineEnd: "nicht mehr",
            headlineHighlight: "nur gestalten.",
            highlight: "Ich wollte verstehen.",
            story1:
                "Früher habe ich digitale Produkte gestaltet. Irgendwann wollte ich wissen, warum manche Produkte funktionieren und andere nicht.",
            story2:
                "Deshalb bin ich den Weg in die Entwicklung gegangen.",
            story3:
                "Heute entwickle ich digitale Produkte, die Design, Strategie und Entwicklung zu einem Ganzen verbinden.",
            cta: "Mehr über meinen Weg →",
        },
        crm: {
            description:
                "Ein CRM für Freelancer, das Kunden, Projekte und Anfragen zusammenführt – klar, fokussiert und ohne unnötige Komplexität.",
            overview: "Overview",
            role: "Role",
            type: "Type",
            status: "Status",
            challenge:
                "Freelancer brauchen Struktur – aber kein weiteres kompliziertes System.",
            challengeText:
                "Solinea CRM entstand aus der Idee, ein digitales Werkzeug zu entwickeln, das die wichtigsten Bereiche der täglichen Freelancer-Arbeit an einem Ort bündelt.",
            approach: {
                problem:
                    "Die Anforderungen und Herausforderungen eines Freelance-Workflows verstehen.",
                structure:
                    "Informationen, Funktionen und Nutzerwege in eine klare Struktur bringen.",
                interface:
                    "Eine reduzierte und verständliche Oberfläche entwickeln.",
                implementation:
                    "Das Produkt als funktionierenden Fullstack-MVP umsetzen.",
            },
            selectedWork: "Ausgewählte Ansichten",
            selectedWorkTitle:
                "Die wichtigsten Bereiche des CRM im Überblick.",
            selectedWorkText:
                "Von der zentralen Dashboard-Ansicht über Anfragen und Projekte bis zur Kundenverwaltung.",
            dashboard:
                "Eine zentrale Übersicht über Kunden, Projekte, Anfragen und Umsatz.",
            inquiries:
                "Eingehende Anfragen lassen sich nach Status, Budget und Projektart verwalten.",
            projects:
                "Projekte sind nach Status, Fortschritt, Budget und Frist organisiert.",
            customers:
                "Kundendaten, Projekte, Umsatz und Notizen sind an einem Ort zusammengefasst.",
            solutionTitle: "Vom Konzept zum funktionierenden Produkt.",
            solutionText:
                "Solinea CRM verbindet eine klar strukturierte Benutzeroberfläche mit einer eigenen technischen Umsetzung. Kunden, Projekte und Anfragen bilden dabei die zentralen Bereiche des Produkts.",
            outcomeTitle:
                "Ein funktionierender Fullstack-MVP als Grundlage für ein zukünftiges SaaS-Produkt.",
            outcomeText:
                "Das Projekt verbindet Product Design, UX und technische Umsetzung – von der Struktur und Benutzerführung bis zur Implementierung der Anwendung.",
            previousProject: "Vorheriges Projekt",
            nextProject: "Nächstes Projekt",
            notFound: "Projekt nicht gefunden",
        },
        digitalHome: {
            description:
                "Ein persönliches digitales Portfolio, das nicht nur Projekte präsentiert, sondern selbst zum digitalen Produkt wird.",
            challenge:
                "Wie kann ein Portfolio mehr sein als eine Sammlung von Projekten – und selbst zu einem eigenständigen digitalen Produkt werden?",
            approach: {
                concept:
                    "Die Idee entwickeln, das persönliche Portfolio selbst als digitales Produkt zu denken.",
                structure:
                    "Inhalte, Projekte und persönliche Informationen in eine klare Nutzerführung bringen.",
                interface:
                    "Eine visuelle und responsive Oberfläche entwickeln, die Persönlichkeit und digitale Kompetenz verbindet.",
            },
            solutionTitle:
                "Ein Portfolio, das selbst zum digitalen Produkt wird.",
            solutionText:
                "Digital Home verbindet persönliche Positionierung, Projektpräsentation und responsive Interface-Gestaltung zu einem eigenständigen digitalen Portfolio-Konzept.",
            outcomeTitle:
                "Ein eigenständiges, responsives Portfolio-Konzept.",
            outcomeText:
                "Ein eigenständiges, responsives Portfolio-Konzept – entwickelt aus der Idee, das Portfolio selbst als digitales Produkt zu denken.",
        },
        randolph: {
            description:
                "Redesign und digitale Neupositionierung der Website des Künstlers Randolph – mit Fokus auf eine klare Präsentation seiner Arbeiten, Ausstellungen und künstlerischen Identität.",
            challenge:
                "Eine künstlerische Identität digital klar und eigenständig präsentieren.",
            challengeText:
                "Die bestehende Website sollte neu strukturiert und visuell weiterentwickelt werden, um Arbeiten, Ausstellungen und Informationen über den Künstler übersichtlicher und stärker aus der visuellen Identität heraus zu präsentieren.",
            approach: {
                analysis:
                    "Bestehende Inhalte, Seitenstruktur und visuelle Identität analysieren.",
                structure:
                    "Inhalte und Navigation neu ordnen und eine klarere Nutzerführung entwickeln.",
                visualDesign:
                    "Eine visuelle Sprache entwickeln, die die Kunstwerke und die Persönlichkeit des Künstlers unterstützt.",
                development:
                    "Das Redesign als responsive Website mit React, Tailwind und Strapi umsetzen.",
            },
            solutionTitle: "Eine digitale Bühne für die Kunst.",
            solutionText:
                "Das Redesign verbindet eine reduzierte Informationsarchitektur mit einer visuellen Gestaltung, die den Arbeiten Raum gibt und gleichzeitig einen klaren Zugang zu Ausstellungen, Künstlerprofil und weiteren Inhalten schafft.",
            outcomeTitle:
                "Ein ausgearbeitetes Website-Redesign als visuelles und technisches Konzept.",
            outcomeText:
                "Das Projekt zeigt, wie eine bestehende Künstler-Website strukturell, visuell und technisch neu gedacht und als responsive Webanwendung umgesetzt werden kann.",
        },
        aboutPage: {
            title: "Mehr über meinen Weg",
            intro: "Mein beruflicher Weg war nie eine gerade Linie.",
            story1:
                "Über die Jahre habe ich unterschiedliche Dinge ausprobiert, eigene Projekte gestartet, neue Bereiche kennengelernt und dabei immer wieder neue Fähigkeiten entwickelt. Manche Wege haben funktioniert, andere nicht – aber jeder hat zu dem beigetragen, was ich heute kann und wie ich an Projekte herangehe.",
            story2:
                "Aus Design und Kommunikation wurden mit der Zeit Marketing, ein tieferes Verständnis für Menschen und schließlich Technologie und Systeme. Heute verbinde ich diese Perspektiven, um digitale Produkte nicht nur zu gestalten, sondern sie auch zu verstehen, zu strukturieren und selbst umzusetzen.",
            sectionLabel: "Was ich heute verbinde",
            sectionTitle: "Vier Perspektiven, die heute zusammenkommen.",
            perspectives: {
                design:
                    "Ich denke visuell und konzeptionell. Für mich soll Design nicht nur gut aussehen, sondern Inhalte verständlicher machen, Orientierung geben und Menschen durch ein Produkt führen.",
                people:
                    "Mich interessiert, was Menschen brauchen, was sie motiviert und wie sie sich in digitalen Produkten bewegen. Gute Lösungen entstehen für mich dort, wo Gestaltung und menschliches Verhalten zusammengedacht werden.",
                strategy:
                    "Ich versuche, nicht nur einzelne Aufgaben zu sehen, sondern das größere System dahinter: Ziele, Zusammenhänge, Prioritäten und die Frage, was tatsächlich gebraucht wird.",
                technology:
                    "Heute kann ich Gestaltung und technische Umsetzung miteinander verbinden. Dadurch kann ich nicht nur Ideen entwickeln, sondern auch verstehen, wie sie technisch funktionieren und selbst an ihrer Umsetzung arbeiten.",
            },
        },
    },

    en: {
        nav: {
            projects: "Projects",
            about: "About",
            contact: "Contact",
            letsTalk: "Let's talk",
        },
        hero: {
            greeting: "Hello.",
            name: "I'm Katharina.",
            title: "Fullstack Developer &",
            subtitle: "Digital Product Designer.",
            description:
                "I build digital products that bring technology, design, and people together.",
            cta: "Explore projects →",
        },
        about: {
            headlineStart: "At some point, I",
            headlineEnd: "no longer wanted to",
            headlineHighlight: "just design.",
            highlight: "I wanted to understand.",
            story1:
                "I used to design digital products. At some point, I wanted to understand why some products work and others don't.",
            story2:
                "That's why I took the path into development.",
            story3:
                "Today, I build digital products that bring design, strategy, and development together.",
            cta: "More about my journey →",
        },
        crm: {
            description:
                "A CRM for freelancers that brings clients, projects, and inquiries together – clear, focused, and without unnecessary complexity.",
            overview: "Overview",
            role: "Role",
            type: "Type",
            status: "Status",
            challenge:
                "Freelancers need structure – not another complicated system.",
            challengeText:
                "Solinea CRM started with the idea of building a digital tool that brings the most important parts of everyday freelance work together in one place.",
            approach: {
                problem:
                    "Understand the needs and challenges of a freelance workflow.",
                structure:
                    "Bring information, features, and user journeys into a clear structure.",
                interface:
                    "Design a streamlined and intuitive interface.",
                implementation:
                    "Build the product as a functional full-stack MVP.",
            },
            selectedWork: "Selected Views",
            selectedWorkTitle:
                "An overview of the CRM's key areas.",
            selectedWorkText:
                "From the central dashboard to inquiries and projects, all the way to customer management.",
            dashboard:
                "A central overview of clients, projects, inquiries, and revenue.",
            inquiries:
                "Manage incoming inquiries by status, budget, and project type.",
            projects:
                "Projects are organized by status, progress, budget, and deadline.",
            customers:
                "Customer data, projects, revenue, and notes are consolidated in one place.",
            solutionTitle: "From concept to a working product.",
            solutionText:
                "Solinea CRM combines a clearly structured user interface with a custom technical implementation. Clients, projects, and inquiries form the product's core areas.",
            outcomeTitle:
                "A functional full-stack MVP serving as the foundation for a future SaaS product.",
            outcomeText:
                "The project combines Product Design, UX, and technical implementation – from information architecture and user guidance to application development.",
            previousProject: "Previous project",
            nextProject: "Next project",
            notFound: "Project not found",
        }, 
        digitalHome: {
            description:
                "A personal digital portfolio that does more than showcase projects — it becomes a digital product in its own right.",
            challenge:
                "How can a portfolio become more than a collection of projects — and evolve into an independent digital product?",
            approach: {
                concept:
                    "Develop the idea of treating the personal portfolio itself as a digital product.",
                structure:
                    "Organize content, projects, and personal information into a clear user journey.",
                interface:
                    "Create a visual, responsive interface that combines personality with digital expertise.",
            },
            solutionTitle:
                "A portfolio that becomes a digital product in its own right.",
            solutionText:
                "Digital Home combines personal positioning, project presentation, and responsive interface design into a distinctive digital portfolio concept.",
            outcomeTitle:
                "An independent, responsive portfolio concept.",
            outcomeText:
                "An independent, responsive portfolio concept — built around the idea of treating the portfolio itself as a digital product.",
        }, 
        randolph: {
            description:
                "A website redesign and digital repositioning for artist Randolph, focused on presenting his work, exhibitions, and artistic identity with clarity.",
            challenge:
                "Present an artistic identity online with clarity and distinction.",
            challengeText:
                "The existing website needed a clearer structure and a visual refinement to present the artist's work, exhibitions, and background more effectively while reflecting his artistic identity.",
            approach: {
                analysis:
                    "Analyze the existing content, page structure, and visual identity.",
                structure:
                    "Reorganize content and navigation to create a clearer user journey.",
                visualDesign:
                    "Develop a visual language that supports the artwork and the artist's personality.",
                development:
                    "Implement the redesign as a responsive website using React, Tailwind, and Strapi.",
            },
            solutionTitle: "A digital stage for art.",
            solutionText:
                "The redesign combines a streamlined information architecture with a visual approach that gives the artwork room to stand out while providing clear access to exhibitions, the artist's profile, and other content.",
            outcomeTitle:
                "A refined website redesign as a visual and technical concept.",
            outcomeText:
                "The project demonstrates how an existing artist website can be rethought structurally, visually, and technically, then implemented as a responsive web application.",
        }, 
        aboutPage: {
            title: "More about my journey",
            intro: "My professional journey has never been a straight line.",
            story1:
                "Over the years, I've explored different paths, started my own projects, discovered new fields, and continually developed new skills. Some paths worked out, others didn't – but each one contributed to what I can do today and how I approach projects.",
            story2:
                "Design and communication gradually led me into marketing, a deeper understanding of people, and eventually technology and systems. Today, I bring these perspectives together to not only design digital products, but also understand them, structure them, and build them myself.",
            sectionLabel: "What I bring together today",
            sectionTitle: "Four perspectives coming together.",
            perspectives: {
                design:
                    "I think visually and conceptually. To me, design should do more than look good – it should make content easier to understand, provide orientation, and guide people through a product.",
                people:
                    "I'm interested in what people need, what motivates them, and how they interact with digital products. I believe good solutions emerge when design and human behavior are considered together.",
                strategy:
                    "I look beyond individual tasks to understand the larger system behind them: goals, connections, priorities, and what is actually needed.",
                technology:
                    "Today, I can connect design with technical implementation. This allows me not only to develop ideas, but also to understand how they work technically and contribute to building them myself.",
            },
        },     
    },
} satisfies Record<Language, {
    nav: {
        projects: string;
        about: string;
        contact: string;
        letsTalk: string;
    };
    hero: {
        greeting: string;
        name: string;
        title: string;
        subtitle: string;
        description: string;
        cta: string;
    };
    about: {
        headlineStart: string;
        headlineEnd: string;
        headlineHighlight: string;
        highlight: string;
        story1: string;
        story2: string;
        story3: string;
        cta: string;
    };
    crm: {
        description: string;
        overview: string;
        role: string;
        type: string;
        status: string;
        challenge: string;
        challengeText: string;
        approach: {
            problem: string;
            structure: string;
            interface: string;
            implementation: string;
        };
        selectedWork: string;
        selectedWorkTitle: string;
        selectedWorkText: string;
        dashboard: string;
        inquiries: string;
        projects: string;
        customers: string;
        solutionTitle: string;
        solutionText: string;
        outcomeTitle: string;
        outcomeText: string;
        previousProject: string;
        nextProject: string;
        notFound: string;
    };
    digitalHome: {
        description: string;
        challenge: string;
        approach: {
            concept: string;
            structure: string;
            interface: string;
        };
        solutionTitle: string;
        solutionText: string;
        outcomeTitle: string;
        outcomeText: string;
    };
    randolph: {
        description: string;
        challenge: string;
        challengeText: string;
        approach: {
            analysis: string;
            structure: string;
            visualDesign: string;
            development: string;
        };
        solutionTitle: string;
        solutionText: string;
        outcomeTitle: string;
        outcomeText: string;
    };
    aboutPage: {
        title: string;
        intro: string;
        story1: string;
        story2: string;
        sectionLabel: string;
        sectionTitle: string;
        perspectives: {
            design: string;
            people: string;
            strategy: string;
            technology: string;
        };
    };
}>;
        