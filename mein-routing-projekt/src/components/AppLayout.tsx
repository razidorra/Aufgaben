import { Link, Outlet } from "react-router-dom";
import { useClerk } from "@clerk/clerk-react";

function AppLayout() {
  const { signOut } = useClerk();

  return (
    <div>
      <nav>
        <Link to="/app/dashboard">Dashboard</Link> |{" "}
        <Link to="/app/profile">Profil</Link> |{" "}
        <button onClick={() => signOut({ redirectUrl: "/" })}>Abmelden</button>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default AppLayout;
