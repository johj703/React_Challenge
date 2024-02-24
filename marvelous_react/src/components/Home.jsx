import { useState } from "react";

function Home() {
  const [loading, setLoading] = useState(true);
  return <div>{loading ? <h1>Loading</h1> : null}</div>;
}

export default Home;
