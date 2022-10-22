import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context";

const Login = () => {
  const { user, login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    user && navigate("/");
  }, []);

  return (
    <div className="flex min-h-screen flex-col justify-center bg-slate-900">
      <div className="bg-slate-300 border rounded m-auto p-3">
        <h1 className="text-center">Login</h1>
        <div action="" className="mt-2 flex flex-col gap-2">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.currentTarget.value)}
          />
          <button
            className="block w-full text-sm bg-slate-500 rounded p-2 font-bold"
            onClick={() => login({ email: email, password: password })}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
export default Login;
