import RingLoader from "react-spinners/RingLoader";

const Loading = ({ loading }) => {
  return (
    <div className="h-[75vh] flex justify-center">
      <RingLoader
        size="150px"
        color="#334155"
        className="m-auto"
        aria-label="Loading Spinner"
        loading={loading}
      />
    </div>
  );
};

export default Loading;
