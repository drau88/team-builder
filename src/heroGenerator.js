import React from 'react';

export default function HeroGenerator (props) { 
    const { values, update, submit } = props

    const onChange = (evt) => {
        const name = evt.target.name;
        const value = evt.target.value;
        update(name, value);
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    }



    return (
        <form onSubmit={onSubmit}>
        <div className='generatorContainer'>
          <label>Hero Name </label>
          <input 
          type="text"
          name='heroName'
          placeholder="Enter hero's name"
          value={values.heroName}
          onChange={onChange}
          />
          <br />
          <label>Hero Email </label>
          <input 
          type="text"
          name='heroEmail' 
          placeholder="Enter hero's email"
          value={values.heroEmail}
          onChange={onChange}
          />
          <br />
          <label>Choose Hero's Class
              <br/>
              <select value={values.heroClass} name='heroClass' onChange={onChange}>
                  <option value=''>--Select a class--</option>
                  <option value='Fighter'>Fighter</option>
                  <option value='Wizard'>Wizard</option>
                  <option value='Rogue'>Rogue</option>
                  <option value='Cleric'>Cleric</option>
              </select>
          </label>
          <button>Submit</button>
        </div>
      </form>

    )




}