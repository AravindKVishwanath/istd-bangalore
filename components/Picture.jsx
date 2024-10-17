import styles from "./Picture.module.css";

export default function Picture() {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <img
          className={styles.image} // Added class here
          src="https://www.istdbangalore.com/assets/img/Varagaswamy.jpeg"
          alt="Sample"
        />
        <h1 className={styles.head}>Mission</h1>
      </div>
      <div className={styles.card}>
        <img
          className={styles.image} // Added class here
          src="https://www.istdbangalore.com/assets/img/Upendra.jpg"
          alt="Sample"
        />
        <h1 className={styles.head}>Vision</h1>
      </div>
      <div className={styles.card}>
        <img
          className={styles.image} // Added class here
          src="https://www.istdbangalore.com/assets/img/Vijayashree.jpg"
          alt="Sample"
        />
        <h1 className={styles.head}>Mission</h1>
      </div>
      <div className={styles.card}>
        <img
          className={styles.image} // Added class here
          src="https://www.istdbangalore.com/assets/img/Punarvas-Jaikumar.jpg"
          alt="Sample"
        />
        <h1 className={styles.head}>Vision</h1>
      </div>
    </div>
  );
}
