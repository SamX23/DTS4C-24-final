import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context";

const Navigation = () => {
  const { logout } = useAuth();
  const [searchResult, setSearchResult] = useState("");

  return (
    <nav className="fixed left-0 top-0 px-4 py-3 bg-slate-700 w-full flex justify-between items-center">
      <h1>Nonton Movie</h1>
      <ul className="flex gap-2">
        <li>
          <Link to="wishlist">Wishlist</Link>
        </li>
        <li>
          <Link to="profile">profile</Link>
        </li>
      </ul>
      <div className="flex gap-2">
        <div>
          Icon Search
          <input
            type="text"
            placeholder="Search Movies"
            value={searchResult}
            onChange={(e) => setSearchResult(e.currentTarget.value)}
          />
        </div>
        <button onClick={() => logout()}>Logout</button>
      </div>
    </nav>
  );
};

export default Navigation;
