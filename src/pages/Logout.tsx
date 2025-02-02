import { useSession } from "../components/SessionProvider";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { setUser } = useSession();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    navigate("/login");
  };
  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
