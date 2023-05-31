import { useContext } from "react";
import { UserNameContext } from "../../context/UserNameContext";

import "./Pokedex.css";

import PokemonList from "../../components/Pokedex/PokemonList/PokemonList";
import FilterForm from "../../components/Pokedex/FiltersForm/FilterForm";

import { useLoaderData } from "react-router-dom";

const Pokedex = () => {
  const { userName } = useContext(UserNameContext);
  const { pokemons, pokemonName, pokemonTypeId } = useLoaderData();

  return (
    <section>
      <p className="pokedex__massage">
        <em className="pokedex__massage__username">Bienvenido {userName}, </em>{" "}
        aquí podrás encontrar a tu pokemon favorito
      </p>
      <FilterForm nameInitial={pokemonName} typeInitial={pokemonTypeId} />
      {!pokemons.length ? (
        <p>No hay pokemones</p>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </section>
  );
};

export default Pokedex;
