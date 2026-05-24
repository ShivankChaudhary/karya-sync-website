import { FaClipboardCheck } from "react-icons/fa";
import styles from "./Faq.module.scss";

import { faqs } from "@/data/siteData";
import { BiChevronDown } from "react-icons/bi";

export default function Faq() {
  return (
    <section className="section section--light-white" id="faqs">
      <div className="container">
        <header className="section__header">
          <h2 className="section__title">Frequently Asked Questions</h2>
          <p className="section__subtitle">
            Everything you need to know about Karya Sync.
          </p>
        </header>
        <div className={styles.list}>
          {faqs.map((faq, index) => (
            <details key={faq.question} className={styles.item}>
              <summary className={styles.summary}>
                <span className={styles.badge}>{index + 1}</span>
                <span className={styles.question}>{faq.question}</span>
                <span className={styles.icon}>
                  <BiChevronDown />
                </span>
              </summary>
              <p className={`text-body ${styles.answer}`}>{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
