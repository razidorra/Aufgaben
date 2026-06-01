import { useState } from "react";

const NAMES = [
  "Razieh",
  "Ines",
  "Julius",
  "Ali",
  "Ahmad",
  "Mohammad",
  "Yana",
  "Olha",
  "Vladi",
  "Rasha",
  "Dilek",
  "Josi",
  "Szymon",
  "I-chieh",
];

export function NamePicker() {
  const [remaining, setRemaining] = useState([...NAMES]);
  const [called, setCalled] = useState([]);

  function pickName() {
    if (remaining.length === 0) return;
    const idx = Math.floor(Math.random() * remaining.length);
    const name = remaining[idx];
    setRemaining(remaining.filter((_, i) => i !== idx));
    setCalled([name, ...called]);
  }

  function reset() {
    setRemaining([...NAMES]);
    setCalled([]);
  }

  const current = called[0] ?? null;

  return (
    <div className="flex flex-col items-center gap-6 p-8 max-w-md mx-auto">
      {/* Current name display */}
      <div className="card bg-base-200 w-full shadow-sm">
        <div className="card-body items-center text-center min-h-32 justify-center">
          {current ? (
            <h2 className="text-4xl font-bold text-primary">{current}</h2>
          ) : (
            <p className="text-base-content/40 text-sm">
              Click the button to pick a name
            </p>
          )}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-3 w-full">
        <button
          className="btn btn-primary flex-1"
          onClick={pickName}
          disabled={remaining.length === 0}
        >
          {remaining.length === 0 ? "✓ All names called!" : "Pick a name"}
        </button>
        <button className="btn btn-ghost" onClick={reset}>
          Reset
        </button>
      </div>

      {/* Stats */}
      <div className="flex justify-between w-full text-sm text-base-content/50">
        <span>
          Called: {called.length} / {NAMES.length}
        </span>
        <span>Remaining: {remaining.length}</span>
      </div>

      {/* Called list */}
      {called.length > 0 && (
        <div className="w-full flex flex-col gap-2">
          <p className="text-xs font-semibold text-base-content/40 uppercase tracking-widest">
            Called names
          </p>
          {called.map((name, i) => (
            <div
              key={name}
              className="flex items-center justify-between px-4 py-2 rounded-lg bg-base-200 border border-base-300"
            >
              <span className="font-medium">{name}</span>
              <span className="badge badge-info badge-sm">
                #{called.length - i}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
