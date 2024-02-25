import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [heros, setHeros] = useState([]);
  const { id } = useParams();
  const getHeros = async () => {
    const json = await (
      await fetch(
        `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`
      )
    ).json();
    setHeros(json.data);
    setLoading(false);
    console.log(json);
  };
  useEffect(() => {
    getHeros();
  }, []);
  console.log(heros);
  return (
    <div>
      <h1>Detail</h1>
      <div>
        {loading ? (
          <h1>Loading</h1>
        ) : (
          <div>
            <img
              src={`${heros.results[0].thumbnail.path}.${heros.results[0].thumbnail.extension}`}
              alt="Thumbnail"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Detail;
