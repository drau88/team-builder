import React, { useState } from 'react';
import './App.css';
import HeroGenerator from './heroGenerator';
import Hero from './Hero';

const heroList = [
  {heroName: 'Caspar Capon IV', heroEmail: "CasparCaponIV@CasparsExoticMeatEmporium.com", heroClass: 'Bard'},
];



const initialValues = {
  heroName : "",
  heroEmail: "",
  heroClass: ""
};


function App() {
  const [heroes, setHeroes] = useState(heroList);
  const [formValues, setFormValues] = useState(initialValues);

  const updateForm = (inputName, inputValue) => {

    setFormValues({...formValues, [inputName]: inputValue});

  }


  const submitForm = () => {
    
    const newHero = {
      heroName: formValues.heroName.trim(),
      heroEmail: formValues.heroEmail.trim(),
      heroClass: formValues.heroClass
    }

    if (!newHero.heroName || !newHero.heroEmail || !newHero.heroClass) return;

    setHeroes(heroList.concat(newHero));
    setFormValues(initialValues);
  }







  return (
    <div className="App">
      <h2>You must gather your party before venturing forth!</h2>
      <HeroGenerator values={formValues} update={updateForm} submit={submitForm} />
      <div>
        <h2>Adventure Awaits Those Below:</h2>
        <Hero heroList={heroes}></Hero>
      </div>
    </div>
  );
}

export default App;
