type ProjectNavigationProps = {
  current: number;
  total: number;
  onNext: () => void;
  onPrevious: () => void;
};

export default function ProjectNavigation({
    current,
    total,
    onNext,
    onPrevious,
}: ProjectNavigationProps) {
    return (
        <div className=" flex items-center gap-6 text-sm justify-between tracking-[0.3em]">
            <button 
                onClick={onPrevious}
                className="transition-opacity hover:opacity-50"
            >
                ← 
            </button>

            <span className="text-sm tracking-[0.3em]">
                {String(current + 1).padStart(2, "0")} /{" "} 
                {String(total).padStart(2, "0")}
            </span>

            <button 
                onClick={onNext}
                className="transition-opacity hover:opacity-50"
            >
                 →
            </button>
        </div>
    );
}