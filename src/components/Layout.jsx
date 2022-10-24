import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks/context";
import Container from "./Container";
import Navigation from "./Navigation";

const Layout = () => {
  const { user } = useAuth();

  return (
    <Container>
      {!user ? (
        <Navigate to="/login" />
      ) : (
        <>
          <Navigation />
          <main className="my-14">
            <Outlet />
          </main>
          <footer className="py-4">Made with coffee by DTS4C-24 Team</footer>
        </>
      )}
    </Container>
  );
};

export default Layout;
