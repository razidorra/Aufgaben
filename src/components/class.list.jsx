import { useState } from "react";
import { ButtonDefault } from "./buttons/button.default.jsx";
import { DisplayUsername } from "./displays/display.username.jsx";

const classNames = [
  "Olha",
  "Vladi",
  "Ahmad",
  "Julius",
  "Szymon",
  "Mohammad",
  "Dilek",
  "I-Chieh",
  "Yana",
  "Ines",
  "Josi",
  "Feras",
  "Ali",
  "Razieh",
  "Rasha",
];

export function ClassList() {
  const [randomName, setRandomName] = useState("");

  function showRandomNameHandler() {
    const availableNames = classNames.filter((name) => name !== randomName);
    const randomIndex = Math.floor(Math.random() * availableNames.length);

    setRandomName(availableNames[randomIndex]);
  }

  return (
    <section className="flex max-w-xl flex-col items-center gap-6">
      <h1 className="text-3xl font-bold">Class List</h1>

      <ul className="list-inside list-disc text-center">
        {classNames.map((name) => {
          return <li key={name}>{name}</li>;
        })}
      </ul>

      <ButtonDefault
        clickHandler={showRandomNameHandler}
        text={"Random Name"}
      />

      {randomName && <DisplayUsername username={randomName} />}
    </section>
  );
}
