import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/context";
import { FaSearch, FaSignOutAlt, FaRegBookmark, FaUser } from "react-icons/fa";
import Button from "./Button";

const Navigation = () => {
  const { logout } = useAuth();
  const [searchResult, setSearchResult] = useState("");

  return (
    <nav className="fixed left-0 top-0 px-4 py-3 bg-slate-700 w-full flex justify-between items-center">
      <Link to="/">
        <h1 className="font-bold uppercase">Nonton Movie</h1>
      </Link>
      <div className="flex bg-white rounded-full p-2 text-black items-center">
        <FaSearch className="mx-2" />
        <input
          type="text"
          placeholder="Search Movies"
          value={searchResult}
          onChange={(e) => setSearchResult(e.currentTarget.value)}
          className="focus:outline-none"
        />
      </div>
      <div className="flex gap-3">
        <Button to="wishlist" navigation>
          <FaRegBookmark className="mr-2" />
          Wishlist
        </Button>
        <Button to="profile" navigation>
          <FaUser className="mr-2" />
          Profile
        </Button>
        <Button onClick={() => logout()}>
          <FaSignOutAlt className="mr-2" />
          Logout
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
