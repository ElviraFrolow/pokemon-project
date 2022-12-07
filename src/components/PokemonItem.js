import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./PokemonItem.css";

const PokemenItem = (props) => {
  const [infos, setInfos] = useState([]);
  const fetchdata2 = () => {
    fetch(`${props.url}`)
      .then((res) => res.json())
      .then((json) => setInfos([json]));
  };
  useEffect(fetchdata2, []);

  return (
    <div className="pokemen-item">
      {infos.map((elt) => (
        <div key={elt.id}>
          <Link to={`/pokemon/${elt.id}`}>
            <img
              className="pokemon-img"
              src={elt.sprites.front_default}
              alt=""
            />
          </Link>
          <div className="pokemen-info">
            <p>#00{elt.id}</p>
            <p>{elt.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PokemenItem;
