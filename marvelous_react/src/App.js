import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState();
  const [heros, setHeros] = useState([]);
  useEffect(() => {
    fetch(
      `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023`
    )
      .then((response) => response.json())
      .then((json) => {
        setHeros(json.data.results);
        setLoading(false);
      });
  }, []);
  return <div>{loading ? <h1>Loading</h1> : null}</div>;
}

export default App;
