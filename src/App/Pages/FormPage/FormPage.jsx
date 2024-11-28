import Header from "./Header/Header"
import FormDescription from './FormDescription/FormDescription'
import FormSubmission from "../FormSubmission/FormSubmission"
import styles from './FormPage.module.css'


const FormPage = () => {
  return (
    <div className={styles['form-page']}>
      <header>
        <Header />
      </header>
      <main>
        <FormDescription />
        <FormSubmission /> 
      </main>
    </div>
  )
}

export default FormPage
