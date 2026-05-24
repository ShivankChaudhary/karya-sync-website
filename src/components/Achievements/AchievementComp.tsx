import React from "react";
import { FaClipboardCheck, FaUserTie, FaCouch } from "react-icons/fa";
import styles from "./New.module.scss";
const achievements = [
  {
    icon: <FaClipboardCheck />,
    number: "300+",
    label: "Bookings Done",
  },
  {
    icon: <FaUserTie />,
    number: "20+",
    label: "Workers Employed Daily",
  },
  {
    icon: <FaCouch />,
    number: "10+",
    label: "Backed by Interior Designers",
  },
];

const AchievementComp = () => {
  return (
    <section className="section section--light-white" id="achievements">
      <header className="section__header">
        <h2 className="section__title">Why Choose Us</h2>
        <p className="section__subtitle">Your Work , Our Responsibility</p>
      </header>
      <section className={styles.achievementSection}>
        {achievements.map((item, idx) => (
          <div className={styles.achievementCard} key={idx}>
            <div className={styles.iconWrapper}>{item.icon}</div>
            <div className={styles.number}>{item.number}</div>
            <div className={styles.label}>{item.label}</div>
          </div>
        ))}
      </section>
    </section>
  );
};

export default AchievementComp;
