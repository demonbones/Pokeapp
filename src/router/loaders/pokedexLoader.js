import { getAllPokemons } from "../../services/getAllPokemons";
import { getPokemonsByTypeId } from "../../services/getPokemonsByTypeId";

export const pokedexLoader = async ({ request }) => {
  const url = new URL(request.url);
  const pokemonName = url.searchParams.get("pokemonName") ?? "";
  const pokemonTypeId = url.searchParams.get("pokemonType") ?? "";

  let pokemons;

  if (pokemonName && pokemonTypeId) {
    pokemons = await getPokemonsByTypeId(pokemonTypeId);
    pokemons = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().startsWith(pokemonName.toLowerCase())
    );
  } else if (!pokemonName && !pokemonTypeId) {
    pokemons = await getAllPokemons();
  } else if (pokemonName) {
    pokemons = await getAllPokemons();
    pokemons = pokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().startsWith(pokemonName.toLowerCase())
    );
  } else if (pokemonTypeId) {
    pokemons = await getPokemonsByTypeId(pokemonTypeId);
  }

  return { pokemons, pokemonName, pokemonTypeId };
};
