import { useEffect, useState } from "react";
import { TMDB_IMG, TMDB_KEY, TMDB_URL } from "../hooks/env";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`${TMDB_URL}/trending/movie/week?api_key=${TMDB_KEY}`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setData(res.results);
      });
  }, []);

  return (
    <>
      <main className="my-14">
        <h1 className="font-bold">Movie list here</h1>

        <div className="flex gap-2 flex-wrap justify-center my-4">
          {data?.map((item) => (
            <div
              key={item.id}
              className="border border-l-slate-400 rounded p-4 hover:bg-slate-700 w-1/4"
            >
              <img
                src={`${TMDB_IMG}/${item.poster_path}`}
                alt={item.title}
                width="100%"
                height="100%"
                className="rounded"
              />
              <p>{item.title}</p>
              <p className="text-slate-500 overflow-hidden h-36">
                {item.overview}
              </p>
            </div>
          ))}
        </div>
      </main>

      <footer>Made with coffee by Sami</footer>
    </>
  );
};

export default Home;
