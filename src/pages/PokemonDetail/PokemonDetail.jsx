import { useParams } from "react-router-dom";
// import { getPokemonById } from "../../services/getPokemonById";

import "./PokemonDetail.css";
import { useEffect, useState } from "react";
import { getPokemonById } from "../../services/getPokemonById";
const PokemonDetail = () => {
  const { pokemonId } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const lodPokemon = async () => {
      const pokemonData = await getPokemonById(pokemonId);
      setPokemon(pokemonData);
    };
    lodPokemon();
  }, [pokemonId]);

  return (
    <div>
      {!pokemon ? (
        <p>loading...</p>
      ) : (
        <section>
          <img src={pokemon.image} alt={pokemon.nmae}></img>
        </section>
      )}
    </div>
  );
};

export default PokemonDetail;
