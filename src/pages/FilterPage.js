import pokemonimg from "../imgs/pokemon.svg";
import close from "../imgs/close.svg";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./FilterPage.css";

const FilterPage = () => {
  const [abilities, setAbilities] = useState([]);
  // const [filter, setFilter] = useState("");
  const fetchAbility = () => {
    fetch("https://pokeapi.co/api/v2/type/")
      .then((res) => res.json())
      .then((json) => setAbilities(json.results));
  };
  useEffect(fetchAbility, []);
  console.log(abilities);
  const handleOnClick = () => {};
  const handleSearch = ({ abilities, setFilterResults }) => {
    const filterArray = abilities.filter((ability) =>
      abilities.name.includes(abilities.name)
    );
    setFilterResults(filterArray);
  };
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
          <button onClick={handleOnClick} key={index}>
            {ability.name.toUpperCase()}
          </button>
        ))}
      </article>
      <button onClick={handleSearch} className="search">
        SEARCH
      </button>
    </div>
  );
};

export default FilterPage;
