import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Outlet } from "react-router-dom";

function AppLayout() {
  const { logout } = useAuth();

  return (
    <div>
      <nav>
        <Link to="/app/dashboard">Dashboard</Link> |{" "}
        <Link to="/app/profile">Profil</Link> |{" "}
        <button onClick={logout}>Abmelden</button>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default AppLayout;
