import { useRef, useState } from "react";

export default function Section3ValuesWithoutRerender() {
  const clickCountRef = useRef(0);
  const [visibleCount, setVisibleCount] = useState(0);
  const [lastAction, setLastAction] = useState("Noch keine Aktion.");

  function countWithoutRender() {
    clickCountRef.current += 1;
  }

  function showCurrentCount() {
    setVisibleCount(clickCountRef.current);
    setLastAction(`Letzter gelesener Ref-Wert: ${clickCountRef.current}`);
  }

  return (
    <section className="panel">
      <div>
        <p className="section-label">Section 3</p>
        <h2>Values Without Rerender</h2>
      </div>

      <div className="stats">
        <span>Ref-Klicks sichtbar: {visibleCount}</span>
        <span>{lastAction}</span>
      </div>

      <div className="actions">
        <button type="button" onClick={countWithoutRender}>
          Ref erhoehen
        </button>
        <button type="button" className="secondary" onClick={showCurrentCount}>
          Anzeigen
        </button>
      </div>
    </section>
  );
}
