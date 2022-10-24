import { useMovieStore } from "../hooks/store";

const Profile = () => {
  const user = useMovieStore((state) => state.user);

  return (
    <>
      <h1>Hello, {user.email}</h1>
    </>
  );
};

export default Profile;
