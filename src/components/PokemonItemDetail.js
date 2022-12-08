import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "../pages/Home.css";
import "./PokemonItemDetail.css";
import Arrow from "../imgs/back.svg";
import pokemonimg from "../imgs/pokemon.svg";
import ModeIcon from "../imgs/mode.svg";

const PokemonItemDetail = () => {
  const { id } = useParams();
  const [pokemonDetails, setPokemonDetails] = useState([]);

  const fetchDataDetails = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((request) => request.json())
      .then((response) => {
        setPokemonDetails([response]);
      });
  };
  useEffect(fetchDataDetails, [id]);

  return (
    <article className="pokemon-detail-container">
      {pokemonDetails.map((elt) => (
        <div className="pokemon-detail-display" key={elt.id}>
          <img className="pokemon-detail-logo" src={pokemonimg} alt="" />
          <div className="searchbar">
            <Link to="/">
              <img src={Arrow} alt="" />{" "}
            </Link>
            <input type="text" name="" id="" placeholder="Search Pokemon" />
            <img src={ModeIcon} alt="" />
          </div>
          <div className="pokemon-detail-item">
            <img
              src={elt.sprites.front_default}
              alt=""
              className="pokemon-detail-img"
            />
          </div>
          <div className="pokemon-detail-headline">
            <p>#00{elt.id}</p>
            <p>{elt.name}</p>
          </div>
          <div className="ability-div">
            {elt.types.map((element, index) => (
              <button key={index}>{element.type.name.toUpperCase()}</button>
            ))}
          </div>
          <div className="attack">Attacks and Movement</div>
        </div>
      ))}
    </article>
  );
};

export default PokemonItemDetail;
