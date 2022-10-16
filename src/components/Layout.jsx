import { Navigate, Outlet } from "react-router-dom";

const Layout = () => (
  <>{user ? <Outlet /> : <Navigate to={{ pathname: "/login" }} replace />}</>
);

export default Layout;
