import { useState } from "react";
import { usePagination } from "../../../hooks/usePagination";
import { Link } from "react-router-dom";
import PegesComponent from "../PegesComponent/PegesComponent";
import PokemonCard from "../PokemonCard/PokemonCard";
import "./PokemonList.css";

const PokemonList = ({ pokemons }) => {
  const [pokemonsPerpage, setPokemonsPerpage] = useState(20);
  const [
    pageNumber,
    pages,
    listSlice,
    changePageTo,
    handleNextPage,
    handleBackPage,
    visiblePages,
    visibleRange,
  ] = usePagination(pokemons, pokemonsPerpage);

  return (
    <section>
      <div className="container_pagination">
        <PegesComponent
          onChangePage={changePageTo}
          handleBackPage={() => handleBackPage()}
          visiblePages={visiblePages}
          handleNextPage={() => handleNextPage()}
          visibleRange={visibleRange}
          pageNumber={pageNumber}
          pages={pages}
        />
      </div>

      <ul className="container-all-pokemons">
        {listSlice.map((pokemon) => (
          <li key={pokemon.url}>
            <Link
              to={`/pokedex/${pokemon.url.split("/").at(-2)}`}
              style={{ color: "unset", textDecoration: "unset" }}
            >
              <PokemonCard pokemonId={pokemon.url.split("/").at(-2)} />
            </Link>
          </li>
        ))}
      </ul>

      <div className="container_pagination">
        <PegesComponent
          onChangePage={changePageTo}
          handleBackPage={() => handleBackPage()}
          visiblePages={visiblePages}
          handleNextPage={() => handleNextPage()}
          visibleRange={visibleRange}
          pageNumber={pageNumber}
          pages={pages}
        />
      </div>
    </section>
  );
};

export default PokemonList;
