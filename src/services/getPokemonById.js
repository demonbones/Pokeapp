import { axiosInstance } from "../api/axiosInstance";

const getPokmonImg = (sprites) => {
  const firstOption = sprites.other.dream_world.front_default;
  const secondOption = sprites.other["official-artwork"].front_default;
  const thirdOption = sprites.other.home.front_default;

  if (firstOption) return firstOption;
  if (secondOption) return secondOption;
  if (thirdOption) return thirdOption;
  else
    return "https://img.freepik.com/vector-premium/no-hay-foto-disponible-icono-vector-simbolo-imagen-predeterminado-imagen-proximamente-sitio-web-o-aplicacion-movil_87543-10615.jpg?w=740";

  // return imagen de un pokemon con signo de interrogación
};
export const getPokemonById = async (id) => {
  try {
    const res = await axiosInstance.get(`pokemon/${id}/`);
    const pokemonData = res.data;

    const adaptedPokemon = {
      name: pokemonData.name[0].toUpperCase() + pokemonData.name.slice(1),
      types: pokemonData.types.map((typeInfo) => typeInfo.type.name),
      stats: pokemonData.stats.map((statInfo) => ({
        name: statInfo.stat.name,
        value: statInfo.base_stat,
      })),
      image: getPokmonImg(pokemonData.sprites),
    };

    return adaptedPokemon;
  } catch (error) {
    console.error(error);
  }
};
