import Image, { StaticImageData } from "next/image";
import styles from "./StepCard.module.scss";

type StepCardProps = {
  index: number;
  title: string;
  image: StaticImageData;
};

export default function StepCard({ index, title, image }: StepCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <span className={styles.stepLabel}>Step {index}</span>
        <h3 className={styles.title}>{title}</h3>
      </div>

      <div className={styles.imageWrapper}>
        <Image src={image} alt={title} className={styles.image} priority />
      </div>
    </article>
  );
}
