import Heros from "../components/Heros";
import { useState, useEffect } from "react";

function Home() {
  const [loading, setLoading] = useState();
  const [heros, setHeros] = useState([]);
  const getHeros = async () => {
    const json = await (
      await fetch(
        `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023`
      )
    ).json();
    setHeros(json.data.results);
    setLoading(false);
  };
  useEffect(() => {
    getHeros();
  }, []);
  // const thumbnailPath = `${heros.thumbnail.path}.${heros.thumbnail.extension};`;
  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          {heros.map((hero) => (
            <Heros
              key={hero.id}
              thumbnail={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
              name={hero.name}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
