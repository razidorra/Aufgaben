import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/app/posts")({
  component: PostsPage,
});

function PostsPage() {
  // --- Client-State: lokal im Browser verwaltet, nichts vom Server ---
  const [searchTerm, setSearchTerm] = useState(""); // Client-State: Sucheingabe
  const [showList, setShowList] = useState(true); // Client-State: Liste ein-/ausblenden
  const [counter, setCounter] = useState(0); // Client-State: lokaler Zähler

  // --- Server-State: kommt später per TanStack Query von der API ---
  // (in Aufgabe 3 ersetzen wir diesen Platzhalter durch echte useQuery-Daten)

  return (
    <div>
      <h1>Posts</h1>

      <section style={{ marginBottom: "1.5rem" }}>
        <h2>Client-State</h2>
        <p>
          Diese Werte werden komplett lokal im Browser verwaltet, ohne
          Server-Kontakt.
        </p>

        <div style={{ marginBottom: "0.5rem" }}>
          <label>
            Suche:{" "}
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </label>
        </div>

        <div style={{ marginBottom: "0.5rem" }}>
          <button onClick={() => setShowList((prev) => !prev)}>
            Liste {showList ? "ausblenden" : "einblenden"}
          </button>
        </div>

        <div>
          <button onClick={() => setCounter((prev) => prev + 1)}>
            Zähler: {counter}
          </button>
        </div>
      </section>

      <section>
        <h2>Server-State</h2>
        <p>
          Hier werden bald Beiträge von einer externen API geladen (per TanStack
          Query). Aktuell noch Platzhalter.
        </p>
        {showList && <p>(Hier erscheint später die Liste der Beiträge.)</p>}
      </section>
    </div>
  );
}
