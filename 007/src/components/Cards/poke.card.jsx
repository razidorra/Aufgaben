import { useEffect, useState } from "react";

export function PokeCard({ item }) {
  const [picture, setPicture] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/960px-Pok%C3%A9_Ball_icon.svg.png",
  );

  useEffect(() => {
    async function getData() {
      try {
        const data = await fetch(item.url);

        if (!data.ok) {
          throw new Error("Failed to request data");
        }

        const pokemonData = await data.json();
        setPicture(pokemonData.sprites.front_default);

        console.log(pokemonData);
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, []);

  return (
    <div className="card card-sm bg-base-100 w-72 shadow-sm">
      <figure className="px-10 pt-10">
        <img src={picture} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{item.name}</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions">
          <button className="btn btn-sm btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}
