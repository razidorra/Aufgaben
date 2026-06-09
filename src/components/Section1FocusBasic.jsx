import { useRef } from "react";

export default function Section1FocusBasic() {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current?.focus();
  }

  function clearInput() {
    if (!inputRef.current) return;

    inputRef.current.value = "";
    inputRef.current.focus();
  }

  return (
    <section className="panel">
      <div>
        <p className="section-label">Section 1</p>
        <h2>Focus Basic</h2>
      </div>

      <label>
        Dein Name
        <input ref={inputRef} type="text" placeholder="Klicke auf Fokus" />
      </label>

      <div className="actions">
        <button type="button" onClick={focusInput}>
          Fokus setzen
        </button>
        <button type="button" className="secondary" onClick={clearInput}>
          Leeren
        </button>
      </div>
    </section>
  );
}
