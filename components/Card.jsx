import styles from "./Card.module.css";

export default function Card() {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <img
          className={styles.image} // Added class here
          src="https://t3.ftcdn.net/jpg/05/19/81/94/360_F_519819425_xgW3SoStxkZJMMXCRxHvM4qwA7Nm19Xe.jpg"
          alt="Sample"
        />
        <h1 className={styles.head}>Mission</h1>
        <p className={styles.para}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat
          facilis excepturi cumque maxime saepe asperiores cupiditate in harum.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
          sint, accusantium facere, et, voluptates
        </p>

      </div>
      <div className={styles.card}>
        <img
          className={styles.image} // Added class here
          src="https://t3.ftcdn.net/jpg/04/18/52/88/360_F_418528804_xgyFvVsMSHeWk1UgDtR9aoccqSC7BrHy.jpg"
          alt="Sample"
        />
        <h1 className={styles.head}>Vision</h1>
        <p className={styles.para}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quaerat
          facilis excepturi cumque maxime saepe asperiores cupiditate in harum.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
          harum neque numquam error molestiae explicabo
        </p>
      </div>
    </div>
  );
}
