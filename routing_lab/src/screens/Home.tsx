import { Link } from "react-router-dom";
import { Database } from "../db";

function Home() {
  return (
    <>
      <h1>Best Seller Authors</h1>
      <ul>
        {Database.map((Database) => (
          <li key={Database.id}>
            <Link to={`/Authors/${Database.id}`}>{Database.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
export default Home;
