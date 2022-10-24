import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import MovieCard from "../components/MovieCard";
import { TMDB_KEY, TMDB_URL } from "../hooks/env";
import { useMovieStore } from "../hooks/store";

const Home = () => {
  const movieList = useMovieStore((state) => state.movieList);
  const dispatch = useMovieStore((state) => state.dispatch);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    fetch(`${TMDB_URL}/trending/movie/week?api_key=${TMDB_KEY}`)
      .then((res) => res.json())
      .then((res) => {
        if (isMounted) {
          dispatch({
            type: "ADD_MOVIE",
            data: res.results,
          });
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <div className="flex gap-2 flex-wrap justify-center my-4">
        <Loading loading={loading} />
        {!loading &&
          movieList?.map((item, index) => (
            <MovieCard data={item} key={index} wishlist />
          ))}
      </div>
    </>
  );
};

export default Home;
