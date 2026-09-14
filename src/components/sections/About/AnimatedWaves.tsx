import Wave4 from "../../../assets/waves/welle-4.svg";
import Wave5 from "../../../assets/waves/welle-5.svg";
import Wave6 from "../../../assets/waves/welle-6.svg";

import Wave1 from "../../../assets/waves/welle-1.svg";
import Wave2 from "../../../assets/waves/welle-2.svg";
import Wave3 from "../../../assets/waves/welle-3.svg";

import Container from "../../layout/Container";

type AnimatedWavesProps = {
  position?: "top" | "bottom";
};

export default function AnimatedWaves({ position }: AnimatedWavesProps) {
    if (position === "top") {
        return (
            <div className="pointer-events-none absolute top-0 left-0 w-full overflow-hidden">
                <Container>
                    <div className="relative h-[220px]">
                        <img className="absolute inset-0 w-full" alt="" src={Wave6} />
                        <img className="absolute inset-0 w-full" alt="" src={Wave5} />
                        <img className="absolute inset-0 w-full" alt="" src={Wave4} />
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className="pointer-events-none absolute bottom-0 left-0 w-full overflow-hidden">
            <Container>
                <div className="relative h-[220px]">
                    <img className="absolute left-0 bottom-0 w-full" alt="" src={Wave2} />
                    <img className="absolute left-0 bottom-0  w-full" alt="" src={Wave1} />
                    <img className="absolute left-0 bottom-0  w-full" alt="" src={Wave3} />
                </div>
            </Container>
        </div>
    );
}