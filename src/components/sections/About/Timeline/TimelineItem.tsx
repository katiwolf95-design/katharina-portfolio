type TimelineEvent = {
    year?: string;
    title: string;
    text: string;
    position: number;
    isFuture?: boolean;
};

type TimelineItemProps = {
    event: TimelineEvent;
    progress: number;
};

function TimelineItem({ event, progress }: TimelineItemProps) {
    const isActive = progress >= event.position;

    return (
        <div
            className={`
                absolute -translate-x-1/2 transition-all duration-500 ease-out
            ${isActive ? "opacity-100 translate-y-0 shadow-sm" : "opacity-0 translate-y-3"}
            ${event.isFuture ? "italic text-gray-500" : "text-gray-700"}
            `}
            style={{
                left: `${event.position * 100}%`,
                top: "0.9rem",
            }}
        >
            <div className="bg-white rounded-lg px-4 py-3 w-48">
                <h4 className="font-semibold mb-1">
                    {event.title}
                </h4>

                {event.text && (
                    <p className="text-sm">
                        {event.text}
                    </p>
                )}
            </div>
        </div>
    );
}

export default TimelineItem;