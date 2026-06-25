import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../api/postsApi";

export const Route = createFileRoute("/app/posts")({
  component: PostsPage,
});

function PostsPage() {
  // --- Client-State ---
  const [searchTerm, setSearchTerm] = useState("");
  const [showList, setShowList] = useState(true);
  const [counter, setCounter] = useState(0);
  const [userFilter, setUserFilter] = useState<number | null>(null);

  // --- Server-State ---
  const postsQuery = useQuery({
    queryKey: ["posts", userFilter],
    queryFn: () => fetchPosts(userFilter),
  });

  const visiblePosts = postsQuery.data?.slice(0, 10) ?? [];

  return (
    <div>
      <h1>Posts</h1>

      <section style={{ marginBottom: "1.5rem" }}>
        <h2>Client-State</h2>

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

        <div style={{ marginBottom: "0.5rem" }}>
          <button onClick={() => setCounter((prev) => prev + 1)}>
            Zähler: {counter}
          </button>
        </div>

        <div>
          <button
            onClick={() => setUserFilter(null)}
            disabled={userFilter === null}
          >
            Alle Beiträge
          </button>{" "}
          <button onClick={() => setUserFilter(1)} disabled={userFilter === 1}>
            Beiträge von User 1
          </button>
        </div>
      </section>

      <section>
        <h2>Server-State</h2>

        {/* Infozeile: aktueller Filter + Anzahl angezeigter Einträge */}
        <p style={{ fontSize: "0.9rem", color: "#555" }}>
          Filter: {userFilter === null ? "Alle Beiträge" : `User ${userFilter}`}{" "}
          | Angezeigte Einträge: {visiblePosts.length}
          {postsQuery.isFetching && " (aktualisiere...)"}
        </p>

        {postsQuery.isPending && <p>Lade Beiträge...</p>}

        {postsQuery.isError && (
          <p style={{ color: "red" }}>
            Fehler beim Laden: {postsQuery.error.message}
          </p>
        )}

        {postsQuery.isSuccess && showList && (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {visiblePosts.map((post) => (
              <li
                key={post.id}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                  padding: "0.75rem",
                  marginBottom: "0.5rem",
                }}
              >
                <strong>{post.title}</strong>
                <div style={{ fontSize: "0.85rem", color: "#666" }}>
                  Post-ID: {post.id} · User-ID: {post.userId}
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/*
        Cache-Beobachtungen (TanStack Query):
        - Beim erneuten Wechsel zu einem bereits geladenen Filter erscheinen
          die Daten sofort, ohne erneuten "Lade..."-Zustand.
        - Im Hintergrund läuft trotzdem ein Refetch (isFetching), der die
          Daten "frisch" hält, ohne die UI zu blockieren.
        - Jeder Query Key (z. B. ["posts", null] vs. ["posts", 1]) wird
          separat im Cache gehalten.
      */}
    </div>
  );
}
