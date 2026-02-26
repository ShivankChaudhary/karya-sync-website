import styles from "./Services.module.scss";

import { services } from "@/data/siteData";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section className={`section ${styles.section}`} id="services">
      <div className="container">
        <header className="section__header">
          <h2 className="section__title">Our Services</h2>
          <p className="section__subtitle">
            Book trusted labour & mistri online
          </p>
        </header>
        <div className={styles.grid}>
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}

          <article className={`${styles.comingSoonCard}`}>
            <div className={styles.comingSoonContent}>
              <div className={styles.iconWrapper}>
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className={styles.comingSoonTitle}>More Services</h3>
              <p className={styles.comingSoonText}>Coming Soon</p>
              <p className={styles.comingSoonDescription}>
                We're working on bringing you more amazing services!
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
