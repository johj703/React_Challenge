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
  return <div>{loading ? <h1>Loading</h1> : null}</div>;
}

export default App;
