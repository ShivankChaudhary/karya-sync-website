import type { StaticImageData } from "next/image";

import appStore from "@/assets/images/appstore.png";
import playStore from "@/assets/images/playstore.png";
import heroImage from "@/assets/images/hero-section.png";
import heroBackground from "@/assets/images/hero-section-bg-banner.png";
import civilConsultant from "@/assets/images/civil-consultant.png";
import generalLabour from "@/assets/images/general-labour.png";
import mistri from "@/assets/images/mistri.png";
import stepOne from "@/assets/images/Step1.png";
import stepTwo from "@/assets/images/Step2.png";
import stepThree from "@/assets/images/Step3.png";
import customerOne from "@/assets/images/customer-placeholder-icon1.png";
import customerTwo from "@/assets/images/customer-placeholder-icon2.png";
import customerThree from "@/assets/images/customer-placeholder-icon3.png";

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#steps" },
  { label: "FAQs", href: "#faqs" },
];

export const heroContent = {
  heading: "India's first Labour and Mistri home service platform",
  location: "Now live in Indirapuram, Noida!",
  appStore,
  playStore,
  heroImage,
  heroBackground,
};

export type ServiceItem = {
  title: string;
  description: string;
  image: StaticImageData;
};

export const services: ServiceItem[] = [
  {
    title: "Mason / Mistri",
    description:
      "Choose from Wall Construction, Construction Cleaning, Tile Installation & more.",
    image: mistri,
  },
  {
    title: "Labour (General)",
    description:
      "Select from Loading & Unloading Work, Construction Site Cleaning & more.",
    image: generalLabour,
  },
  {
    title: "Civil Consultant",
    description: "Expert guidance service to review the details.",
    image: civilConsultant,
  },
];

export type StepItem = {
  title: string;
  image: StaticImageData;
  description?: string;
};

export const steps: StepItem[] = [
  {
    title: "Choose service and category",
    image: stepOne,
  },
  {
    title: "Select your preferred slot and date",
    image: stepTwo,
  },
  {
    title: "Pay & done !",
    image: stepThree,
  },
];

export type TestimonialItem = {
  name: string;
  location: string;
  message: string;
  avatar: StaticImageData;
};

export const testimonials: TestimonialItem[] = [
  {
    name: "Pradeep Sharma",
    location: "Sector 54",
    message:
      "Booking a Mistri was quick and easy. They arrived within 15 minutes, worked efficiently, and delivered excellent service. Karya Sync made the whole process seamless.",
    avatar: customerOne,
  },
  {
    name: "Swati Agarwal",
    location: "Sector 55",
    message:
      "The labour sent by Karya Sync was seamless and offered great service. I have used it multiple times, and the team has done a great job.",
    avatar: customerTwo,
  },
  {
    name: "Anil Yadav",
    location: "Sector 56",
    message:
      "Had a last-minute requirement, and Karya Sync delivered the services on time without any delays. The team handled everything very professionally and did an excellent job. Highly recommended 👍.",
    avatar: customerThree,
  },
];

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqs: FaqItem[] = [
  {
    question: "What is Karya Sync?",
    answer:
      "Karya Sync is an on-demand platform that helps you find skilled civil workers for home and site-related jobs. We connect verified labourers and mistris with customers who need trusted support for construction, renovation, repair, and maintenance work. You can book services instantly or schedule them in advance for timely and reliable service at your location.",
  },
  {
    question: "How do I book services?",
    answer:
      "You can book services using the Karya Sync mobile app, available on both Android and iOS platforms. Just choose the type of service you need, select a suitable time slot, and we will assign a verified worker based on your requirement.",
  },
  {
    question: "How is service pricing calculated?",
    answer:
      "Service charges depend on the type of work, duration, and skill level required. Pricing is based on the job requirements and complexity. We follow a transparent pricing model with no hidden fees.",
  },
  {
    question: "Where can I use Karya Sync?",
    answer:
      "Currently, Karya Sync operates in Indirapuram and Noida. You can check availability by entering your location in the app. More cities will be added soon.",
  },
  {
    question: "How do I contact Support?",
    answer:
      "For any queries or support, you can reach us at karyasync@gmail.com or call us at +91 7678112184.",
  },
];

export const footerLinks = {
  terms: "/terms",
  privacy: "/privacy-policy",
};
export const socialLinks = [
  {
    label: "Facebook",
    href: " https://www.facebook.com/profile.php?id=61587466195665",
  },
  { label: "Instagram", href: "https://www.instagram.com/karya_sync/" },
  { label: "YouTube", href: "https://www.youtube.com/@KaryaSync-w7i" },
  { label: "LinkedIn", href: " https://www.linkedin.com/company/karya-sync/" },
];
