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
        <h3 className={styles.head}>Mr. G Varaga Swamy</h3>
        <h4 className={styles.position}>Chairman</h4>
      </div>
      <div className={styles.card}>
        <img
          className={styles.image} // Added class here
          src="https://www.istdbangalore.com/assets/img/Upendra.jpg"
          alt="Sample"
        />
        <h3 className={styles.head}>Dr. T Upendra</h3>
        <h4 className={styles.position}>Vice Chairman</h4>
      </div>
      <div className={styles.card}>
        <img
          className={styles.image} // Added class here
          src="https://www.istdbangalore.com/assets/img/Vijayashree.jpg"
          alt="Sample"
        />
        <h3 className={styles.head}>Dr. L Vijayashree</h3>
        <h4 className={styles.position}>Hon. Secretary</h4>
      </div>
      <div className={styles.card}>
        <img
          className={styles.image} // Added class here
          src="https://www.istdbangalore.com/assets/img/Punarvas-Jaikumar.jpg"
          alt="Sample"
        />
        <h3 className={styles.head}>Mr. C A Punarvas Jaikumar</h3>
        <h4 className={styles.position}>Hon. Treasurer</h4>
      </div>
    </div>
  );
}
