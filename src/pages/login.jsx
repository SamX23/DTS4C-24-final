import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context";

const Login = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/", { replace: true });
    }
  }, []);

  return (
    <div className="container">
      <div className="App">LOGIN PAGE</div>
    </div>
  );
};
export default Login;
