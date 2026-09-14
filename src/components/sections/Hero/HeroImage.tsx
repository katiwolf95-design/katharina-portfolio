import portrait from "../../../assets/images/foto-hero.png";

export default function HeroImage() {
  return (
    <div className="relative">

        <img
            src={portrait}
            alt="Portrait of Katharina Wolf"
            className="w-[78%] md:w-full max-w-[420px] md:max-w-[480px] lg:max-w-[520px] xl:max-w-[700px] mx-auto"
        />

    </div>
  );
}