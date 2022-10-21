import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context";

const Layout = () => {
  const { user } = useAuth();

  return <>{user ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default Layout;
