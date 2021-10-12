import React from 'react';

export default function HeroGenerator (props) { 
    const { values } = props


    return (
        <form>
        <div>
          <label>Hero Name</label>
          <input 
          type="text"
          placeholder="Enter hero's name"
          value={values.username}
        //   submit={submitForm}
        //   change={changeForm}
          />
        </div>
      </form>

    )




}