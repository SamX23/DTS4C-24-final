import MovieCard from "../components/MovieCard";
import { useStore } from "../hooks/store";

const Wishlist = () => {
  const wishlist = useStore((state) => state.wishlist);

  return (
    <>
      <h1 className="font-bold">Your Wistlist</h1>

      <div className="flex gap-2 flex-wrap justify-center my-4">
        {wishlist?.map((item, index) => (
          <MovieCard data={item} key={index} />
        ))}
      </div>
    </>
  );
};

export default Wishlist;
