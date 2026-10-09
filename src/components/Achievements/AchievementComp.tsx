import React from "react";
import { FaClipboardCheck, FaUserTie, FaStar } from "react-icons/fa";
import styles from "./New.module.scss";
const achievements = [
  {
    icon: <FaClipboardCheck />,
    number: "1500+",
    label: "Bookings Done",
  },

  {
    icon: <FaStar />,
    number: "4.7 / 5",
    label: "Customer Satisfaction",
  },
  {
    icon: <FaUserTie />,
    number: "100+",
    label: "Registered Professionals",
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
