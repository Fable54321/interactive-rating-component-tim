import sendIcon from "../../../../assets/images/illustration-thank-you.svg"
import styles from "./Selection.module.css"
import { useContext } from "react"
import { RatingContext } from "../../../../Contexts/ratingContext"



const Selection = () => {

  const rating = useContext(RatingContext).rating;

  return (
    <section className={styles['selection']}>
      <img className={styles["selection__icon"]} src={sendIcon} alt="" aria-hidden="true"></img>
      
      <p className={styles["selection__text-rating"]}>You selected {rating} out of 5</p>

      <p className={styles["selection__text-thanks"]}>Thank you!</p>
      <p className={styles["selection__text-description"]}> We appreciate you taking the time to give a rating. If you ever need more support, don&apos;t hesitate to get in touch!</p>
    </section>
  )
}

export default Selection
