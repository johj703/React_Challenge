import { useParams, Link } from "react-router-dom";
import { Database } from "../../db";

function Authors() {
  const { name } = useParams();
  const writer = Database.find((writer) => writer.name === name);
  if (!writer) {
    return <div>작가를 찾을 수 없어요!</div>;
  }
  return (
    <div>
      <h1>{writer.name}</h1>
      <ul>
        {writer.books?.map((book) => (
          <li key={book.id}>
            <Link to={`Authors/${name}/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Authors;
