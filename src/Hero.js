import React from "react";

export default function Hero (props) {
    const { heroList } = props;
    console.log(props);
    return (
        <div>
          {heroList.map((hero, idx) => 
            <div key={idx}>
            <p>{hero.heroName}</p>
            <p>{hero.heroEmail}</p>
            <p>{hero.heroClass}</p>
            </div>
          )}  
        </div>
    )
}