import { useEffect, useRef, useState } from "react";

export default function Ext2DebounceTimer() {
  const timeoutRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  function handleChange(event) {
    const nextValue = event.target.value;
    setSearchTerm(nextValue);

    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setDebouncedTerm(nextValue);
    }, 700);
  }

  return (
    <section className="panel extension">
      <div>
        <p className="section-label">Erweiterung 2</p>
        <h2>Debounce Timer</h2>
      </div>

      <label>
        Suche
        <input value={searchTerm} onChange={handleChange} placeholder="Tippe langsam..." />
      </label>

      <p className="result">
        Debounced: <strong>{debouncedTerm || "Noch kein Wert"}</strong>
      </p>
    </section>
  );
}
