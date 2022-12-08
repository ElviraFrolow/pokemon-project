import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PokemenItem from "../components/PokemonItem";
import pokemonimg from "../imgs/pokemon.svg";
import burgermenu from "../imgs/menu.svg";
// import SearchBar from "../components/SearchBar";

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
        <Link to="/filter">
          <img src={burgermenu} alt="" />
        </Link>
        <input type="text" name="" id="" placeholder="Search Pokemon" />
        {/* <SearchBar infos2={infos2} setSearchResults={setSearchResults} /> */}
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
