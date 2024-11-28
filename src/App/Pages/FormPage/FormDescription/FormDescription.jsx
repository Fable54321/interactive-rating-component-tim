import styles from "./FormDescription.module.css"


const FormDescription = () => {
  return (
    <section className={styles['form-description']}>
      <p className={styles['form-description__text']}>Please let us know how we did with your support <br /> request. All feedback is appreciated  to help us improve our offering!</p>
    </section>
  )
}

export default FormDescription
