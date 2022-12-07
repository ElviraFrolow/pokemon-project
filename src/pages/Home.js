import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PokemenItem from "../components/PokemonItem";
import pokemonimg from "../imgs/pokemon.svg";

import "./Home.css";
const Home = () => {
  const [info, setInfo] = useState([]);
  const fetchData = () => {
    fetch(" https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((json) => setInfo(json.results));
  };
  useEffect(fetchData, []);
  console.log("info", info);
  return (
    <section className="pokemon-liste">
      <img className="logo" src={pokemonimg} alt="" />
      <div className="searchbar">
        <Link to="/">
          <img src="" alt="" />{" "}
        </Link>
        <input type="text" name="" id="" placeholder="Search Pokemon" />
        <img src="" alt="" />
      </div>
      <article className="grid">
        {info.map((element, index) => (
          <PokemenItem key={index} url={element.url} />
        ))}
      </article>
    </section>
  );
};

export default Home;