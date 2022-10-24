import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Container from "../components/Container";
import { useAuth } from "../hooks/context";
import loginCover from "../assets/login-cover.jpg";
import GoogleButton from "react-google-button";

const Login = () => {
  const { user, login, register } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userLogin, setUserLogin] = useState(true);

  return (
    <>
      {user ? (
        <Navigate to="/" />
      ) : (
        <Container noContainer>
          <div className="flex min-h-screen relative">
            <div className="absolute h-full w-full lg:h-auto lg:relative lg:w-1/2">
              <img
                src={loginCover}
                alt="Login Cover"
                width="900px"
                height="900px"
                className="object-cover h-full w-full bg-slate-500"
                loading="lazy"
              />
              <span className="absolute bottom-5 left-0 right-0 text-sm text-slate-500">
                Image from https://unsplash.com/photos/AtPWnYNDJnM
              </span>
            </div>
            <div className="absolute h-full w-full lg:h-auto lg:relative lg:w-1/2 flex flex-col justify-center">
              <div className="bg-slate-300 border rounded p-3 text-slate-600 mx-auto w-96">
                <div className="mb-6 border-b-2 pb-2 border-slate-400">
                  <h1 className="uppercase font-bold">Proudly Present</h1>
                  <h2>Nonton Movie</h2>
                </div>

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
                    onClick={() => {
                      userLogin
                        ? login({ email, password })
                        : register({ email, password });
                    }}
                  >
                    {userLogin ? "Login" : "Register"}
                  </button>

                  {userLogin ? (
                    <span>
                      Don't have account ?
                      <button
                        className="underline ml-2"
                        onClick={() => setUserLogin(false)}
                      >
                        Register
                      </button>
                    </span>
                  ) : (
                    <span>
                      Already have an account ?
                      <button
                        className="underline ml-2"
                        onClick={() => setUserLogin(true)}
                      >
                        Login
                      </button>
                    </span>
                  )}
                </div>

                <span className="my-4 block">Or</span>

                <GoogleButton
                  type="dark"
                  className="mx-auto"
                  onClick={() => {
                    console.log("Google button clicked");
                  }}
                />
              </div>
            </div>
          </div>
        </Container>
      )}
    </>
  );
};
export default Login;
