import { useEffect, useState } from "react";
import { getPokemonById } from "../../../services/getPokemonById";
import "./PokemonCard.css";

const statsTarget = ["hp", "attack", "defense", "speed"];

const PokemonCard = ({ pokemonId }) => {
  const [pokemon, setPokemon] = useState(null);

  const stats = pokemon?.stats.filter((stat) =>
    statsTarget.includes(stat.name.toLowerCase())
  );

  useEffect(() => {
    const loadPokemon = async () => {
      const pokemonData = await getPokemonById(pokemonId);
      setPokemon(pokemonData);
    };
    loadPokemon();
  }, [pokemonId]);

  return (
    <article className="pokemon-card">
      {!pokemon && <p>Loading...</p>}

      {pokemon && (
        <>
          <div className="pokemon-card__img">
            <img
              src={pokemon.image}
              alt={pokemon.name}
              className="pokemon-img"
            />
          </div>

          <h2 className="pokemon-card__title">{pokemon.name}</h2>

          <section className="pokemon-card__type">
            <h3>tipo</h3>
            <ul className="pokemon-card__list__type">
              {pokemon.types.map((type) => (
                <li key={type} className="pokemon-card__item__type">
                  {type}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h3 className="title_list_stats">Stats</h3>
            <ul className="pokemon-card__list__stats">
              {stats.map((stat) => (
                <li key={stat.name} className="pokemon-card__item">
                  <em>{stat.name.toUpperCase()}</em>
                  <span> {stat.value}</span>
                </li>
              ))}
            </ul>
          </section>
        </>
      )}
    </article>
  );
};

export default PokemonCard;
