import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { RatingContext } from "../../../Contexts/ratingContext"
import styles from "./FormSubmission.module.css"

const FormSubmission = () => {

  const rating = useContext(RatingContext).rating;
  const setRating = useContext(RatingContext).setRating;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(rating !==0){
      navigate("/form=submitted");
    }
    else {
      alert ("Please select a rating");
    }
  }

  return (
    <section className={styles['form-submission']}>
      <form onSubmit={handleSubmit} className={styles['form-submission__form']}>

        <div className={styles['form-submission__form__rating']}>
          <button className={rating === 1 ? styles['btn-selected']: ""} type="button" onClick={(e) =>{ 
            e.preventDefault();
            setRating(1)
            }}>
            <input id="1" name="rating" type="radio" />
            <label htmlFor="1">1</label>
          </button>
          <button className={rating === 2 ? styles['btn-selected']: ""} type="button" onClick={(e) =>{ 
            e.preventDefault();
            setRating(2)
            }}>
            <input id="2" name="rating" type="radio" />
            <label htmlFor="2">2</label>
          </button>
          <button className={rating === 3 ? styles['btn-selected']: ""} type="button" onClick={(e) =>{ 
            e.preventDefault();
            setRating(3)
            }}>
            <input id="3" name="rating" type="radio" />
            <label htmlFor="3">3</label>
          </button>
          <button className={rating === 4 ? styles['btn-selected']: ""} type="button" onClick={(e) =>{ 
            e.preventDefault();
            setRating(4)
            }}>
            <input id="4" name="rating" type="radio" />
            <label htmlFor="4">4</label>
          </button>
          <button className={rating === 5 ? styles['btn-selected']: ""} type="button" onClick={(e) =>{ 
            e.preventDefault();
            setRating(5)
            }}>
            <input id="5" name="rating" type="radio" />
            <label htmlFor="5">5</label>
          </button>
        </div>

        <button type="submit" className={styles['form-submission__form__submit']} >SUBMIT</button>

      </form>
    </section>
  )
}

export default FormSubmission
