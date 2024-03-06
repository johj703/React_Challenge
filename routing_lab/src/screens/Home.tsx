import { Authors } from "../db";

function Home() {
  return (
    <>
      <h1>Best Seller Authors</h1>
      <ul>
        {Authors.map((Authors) => (
          <li key={Authors.id}>{Authors.name}</li>
        ))}
      </ul>
    </>
  );
}
export default Home;
