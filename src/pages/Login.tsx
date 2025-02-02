import { useSession } from "../components/SessionProvider";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const API_URL = process.env.REACT_APP_API_URL || ""; // Load from .env

const Login = () => {
  const { setUser } = useSession();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${API_URL}/verify_user?email=${encodeURIComponent(email)}`);
      console.log(response);

      const data = await response.json();
      console.log(data);

      if (response.ok && data.isValid) {
        setUser({ username: data.username, id:data.id[1], email:email });
        navigate("/");
      } else {
        setError("Invalid email. Please try again.");
      }
    } catch (err) {
      setError("Failed to connect to the server. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={handleLogin} disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;