import { useRef, useState } from "react";

export default function Ext3FocusAfterAction() {
  const noteInputRef = useRef(null);
  const [notes, setNotes] = useState(["useRef speichert mutable Werte."]);

  function addNote(event) {
    event.preventDefault();

    const text = noteInputRef.current.value.trim();
    if (!text) {
      noteInputRef.current.focus();
      return;
    }

    setNotes((currentNotes) => [...currentNotes, text]);
    noteInputRef.current.value = "";
    noteInputRef.current.focus();
  }

  return (
    <section className="panel extension wide">
      <div>
        <p className="section-label">Erweiterung 3</p>
        <h2>Focus After Action</h2>
      </div>

      <form onSubmit={addNote}>
        <label>
          Neue Notiz
          <input ref={noteInputRef} placeholder="Notiz schreiben" />
        </label>

        <button type="submit">Hinzufuegen</button>
      </form>

      <ul className="note-list">
        {notes.map((note, index) => (
          <li key={`${note}-${index}`}>{note}</li>
        ))}
      </ul>
    </section>
  );
}
