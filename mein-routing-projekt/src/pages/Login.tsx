import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/app/dashboard");
  };

  return (
    <div>
      <h1>Login</h1>
      {isAuthenticated ? (
        <p>Du bist bereits angemeldet.</p>
      ) : (
        <button onClick={handleLogin}>Anmelden</button>
      )}
    </div>
  );
}

export default Login;
