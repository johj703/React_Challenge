import { useState } from "react";

function App() {
  const [loading, setLoading] = useState();
  return <div>{loading ? <h1>Loading</h1> : null}</div>;
}

export default App;
