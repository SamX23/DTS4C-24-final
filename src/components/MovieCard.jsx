import { useRef } from "react";
import { toast } from "react-toastify";
import { TMDB_IMG } from "../hooks/env";
import { useStore } from "../hooks/store";

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
        width="100%"
        height="100%"
        className="rounded"
        loading="lazy"
      />
      <h2 className="my-2">{title}</h2>
      <p className="text-slate-500 overflow-hidden h-36 text-left">
        {overview}
      </p>

      {wishlist && (
        <button
          className="rounded bg-slate-400 px-3 py-2 mt-2"
          onClick={handleClick}
        >
          Wishlist
        </button>
      )}
    </div>
  );
};

export default MovieCard;
