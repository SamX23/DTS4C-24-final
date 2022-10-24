import { useState } from "react";
import { Navigate } from "react-router-dom";
import Container from "../components/Container";
import { useAuth } from "../hooks/context";
import loginCover from "../assets/login-cover.jpg";

const Login = () => {
  const { user, login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      {user ? (
        <Navigate to="/" />
      ) : (
        <Container noContainer>
          <div className="flex min-h-screen">
            <div className="absolute h-full w-full lg:h-auto lg:relative lg:w-1/2">
              <img
                src={loginCover}
                alt="Login Cover"
                width="900px"
                height="900px"
                className="object-cover h-full w-full"
              />
              {/* https://unsplash.com/photos/AtPWnYNDJnM */}
            </div>
            <div className="absolute h-full w-full lg:h-auto lg:relative lg:w-1/2 flex flex-col justify-center">
              <div className="bg-slate-300 border rounded p-3 text-slate-600 mx-auto w-96">
                <h1 className="text-center mb-6 uppercase font-bold">Login</h1>
                <div className="mt-2 flex flex-col gap-2">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    value={email}
                    className="rounded p-2 focus:outline-none"
                    onChange={(e) => setEmail(e.currentTarget.value)}
                  />
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={password}
                    className="rounded p-2 focus:outline-none"
                    onChange={(e) => setPassword(e.currentTarget.value)}
                  />
                  <button
                    className="text-white block w-full text-sm bg-slate-500 rounded p-2 font-bold"
                    onClick={() => login({ email: email, password: password })}
                  >
                    Register/Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      )}
    </>
  );
};
export default Login;
