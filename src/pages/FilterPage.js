import pokemonimg from "../imgs/pokemon.svg";
import close from "../imgs/close.svg";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./FilterPage.css";

const FilterPage = () => {
  const [abilities, setAbilities] = useState([]);
  const [filter, setFilter] = useState(true);
  const fetchAbility = () => {
    fetch("https://pokeapi.co/api/v2/type/")
      .then((res) => res.json())
      .then((json) => {
        setAbilities(json.results);
        // setFilter( false );
      });
  };
  useEffect(fetchAbility, [filter]);
  console.log(abilities);

  //Reset Function
  const resetSearch = () => {
    setFilter(!filter);
  };
  //click on ability function
  const handleOnClick = (e) => {
    let abilityType = e.target.value;
    const filterArray = abilities.filter((ability) =>
      ability.name.includes(abilityType)
    );
    setAbilities(filterArray);
  };

  //  todo:click on search function
  // const handleSearch = ({ abilities, setAbilities }) => {
  //   const filterArray = abilities.filter((ability) =>
  //     abilities.name.includes(abilities.name)
  //   );
  //   setAbilities(filterArray);
  // };
  return (
    <div className="pokemon-liste">
      <div className="header">
        <img className="logo" src={pokemonimg} alt="" />
        <Link to={"/"}>
          <img className="close" src={close} alt="" />
        </Link>
      </div>
      <h1 className="type">TYPE</h1>
      <article className="grid">
        {abilities.map((ability, index) => (
          <button value={ability.name} onClick={handleOnClick} key={index}>
            {ability.name.toUpperCase()}
          </button>
        ))}
      </article>
      <button className="search">SEARCH</button>
      <svg
        onClick={resetSearch}
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M12,16c1.671,0,3-1.331,3-3s-1.329-3-3-3s-3,1.331-3,3S10.329,16,12,16z"></path>
        <path d="M20.817,11.186c-0.12-0.583-0.297-1.151-0.525-1.688c-0.225-0.532-0.504-1.046-0.83-1.531 c-0.324-0.479-0.693-0.926-1.098-1.329c-0.404-0.406-0.853-0.776-1.332-1.101c-0.483-0.326-0.998-0.604-1.528-0.829 c-0.538-0.229-1.106-0.405-1.691-0.526c-0.6-0.123-1.219-0.182-1.838-0.18V2L8,5l3.975,3V6.002C12.459,6,12.943,6.046,13.41,6.142 c0.454,0.094,0.896,0.231,1.314,0.409c0.413,0.174,0.813,0.392,1.188,0.644c0.373,0.252,0.722,0.54,1.038,0.857 c0.315,0.314,0.604,0.663,0.854,1.035c0.254,0.376,0.471,0.776,0.646,1.191c0.178,0.417,0.314,0.859,0.408,1.311 C18.952,12.048,19,12.523,19,13s-0.048,0.952-0.142,1.41c-0.094,0.454-0.23,0.896-0.408,1.315 c-0.175,0.413-0.392,0.813-0.644,1.188c-0.253,0.373-0.542,0.722-0.858,1.039c-0.315,0.316-0.663,0.603-1.036,0.854 c-0.372,0.251-0.771,0.468-1.189,0.645c-0.417,0.177-0.858,0.314-1.311,0.408c-0.92,0.188-1.906,0.188-2.822,0 c-0.454-0.094-0.896-0.231-1.314-0.409c-0.416-0.176-0.815-0.393-1.189-0.645c-0.371-0.25-0.719-0.538-1.035-0.854 c-0.315-0.316-0.604-0.665-0.855-1.036c-0.254-0.376-0.471-0.776-0.646-1.19c-0.178-0.418-0.314-0.86-0.408-1.312 C5.048,13.952,5,13.477,5,13H3c0,0.611,0.062,1.221,0.183,1.814c0.12,0.582,0.297,1.15,0.525,1.689 c0.225,0.532,0.504,1.046,0.831,1.531c0.323,0.477,0.692,0.924,1.097,1.329c0.406,0.407,0.854,0.777,1.331,1.099 c0.479,0.325,0.994,0.604,1.529,0.83c0.538,0.229,1.106,0.405,1.691,0.526C10.779,21.938,11.389,22,12,22s1.221-0.062,1.814-0.183 c0.583-0.121,1.151-0.297,1.688-0.525c0.537-0.227,1.052-0.506,1.53-0.83c0.478-0.322,0.926-0.692,1.331-1.099 c0.405-0.405,0.774-0.853,1.1-1.332c0.325-0.483,0.604-0.998,0.829-1.528c0.229-0.54,0.405-1.108,0.525-1.692 C20.938,14.221,21,13.611,21,13S20.938,11.779,20.817,11.186z"></path>
      </svg>
    </div>
  );
};

export default FilterPage;
