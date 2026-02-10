import Image from "next/image";
import styles from "./Hero.module.scss";

import { heroContent } from "@/data/siteData";

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={`container ${styles.heroInner}`}>
        <div className={styles.content}>
          <h1 className={styles.title}>{heroContent.heading}</h1>
          <p className={styles.subtitle}>
            Now live in{" "}
            <span className={styles.locationHighlight}>Indirapuram, Noida</span>
          </p>

          <div className={styles.cta} id="download">
            <a
              href="https://play.google.com/store/apps/details?id=com.KaryaSync.app"
              target="_blank"
              rel="noopener noreferrer">
              <Image
                src={heroContent.playStore}
                alt="Download on Google Play"
                className={styles.storeBadge}
              />
            </a>
            <a href="/">
              <Image
                src={heroContent.appStore}
                alt="Download on the App Store"
                className={styles.storeBadge}
              />
            </a>
          </div>
        </div>

        <div className={styles.media}>
          <Image
            src={heroContent.heroImage}
            alt="Karya Sync app preview"
            className={styles.heroImage}
            priority
          />
        </div>
      </div>
    </section>
  );
}
