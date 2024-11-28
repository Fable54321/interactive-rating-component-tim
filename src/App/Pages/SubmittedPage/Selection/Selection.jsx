import sendIcon from "../../../../assets/images/illustration-thank-you.svg"
import styles from "./Selection.module.css"
const Selection = () => {
  return (
    <section className={styles['selection']}>
      <img className={styles["selection__icon"]} src={sendIcon} alt="" aria-hidden="true"></img>
      
      <p className={styles["selection__text-rating"]}>You selected 4 out of 5</p>

      <p className={styles["selection__text-thanks"]}>Thank you!</p>
      <p className={styles["selection__text-description"]}> We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>
    </section>
  )
}

export default Selection
