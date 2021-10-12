import React from 'react';

export default function HeroGenerator (props) { 
    const { values } = props


    return (
        <form>
        <div>
          <label>Hero Name </label>
          <input 
          type="text"
          placeholder="Enter hero's name"
          value={values.heroName}
        //   submit={submitForm}
        //   change={changeForm}
          />
          <br />
          <label>Hero Email </label>
          <input 
          type="text" 
          placeholder="Enter hero's email"
          value={values.heroEmail}
          />
          <br />
          <label>Choose Hero's Class
              <br/>
              <select value={values.heroClass} name='role'>
                  <option value=''>--Select a class--</option>
                  <option value='Fighter'>Fighter</option>
                  <option value='Wizard'>Wizard</option>
                  <option value='Rogue'>Rogue</option>
                  <option value='Cleric'>Cleric</option>
              </select>
          </label>
        </div>
      </form>

    )




}