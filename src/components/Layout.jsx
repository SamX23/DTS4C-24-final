import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context";
import Navigation from "./Navigation";

const Layout = () => {
  const { user, checkUser } = useAuth();

  useEffect(() => checkUser(), []);

  return (
    <>
      {user ? (
        <div className="relative bg-slate-900 min-h-screen p-2 text-center text-white">
          <div className="container">
            <Navigation />

            <Outlet />
          </div>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default Layout;
