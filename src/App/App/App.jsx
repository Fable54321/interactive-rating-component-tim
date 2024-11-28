import { useState } from 'react'
import './App.module.css'
import { Routes, Route } from 'react-router-dom';
import FormPage from '../Pages/FormPage/FormPage';
import Styles from './App.module.css'
import SubmittedPage from '../Pages/SubmittedPage/SubmittedPage';
import { RatingContext } from '../../Contexts/ratingContext';

function App() {
  
  

  const [rating, setRating] = useState(0);

  


  console.log(rating);

  return (
   <RatingContext.Provider value={{rating, setRating}} > 
      <div className={Styles.App}>
      <Routes>
        <Route path="/" element={<FormPage  />} />
        <Route path="/form=submitted" element={<SubmittedPage />} />
      </Routes>
      </div>
    </RatingContext.Provider> 
  )
} 

export default App
