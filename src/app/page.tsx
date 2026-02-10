import Faq from "@/components/Faq/Faq";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Services from "@/components/Services/Services";
import Steps from "@/components/Steps/Steps";
import Testimonials from "@/components/Testimonials/Testimonials";
import { navLinks } from "@/data/siteData";

export const revalidate = 60;

export default function Home() {
  return (
    <>
      <Navbar links={navLinks} />
      <main>
        <Hero />
        <Services />
        <Steps />
        <Testimonials />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
