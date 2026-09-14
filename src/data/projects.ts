import crmImage from "../assets/images/crm.png";
// import homeImage from "../assets/images/home.png";
import randolphImage from "../assets/images/randolph.png";

export type Project = {
    id: string;
    slug: string;
    title: string;
    subtitle: string;
    tags: string[];
    image: string;
    button: string;
    layout: "left" | "center" | "right";
};

export const projects: Project[] = [
  {
    id: "01",
    slug: "freelancer-crm",
    title: "Freelancer CRM",
    subtitle: "Ein CRM, das Freelancer unterstützt, statt sie zu überfordern.",
    tags: ["Product Design", "Fullstack", "SaaS"],
    image: crmImage,
    button: "Case Study ansehen",
    layout: "left",
  },
  {
    id: "02",
    slug: "digital-home",
    title: "Digital Home",
    subtitle: "Mein Portfolio wurde zum Produkt.",
    tags: ["UX", "Branding", "Storytelling"],
    image: "",
    button: "Mehr erfahren",
    layout: "center",
  },
  {
    id: "03",
    slug: "randolph",
    title: "Randolph",
    subtitle: "Redesign einer Marke, die wieder Vertrauen schaffen sollte.",
    tags: ["Editorial", "Visual Design", "UI Design"],
    image: randolphImage,
    button: "Case Study ansehen",
    layout: "right",
  }
];