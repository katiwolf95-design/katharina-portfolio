import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";
import Container from "../../layout/Container";

export default function Hero() {
  return (
    <section
        id="home" 
        className="section hero"
    >
        <Container>            
            <div className="
                grid grid-cols-1 md:grid-cols-[1fr_0.9fr] lg:grid-cols-[0.9fr_1.1fr]
                items-center gap-10 lg:gap-12 py-16 xl:py-20
            ">
                <HeroContent />
                <HeroImage />
            </div>
        </Container>
    </section>
  );
}