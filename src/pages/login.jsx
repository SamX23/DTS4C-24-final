import { useState } from "react";
import { Navigate } from "react-router-dom";
import Container from "../components/Container";
import { useAuth } from "../hooks/context";

const Login = () => {
  const { user, login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      {user ? (
        <Navigate to="/" />
      ) : (
        <Container>
          <div className="bg-slate-300 border rounded m-auto p-3 text-slate-600">
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
                className="text-white block w-full text-sm bg-slate-500 rounded p-2 font-bold"
                onClick={() => login({ email: email, password: password })}
              >
                Login
              </button>
            </div>
          </div>
        </Container>
      )}
    </>
  );
};
export default Login;
