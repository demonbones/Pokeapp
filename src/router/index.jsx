import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import ProtectedRouter from "../components/ProtectedRouter/ProtectedRouter";
import Home from "../pages/Home/Home";
import Pokedex from "../pages/Pokedex/Pokedex";

import { pokedexLoader } from "./loaders/pokedexLoader";
import PokemonDetail from "../pages/PokemonDetail/PokemonDetail";

// el router de tipo "Browser" simpre necesita que se configure
// correctamente la plataforma de despliegue (netlify, Vercer, servidor)
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pokedex",
    element: (
      <ProtectedRouter>
        <Layout></Layout>
      </ProtectedRouter>
    ),
    children: [
      {
        path: "",
        element: <Pokedex />,
        loader: pokedexLoader,
      },

      {
        path: ":pokemonId",
        element: <PokemonDetail />,
      },
    ],
  },
]);
