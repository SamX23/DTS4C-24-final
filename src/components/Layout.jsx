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
          <footer>Made with coffee by Sami</footer>
        </>
      )}
    </Container>
  );
};

export default Layout;
