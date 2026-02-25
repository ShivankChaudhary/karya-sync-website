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
        </div>
      </div>
    </section>
  );
}
