import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import { TMDB_KEY, TMDB_URL } from "../hooks/env";
import { useStore } from "../hooks/store";

const Home = () => {
  const movieList = useStore((state) => state.movieList);
  const dispatch = useStore((state) => state.dispatch);

  useEffect(() => {
    let isMounted = true;
    fetch(`${TMDB_URL}/trending/movie/week?api_key=${TMDB_KEY}`)
      .then((res) => res.json())
      .then(
        (res) =>
          isMounted &&
          dispatch({
            type: "ADD_MOVIE",
            data: res.results,
          })
      );

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <h1 className="font-bold">Movie list here</h1>

      <div className="flex gap-2 flex-wrap justify-center my-4">
        {movieList?.map((item, index) => (
          <MovieCard data={item} key={index} wishlist />
        ))}
      </div>
    </>
  );
};

export default Home;
