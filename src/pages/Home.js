import { useState, useEffect } from "react";
import { json, Link } from "react-router-dom";
import PokemenItem from "../components/PokemonItem";
import pokemonimg from "../imgs/pokemon.svg";
import burgermenu from "../imgs/menu.svg";
import toggel from "../imgs/mode.svg";
// import SearchBar from "../components/SearchBar";
import "./Home.css";
let test = [];
const Home = () => {
  const [input, setInput] = useState("");
  const [info, setInfo] = useState([]);
  const fetchData = () => {
    fetch(" https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((json) => setInfo(json.results));
  };
  useEffect(fetchData, []);
  let articel = document.querySelector(".pokemon-name");
  let div = document.querySelector(".carte");
  const readInput = (event) => {
    console.log("hallo");
    const pokemon = document.querySelector("input");
    // console.log(articel.textContent);
    // console.log(div);
    setInput(pokemon.value);
    {
      info.map((elt) => {
        return test.push(elt.name);
      });
    }

    if (test.includes(input)) {
      console.log("ist da");
    }
    console.log(test);
  };
  console.log(input);

  return (
    <section className="pokemon-liste">
      <img className="logo" src={pokemonimg} alt="" />
      <div className="searchbar">
        <Link to="/filter">
          <img src={burgermenu} alt="" />
        </Link>
        <input
          onKeyDown={(event) =>
            event.keyCode === 13 ? readInput() : console.log("nein")
          }
          // onChange={readInput}
          type="text"
          name=""
          id=""
          placeholder="Search Pokemon"
        />
        {/* <SearchBar /> */}
        <img
          onClick={() => {
            document.querySelector(".pokemon-liste").style.backgroundColor =
              "black";
          }}
          src={toggel}
          alt=""
        />
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
