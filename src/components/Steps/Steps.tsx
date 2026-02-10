import styles from "./Steps.module.scss";

import { steps } from "@/data/siteData";
import StepCard from "./StepCard";

export default function Steps() {
  return (
    <section className="section section--light-white" id="steps">
      <div className="container">
        <header className="section__header">
          <h2 className="section__title">How Karya Sync Works</h2>
          <p className="section__subtitle">
            Get instant mistri or labour to your doorstep in just 3 simple
            steps.
          </p>
        </header>
        <div className={styles.grid}>
          {steps.map((step, index) => (
            <StepCard key={step.title} index={index + 1} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
