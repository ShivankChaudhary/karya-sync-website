import styles from "./Testimonials.module.scss";

import { testimonials } from "@/data/siteData";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <header className="section__header">
          <h2 className="section__title">Our Testimonials</h2>
          <p className="section__subtitle">
            See how Karya Sync has transformed users experiences.
          </p>
        </header>
        <div className={styles.grid}>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
