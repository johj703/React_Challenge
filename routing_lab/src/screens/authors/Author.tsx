import { useParams } from "react-router-dom";

function Author() {
  const { authorId } = useParams();
  return <h1>Author</h1>;
}
export default Author;
