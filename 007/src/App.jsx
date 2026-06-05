import { useEffect, useState } from "react";
import "./App.css";
import { PokeCard } from "./components/Cards/poke.card.jsx";
import { SearchInput } from "./components/Inputs/search.input.jsx";
import { LayoutPublic } from "./components/Layouts/layout.public.jsx";

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=50&offset=0",
        );

        if (!data.ok) {
          throw new Error("Request Data Error: App.js - 18");
        }
        const pokemonArray = await data.json();

        setPokemon(pokemonArray.results);
      } catch (error) {
        console.log(error);
      }
    }
    getData();

    //API Request
  }, []);

  return (
    <>
      <LayoutPublic>
        <main>
          <div className="flex flex-col gap-6 m-8">
            <section className="search flex justify-center items-center">
              <SearchInput />
            </section>
            <section className="poke-cards flex justify-center items-center flex-wrap gap-4">
              {pokemon.length
                ? pokemon.map((pokeitem) => {
                    return <PokeCard key={pokeitem.name} item={pokeitem} />;
                  })
                : "Keine Pokemon gefunden"}
            </section>
          </div>
        </main>
      </LayoutPublic>
    </>
  );
}

export default App;
