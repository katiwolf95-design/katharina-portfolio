import crmImage from "../assets/images/crm.png";
// import homeImage from "../assets/images/home.png";
import randolphImage from "../assets/images/randolph.png";

export type Project = {
    id: string;
    slug: string;
    title: string;
    subtitle: Record<"de" | "en", string>;
    tags: string[];
    image: string;
    button: Record<"de" | "en", string>;
    layout: "left" | "center" | "right";
};

export const projects: Project[] = [
  {
    id: "01",
    slug: "freelancer-crm",
    title: "Freelancer CRM",
    subtitle: {
      de: "Ein CRM, das Freelancer unterstützt, statt sie zu überfordern.",
      en: "A CRM that supports freelancers instead of overwhelming them.",
    },
    tags: ["Product Design", "Fullstack", "SaaS"],
    image: crmImage,
    button: {
      de: "Case Study ansehen",
      en: "View case study",
    },
    layout: "left",
  },
  {
    id: "02",
    slug: "digital-home",
    title: "Digital Home",
    subtitle: {
      de: "Mein Portfolio wurde zum Produkt.",
      en: "My portfolio became a product.",
    },
    tags: ["UX", "Branding", "Storytelling"],
    image: "",
    button: {
      de: "Mehr erfahren",
      en: "Learn more",
    },
    layout: "center",
  },
  {
    id: "03",
    slug: "randolph",
    title: "Randolph",
    subtitle: {
      de: "Redesign einer Marke, die wieder Vertrauen schaffen sollte.",
      en: "A brand redesign focused on rebuilding trust.",
    },
    tags: ["Editorial", "Visual Design", "UI Design"],
    image: randolphImage,
    button: {
      de: "Case Study ansehen",
      en: "View case study",
    },
    layout: "right",
  }
];