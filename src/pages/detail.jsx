import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { TMDB_IMG, TMDB_KEY, TMDB_URL } from "../hooks/env";

const Detail = () => {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const {
    title,
    overview,
    poster_path,
    backdrop_path,
    release_date,
    status,
    vote_average,
    homepage,
  } = movie;

  const param = useParams();

  useEffect(() => {
    let isMounted = true;

    fetch(`${TMDB_URL}/movie/${param.id}?api_key=${TMDB_KEY}`)
      .then((res) => res.json())
      .then((res) => {
        if (isMounted) {
          console.log(res);
          setMovie(res);

          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      {loading ? (
        <Loading loading={loading} />
      ) : (
        <>
          <img
            src={`${TMDB_IMG}/${backdrop_path}`}
            alt={title}
            width="900px"
            height="300px"
            className="rounded bg-slate-400 border border-slate-800"
            loading="lazy"
          />

          <img
            src={`${TMDB_IMG}/${poster_path}`}
            alt={title}
            width="200px"
            height="300px"
            className="rounded bg-slate-400 border border-slate-800"
            loading="lazy"
          />

          <h1>{title}</h1>
          <p>{overview}</p>
          <p>{release_date}</p>
          <p>{status}</p>
          <p>{vote_average}</p>
          <a href={homepage} target="_blank" rel="noopeener">
            Link
          </a>
        </>
      )}
    </>
  );
};

export default Detail;
