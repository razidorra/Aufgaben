import { useState } from "react";
import usePrevious from "../hooks/usePrevious.js";

export default function Ext1PreviousValue() {
  const [count, setCount] = useState(0);
  const previousCount = usePrevious(count);

  return (
    <section className="panel extension">
      <div>
        <p className="section-label">Erweiterung 1</p>
        <h2>Previous Value</h2>
      </div>

      <div className="stats">
        <span>Aktuell: {count}</span>
        <span>Vorher: {previousCount ?? "keiner"}</span>
      </div>

      <div className="actions">
        <button type="button" onClick={() => setCount((value) => value + 1)}>
          Erhoehen
        </button>
        <button type="button" className="secondary" onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </section>
  );
}
