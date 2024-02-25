import { useParams } from "react-router-dom";
import { useEffect } from "react";

function Detail() {
  const { id } = useParams();
  const getHeros = async () => {
    const json = await (
      await fetch(
        `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`
      )
    ).json();
    console.log(json);
  };
  useEffect(() => {
    getHeros();
  }, []);
  return <h1>Detail</h1>;
}

export default Detail;
