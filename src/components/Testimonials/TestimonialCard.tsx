import Image, { StaticImageData } from "next/image";
import styles from "./TestimonialCard.module.scss";

type TestimonialCardProps = {
  name: string;
  location: string;
  message: string;
  avatar: StaticImageData;
};
export default function TestimonialCard({
  name,
  location,
  message,
  avatar,
}: TestimonialCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.avatarWrapper}>
        <Image src={avatar} alt={name} className={styles.avatar} />
      </div>

      <h3 className={styles.name}>{name}</h3>
      <p className={styles.location}>{location}</p>

      <p className={styles.message}>“{message}”</p>
    </article>
  );
}
