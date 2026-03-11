import styles from "./card.module.css";
import Image from "next/image";

export default function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.cardimg}>
        <Image
          src={"/img/card1.png"}
          alt="Card Picture"
          fill={true}
          objectFit="cover"
        />
      </div>
      <div className={styles.cardtext}>Card 1</div>
    </div>
  );
}
