import {
  createFileRoute,
  Outlet,
  Link,
  useNavigate,
} from "@tanstack/react-router";
import { useClerk } from "@clerk/clerk-react";
import { RequireAuth } from "../component/RequireAuth";

export const Route = createFileRoute("/app")({
  component: AppLayout,
});

function AppLayout() {
  const { signOut } = useClerk();
  const navigate = useNavigate();

  async function handleLogout() {
    await signOut();
    navigate({ to: "/signin/$", params: { _splat: "" }, replace: true });
  }

  return (
    <RequireAuth>
      <div style={{ display: "flex", minHeight: "100vh" }}>
        <nav
          style={{
            width: "200px",
            borderRight: "1px solid #ddd",
            padding: "1rem",
          }}
        >
          <h3>App</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <Link to="/app">Dashboard</Link>
            </li>
            <li>
              <Link to="/app/profile">Profil</Link>
            </li>
            <li>
              <Link to="/app/settings">Einstellungen</Link>
            </li>
          </ul>
          <button onClick={handleLogout} style={{ marginTop: "1rem" }}>
            Logout
          </button>
        </nav>
        <main style={{ flex: 1, padding: "1rem" }}>
          <Outlet />
        </main>
      </div>
    </RequireAuth>
  );
}
