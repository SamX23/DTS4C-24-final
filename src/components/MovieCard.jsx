import { useRef } from "react";
import { FaRegBookmark } from "react-icons/fa";
import { BiDetail } from "react-icons/bi";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { TMDB_IMG } from "../hooks/env";
import { useStore } from "../hooks/store";
import Button from "./Button";

const MovieCard = ({ data, wishlist = false }) => {
  const { id, title, poster_path, overview } = data;
  const dispatch = useStore((state) => state.dispatch);
  const movieCard = useRef();

  const handleClick = (e) => {
    dispatch({
      type: "ADD_TO_WISHLIST",
      data: {
        id,
        title,
        poster_path,
        overview,
      },
    });

    toast.success(`${title} added to wishlist!`, {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div
      ref={movieCard}
      className="border border-l-slate-400 rounded p-4 hover:bg-slate-700 w-1/4 flex flex-col justify-between"
    >
      <img
        src={`${TMDB_IMG}/${poster_path}`}
        alt={title}
        width="200px"
        height="300px"
        className="rounded bg-slate-400"
        loading="lazy"
      />
      <h2 className="my-2">{title}</h2>
      <p className="text-slate-500 overflow-hidden h-36 text-left">
        {overview}
      </p>

      <div className="flex flex-col lg:flex-row justify-between items-center mt-2 gap-2">
        <Button
          navigation
          to={`/detail/${id}`}
          className="rounded bg-emerald-600 px-3 py-1"
        >
          <BiDetail className="mr-2" />
          Details
        </Button>
        {wishlist && (
          <Button
            className="rounded bg-slate-600 px-3 py-1"
            onClick={handleClick}
          >
            <FaRegBookmark className="mr-2" />
            Wishlist
          </Button>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
