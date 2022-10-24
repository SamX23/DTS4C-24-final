import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "./components/Layout";
import { AuthProvider } from "./hooks/context";
import Home from "./pages/home";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Wishlist from "./pages/wishlist";
import "react-toastify/dist/ReactToastify.css";
import { BubblyContainer } from "react-bubbly-transitions";
import Detail from "./pages/detail";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Route>

          <Route path="/login" element={<Login />} />
        </Routes>

        <ToastContainer
          position="bottom-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable={false}
          pauseOnHover={false}
          theme="dark"
        />

        <BubblyContainer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
