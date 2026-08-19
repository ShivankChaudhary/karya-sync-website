"use client";

import React from "react";
import styles from "./appDownload.module.scss";
import Hero from "@/components/Hero/Hero";
import appStore from "@/assets/images/appstore.png";
import playStore from "@/assets/images/playstore.png";
import heroImage from "@/assets/images/S3.png";
import styles2 from "@/components/Hero/Hero.module.scss";
import Image from "next/image";
import { heroContent } from "@/data/siteData";
export default function AppDownload() {
  const playStoreUrl =
    "https://play.google.com/store/apps/details?id=com.KaryaSync.app";
  // TODO: replace with Play Store URL
  const appStoreUrl = "https://apps.apple.com/in/app/karya-sync/id6762136586"; // TODO: replace with App Store URL

  return (
    <main className={styles.container}>
      <section className={styles.hero} id="home">
        <div className={`container ${styles2.heroInner}`}>
          <div className={styles2.content}>
            <h1 className={styles2.title}>{heroContent.heading}</h1>
            {/* <p className={styles2.subtitle}>
              Now live in{" "}
              <span className={styles2.locationHighlight}>
                Indirapuram, Noida
              </span>
            </p> */}

            <div className={styles2.cta} id="download">
              <a href={playStoreUrl} target="_blank" rel="noopener noreferrer">
                <Image
                  src={playStore}
                  alt="Download on Google Play"
                  className={styles.storeBadge}
                />
              </a>
              <a href={appStoreUrl} target="_blank" rel="noopener noreferrer">
                <Image
                  src={appStore}
                  alt="Download on App Store"
                  className={styles.storeBadge}
                />
              </a>
              {/* <a href="/">
                      <Image
                        src={heroContent.appStore}
                        alt="Download on the App Store"
                        className={styles2.storeBadge}
                      />
                    </a> */}
            </div>
          </div>

          <div className={styles2.media}>
            <Image
              src={heroImage}
              alt="Karya Sync app preview"
              className={styles2.heroImage}
              priority
            />
          </div>
        </div>
      </section>

      {/* <div className={styles.card}>
        <div className={styles.hero}>
          <h1 className={styles.title}>Get the Karya Sync App</h1>
          <p className={styles.subtitle}>
            Sync tasks, track progress, and collaborate faster — on the go.
          </p>
        </div>
  
        <div className={styles.actions}>
          <a
            href={playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.button} ${styles.android}`}
            aria-label="Download on Google Play"
          >
            <span className={styles.icon} aria-hidden>
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3 2.5L18 12L3 21.5V2.5Z" fill="white" opacity="0.9" />
              </svg>
            </span>
            <span className={styles.text}>
              <span className={styles.small}>GET IT ON</span>
              <span className={styles.bold}>Google Play</span>
            </span>
          </a>

          <a
            href={appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.button} ${styles.ios}`}
            aria-label="Download on the App Store"
          >
            <span className={styles.icon} aria-hidden>
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.365 1.43c-.685.08-1.586.48-2.13 1.06-.46.5-.86 1.29-.72 2.06.78.06 1.62-.4 2.1-.98.47-.57.93-1.36.74-2.18zM12.8 4.3c-1.72 0-2.98 1.12-3.74 1.12-.8 0-1.9-1.08-3.12-1.08-1.6 0-3.08.94-3.9 2.56-1.86 3.3-.48 8.2 1.34 10.88.9 1.26 1.97 2.62 3.36 2.57 1.3-.05 1.8-.86 3.36-.86 1.55 0 2.03.86 3.36.83 1.48-.03 2.4-1.28 3.3-2.55.52-.7.74-1.1 1.16-1.96-3.06-1.18-3.1-6.72-.08-8.7-1.32-1.86-3.66-2.9-5.64-2.77z"
                  fill="white"
                />
              </svg>
            </span>
            <span className={styles.text}>
              <span className={styles.small}>Download on the</span>
              <span className={styles.bold}>App Store</span>
            </span>
          </a>
        </div>

        <p className={styles.note}>
          Don't have the store links yet? Tell me the URLs and I will update the
          buttons.
        </p>
      </div> */}
    </main>
  );
}
