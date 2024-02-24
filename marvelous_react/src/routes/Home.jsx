import { useEffect, useState } from "react";
import styled from "react-router-dom";

function Home({ thumbnail }) {
  const [loading, setLoading] = useState(true);
  const [heros, setHeros] = useState([]);
  const getHeros = async () => {
    const json = await (
      await fetch(
        `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023`
      )
    ).json();
    setHeros(json.data.heros);
    setLoading(false);
  };
  useEffect(() => {
    getHeros();
  }, []);
  const thumbnailPath = `${thumbnail.path}.${thumbnail.extension}`;
  console.log(heros);
  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          {heros.map((hero) => (
            <div key={hero.id}>
              <img
                className={styled.img}
                src={`${thumbnail.path}.${thumbnail.extension}`}
                alt="Character Thumnails"
              />
              <h2>{hero.name}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
