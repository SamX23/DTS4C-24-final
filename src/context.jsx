import { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = async (data) => {
    setUser(data);
    sessionStorage.setItem("user", JSON.stringify(data));
    navigate("/");
  };

  const logout = () => {
    setUser(null);
    navigate("/login", { replace: true });
  };

  const checkUser = async () => {
    const userExist = sessionStorage.getItem("user");

    await setUser(userExist);
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
      checkUser,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
