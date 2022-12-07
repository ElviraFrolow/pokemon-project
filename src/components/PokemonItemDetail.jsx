import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const PokemonItemDetail = () => {
  const { id } = useParams();
  // console.log("id", id);
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
    <article>
      {pokemonDetails.map((elt) => (
        <div key={elt.id}>
          <img src={elt.sprites.front_default} alt="" />
          <div>
            <p>{elt.name}</p>
            <p>#00{elt.id}</p>
          </div>
          <div>
            <button>Poison</button>
            <button>Grass</button>
          </div>
          <div>Attacks and Movement</div>
          <Link to="/">zurück</Link>
        </div>
      ))}
    </article>
  );
};

export default PokemonItemDetail;
