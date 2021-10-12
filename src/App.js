import React, { useState } from 'react';
import './App.css';
import HeroGenerator from './heroGenerator';



const initialValues = {
  heroName : "",
  heroEmail: "",
  heroClass: ""
};


function App() {

  const [formValues, setFormValues] = useState(initialValues);


  const submitForm = () => {
    
  }

  const changeForm = () => {

  }






  return (
    <div className="App">
      <h2>Hello World!</h2>
      <HeroGenerator values={formValues} />
    </div>
  );
}

export default App;
