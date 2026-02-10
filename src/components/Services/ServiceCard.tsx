import Image, { StaticImageData } from "next/image";
import styles from "./ServiceCard.module.scss";

type ServiceCardProps = {
  title: string;
  description: string;
  image: StaticImageData;
};

export default function ServiceCard({
  title,
  description,
  image,
}: ServiceCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={image} alt={title} />
      </div>

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </article>
  );
}
