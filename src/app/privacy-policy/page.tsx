import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import styles from "./privacy-policy.module.scss";
import heroBg from "@/assets/images/hero-section-bg-banner.png";
import heroImg from "@/assets/images/karya-heros.png";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar
        links={[
          { label: "Services", href: "#services" },
          { label: "How it works", href: "#steps" },
          { label: "FAQs", href: "#faqs" },
        ]}
      />
      <section className={styles.bannerSection}>
        <div className={styles.bannerBg}>
          <Image
            src={heroBg}
            alt="Banner Background"
            fill
            priority
            className={styles.bgImage}
          />
        </div>
        <div className={styles.heroImageWrapper}>
          <Image
            src={heroImg}
            alt="Karya Sync Team"
            width={420}
            height={220}
            className={styles.heroImage}
          />
        </div>
      </section>
      <main className={styles.contentSection}>
        <div className={styles.policyContent}>
          <h1>Privacy Policy</h1>
          <span className={styles.updatedBadge}>Updated at 2025-12-19</span>
          <p>
            <strong>Karya Sync</strong> (“we,” “our,” or “us”) is committed to
            protecting your privacy. This Privacy Policy explains how your
            personal information is collected, used, and disclosed by Karya
            Sync.
          </p>
          <p>
            This Privacy Policy applies to our website, and its associated
            subdomains (collectively, our “Service”) alongside our application,
            Karya Sync. By accessing or using our Service, you signify that you
            have read, understood, and agree to our collection, storage, use,
            and disclosure of your personal information as described in this
            Privacy Policy and our Terms of Service. This Privacy Policy was
            created with{" "}
            <a
              href="https://termify.io"
              target="_blank"
              rel="noopener noreferrer">
              Termify
            </a>
            .
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
