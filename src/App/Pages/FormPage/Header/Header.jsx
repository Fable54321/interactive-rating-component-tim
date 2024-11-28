import styles from "./Header.module.css"
import star from "../../../../assets/images/icon-star.svg"

const Header = () => {
  return (
    <section className="header">
      <div className={styles['header__decoration']}><img className={styles['header__decoration__img']} src={star} alt="a decorative star"></img></div>
      <h1 className={styles['header__title']}>How did we do?</h1>
    </section>
  )
}

export default Header
