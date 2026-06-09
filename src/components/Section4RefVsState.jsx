import { useRef, useState } from "react";

export default function Section4RefVsState() {
  const refCounter = useRef(0);
  const [stateCounter, setStateCounter] = useState(0);
  const [shownRefCounter, setShownRefCounter] = useState(0);

  function increaseRef() {
    refCounter.current += 1;
  }

  function syncRefToScreen() {
    setShownRefCounter(refCounter.current);
  }

  return (
    <section className="panel">
      <div>
        <p className="section-label">Section 4</p>
        <h2>Ref vs State</h2>
      </div>

      <div className="compare">
        <div>
          <strong>State</strong>
          <span>{stateCounter}</span>
        </div>
        <div>
          <strong>Ref</strong>
          <span>{shownRefCounter}</span>
        </div>
      </div>

      <div className="actions">
        <button type="button" onClick={() => setStateCounter((count) => count + 1)}>
          State +1
        </button>
        <button type="button" className="secondary" onClick={increaseRef}>
          Ref +1
        </button>
        <button type="button" className="secondary" onClick={syncRefToScreen}>
          Ref anzeigen
        </button>
      </div>
    </section>
  );
}
