import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Best Seller Authors</h1>
      <ul>
        <li>
          <Link to={"/"}>J.K.Rowling</Link>
        </li>
        <li>
          <Link to={"/about"}>J.R.R. Tolkien</Link>
        </li>
      </ul>
    </>
  );
}
export default Home;
