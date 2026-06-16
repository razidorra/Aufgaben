import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

function App() {
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Startseite</Link> |{" "}
        {!isAuthenticated && <Link to="/login">Login</Link>}
      </nav>

      <Routes>
        {/* Öffentliche Routen */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        {/* Geschützter Bereich */}
        <Route
          path="/app"
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* Nicht gefunden */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
