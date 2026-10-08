import Button from "../../ui/Button";
import Stamp from "./Stamp";
import Blob from "../../../assets/images/blob-image.png"
import { useEffect, useRef, useState } from "react";
import SecretNote from "./SecretNote";
import { AnimatePresence, motion } from "motion/react";

export default function Postcard() {

    const [showSecret, setShowSecret] = useState(false);
    const [stampHint, setStampHint] = useState(false);

    const noteRef = useRef<HTMLDivElement>(null);
    const postcardRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (!showSecret) return;

        function handleClickOutside(event: MouseEvent) {
            if (noteRef.current && !noteRef.current.contains(event.target as Node)) {
                setShowSecret(false);
            }
        }

        function handleScroll() {
            setShowSecret(false);
        }

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("scroll", handleScroll);
       
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("scroll", handleScroll);
        };
    }, [showSecret]);

    useEffect(() => {
        const postcard = postcardRef.current;

        if (!postcard) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStampHint(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.3,
            }
        );

        observer.observe(postcard);

        return () => observer.disconnect();
        
    }, []);

    return (
        <article 
            ref={postcardRef}
            id="contact"
            className="
                relative mx-auto mb-32 flex
                w-[calc(100%-2rem)] max-w-[890px]
                flex-col md:flex-row
                h-auto md:h-[560px]
                px-6 md:px-0
                py-10 md:py-18
                items-center
                rounded-[24px]
                border border-(--border)
                bg-(--surface)
                shadow-(--shadow-soft)
            "
        >

            {/* Bild */}
            <div className="flex w-full pb-8 md:pb-0 md:w-[420px] justify-center">
                <img
                    src={Blob}
                    alt="Coffe-Image"
                    className="
                        w-[230px] -translate-x-12 translate-y-6 
                        md:w-[340px] md:translate-x-0 md:translate-y-0 mb-8
                    "
                />
            </div>

            {/* Linie */}
            <div className="
                h-[2px] w-[80%]
                md:h-[330px] md:w-[4px]
                rounded-full
                bg-(--border)
                
            " />

            {/* Nachricht */}
            <div className="
                relative flex
                ml-10 md:ml-12
                mt-7 md:mt-0
                w-full md:w-[300px]
                h-auto md:h-[360px]
                flex-col
            ">

                {/* Briefmarke */}
                <motion.div
                    animate={
                        stampHint
                            ?{ rotate: [-3, 3, -2, 2, 0, 0, 0, -3, 3, -2, 2, 0], }
                            : { rotate: 0 }
                    }
                    transition={{ duration: 1.5, ease: "easeInOut",}}
                    onAnimationComplete={() => setStampHint(false)}
                    className="
                        absolute
                        -top-85 -right-6
                        md:-top-22 md:-right-32
                    "
                >
                    <Stamp
                        opened={showSecret}
                        onClick={() => setShowSecret(!showSecret)}
                    />
                </motion.div>

                <AnimatePresence>
                    {showSecret && (
                        <div ref={noteRef}>
                            <SecretNote />
                        </div>
                    )}
                </AnimatePresence>

                <h3 className="mb-8 mt-6 font-(--font-heading) text-4xl">
                    Danke,
                </h3>

                <div className="space-y-4">
                    <p>
                        dass du dir Zeit genommen hast, mein Portfolio anzusehen.
                    </p>

                    <p>
                        Ich hoffe, aus diesem Besuch <br />
                        ist eine kleine Begegnung geworden.
                    </p>
                </div>

                {/* Button */}
                <div className="mt-10 md:mt-auto mr-14">
                    <a href="mailto:kawolf6388@gmail.com">
                        <Button 
                            variant="filled"
                            className="w-full md:w-auto "
                        >
                            Schreib mir →
                        </Button>
                    </a>
                </div>

            </div>

        </article>
    );
}