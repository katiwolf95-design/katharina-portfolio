import { useEffect, useState } from "react";

type TimelineItemData = {
    date: string;
    title: string;
    text: string;
};

function VerticalTimeline() {
    const [visibleItems, setVisibleItems] = useState<number[]>([]);

    const items: TimelineItemData[] = [
        {
            date: "2011",
            title: "Design & Communication",
            text: "Visual foundations, design thinking and clear communication.",
        },
        {
            date: "2021",
            title: "Marketing & Impact",
            text: "Strategic thinking, reach and brand logic.",
        },
        {
            date: "2023",
            title: "Human Behavior & Psychology",
            text: "Understanding motivation, relationships and inner processes.",
        },
        {
            date: "2026",
            title: "Systems & Execution",
            text: "Technical implementation with a focus on structure and sustainability.",
        },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll(".timeline-item");

            elements.forEach((element, index) => {
                const rect = element.getBoundingClientRect();

                if (rect.top < window.innerHeight * 0.85) {
                    setVisibleItems((previous) => [
                        ...new Set([...previous, index]),
                    ]);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <section className="md:hidden max-w-xl mx-auto px-6 py-10">
            <h2 className="text-2xl font-semibold mb-20">
                Werdegang
            </h2>

            <div className="relative">
                <div className="absolute left-3 top-0 h-full w-px bg-gray-300" />

                <ul className="space-y-12">
                    {items.map((item, index) => (
                        <li
                            key={index}
                            className={`
                                timeline-item relative pl-12
                                transition-all duration-700 ease-out
                                ${
                                    visibleItems.includes(index)
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-4"
                                }
                            `}
                        >
                            <span
                                className={`
                                    absolute left-1.5 top-1 w-3 h-3 rounded-full
                                    transition-all duration-500
                                    ${
                                        visibleItems.includes(index)
                                            ? "bg-(--primary-light) scale-125 shadow-md"
                                            : "bg-gray-300"
                                    }
                                `}
                            />

                            <span className="block text-sm font-bold text-(--primary) mb-2">
                                {item.date}
                            </span>

                            <div className="bg-white rounded-xl shadow-md p-4">
                                <h3 className="font-medium mb-1">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-gray-600">
                                    {item.text}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default VerticalTimeline;