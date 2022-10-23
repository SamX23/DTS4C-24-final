import { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "./store";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const dispatch = useStore((state) => state.dispatch);
  const user = useStore((state) => state.user);
  const navigate = useNavigate();

  const login = async (data) => {
    dispatch({ type: "LOGIN", data });
    sessionStorage.setItem("user", JSON.stringify(data));
    navigate("/");
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    sessionStorage.removeItem("user");
    navigate("/login", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
