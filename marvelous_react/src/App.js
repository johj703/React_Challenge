import { useState, useEffect } from "react";

function App() {
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
            <div key={hero.id}>
              <img
                src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                alt="thumbnail"
              />
              <h2>{hero.name}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
