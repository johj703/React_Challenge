import Heroes from "../components/Heroes";
import { useState, useEffect } from "react";

function Home() {
  const [loading, setLoading] = useState();
  const [heroes, setHeros] = useState([]);
  const getHeroes = async () => {
    const json = await (
      await fetch(
        `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023`
      )
    ).json();
    setHeros(json.data.results);
    setLoading(false);
  };
  useEffect(() => {
    getHeroes();
  }, []);
  // const thumbnailPath = `${heros.thumbnail.path}.${heros.thumbnail.extension};`;
  return (
    <div>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          {heroes.map((hero) => (
            <Heroes
              id={hero.id}
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
