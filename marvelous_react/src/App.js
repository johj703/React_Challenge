import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState();
  useEffect(() => {
    fetch(
      `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023`
    )
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, []);
  return <div>{loading ? <h1>Loading</h1> : null}</div>;
}

export default App;
