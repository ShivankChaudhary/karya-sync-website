import type { StaticImageData } from "next/image";

import appStore from "@/assets/images/appstore.png";
import playStore from "@/assets/images/playstore.png";
import heroImage from "@/assets/images/S3.png";
import heroBackground from "@/assets/images/hero-section-bg-banner.png";
import civilConsultant from "@/assets/images/FinalConsultant.png";
import generalLabour from "@/assets/images/LabourNew.png";
import mistri from "@/assets/images/FinalMistriNew.png";
import combo from "@/assets/images/FinalComboNew.png";
import stepOne from "@/assets/images/Step1.png";
import stepTwo from "@/assets/images/Step2.png";
import stepThree from "@/assets/images/Step3.png";

import customerOne from "@/assets/images/customer-placeholder-icon1.png";
import customerTwo from "@/assets/images/customer-placeholder-icon2.png";
import customerThree from "@/assets/images/customer-placeholder-icon3.png";
import { Combo } from "next/font/google";

export const navLinks = [
  { label: "Why Us", href: "#achievements" },
  { label: "Services", href: "#services" },

  { label: "How it works", href: "#steps" },
  { label: "FAQs", href: "#faqs" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact Us", href: "/contact-us" },
];

export const heroContent = {
  heading: "India's First Labour And Mistri Booking App",
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
    title: "Labour",
    description:
      "Choose for Loading & Unloading, Construction Site, Cleaning Work & more.",
    image: generalLabour,
  },
  {
    title: "Mason / Mistri",
    description:
      "Choose for any kind of repair, Construction, Tile Installation & more.",
    image: mistri,
  },
  {
    title: "Labour+Mistri",
    description:
      "Choose for the combo service of both Labour and Mistri for your construction and repair needs.",
    image: combo,
  },
  {
    title: "Karya Consultant",
    description:
      "Expert guidance service for your construction and renovation projects.",
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
    name: "Varun Goel",
    location: "Sector 62",
    message:
      "Highly impressed with the construction services! The platform made it seamless to find reliable Mistrys and laborers at a very reasonable price. The team arrived with a great, positive attitude and a clear focus on completing the work on time. Excellent value for money and great teamwork…",
    avatar: customerOne,
  },
  {
    name: "Kavi Chauhan",
    location: "Greater Noida",
    message:
      "My experience was very good with Karya sync. It's hard to find labour and Mason in some areas there karya sync comes to the rescue.. fair price value no hidden cost and hourly/full day service selection at ease. Also very good customer support. 100% recommended.",
    avatar: customerTwo,
  },
  {
    name: "Tarun Grover",
    location: "Sector 82",
    message:
      "Karya Sync is solving a genuine problem. Overall satisfied with their work and timely delivery of work.",
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
      "Karya Sync is an instant labour & mistri booking app that is here to transform the way you access labour and mistri services and get your repair or construction work done.",
  },
  {
    question: "How do I book services?",
    answer:
      "You can book services using the Karya Sync mobile app, available on Android and iOS. Just choose the type of service you need, select a suitable time slot, and we will assign a verified worker based on your requirement.",
  },
  {
    question: "How is service pricing calculated?",
    answer:
      "Service charges depend on the type of work, duration, and skill level required. Pricing is based on the job requirements and complexity. We follow a transparent pricing model with no hidden fees.",
  },
  {
    question: "Where can I use Karya Sync?",
    answer:
      "Currently, Karya Sync operates in  Noida, Indrapuram, Vasundhara, Greater Noida west. You can check availability by entering your location in the app. More cities will be added soon.",
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
