import { Link } from "react-router-dom";
import { Authors } from "../db";

function Home() {
  return (
    <>
      <h1>Best Seller Authors</h1>
      <ul>
        {Authors.map((Authors) => (
          <li key={Authors.id}>
            <Link to={`/Authors/${Authors.id}`}>{Authors.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
export default Home;
