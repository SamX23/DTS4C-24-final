import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const param = useParams();

  useEffect(() => {
    console.log(param);
  }, []);

  return (
    <>
      <h1>Detail</h1>
    </>
  );
};

export default Detail;
