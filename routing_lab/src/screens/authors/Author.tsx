import { useParams } from "react-router-dom";
import { Database } from "../../db";

function Author() {
  const { name } = useParams();
  const writer = Database.find((writer) => writer.name === name);
  if (!writer) {
    return <div>작가를 찾을 수 없어요!</div>;
  }
  return (
    <div>
      <h1>{writer.name}</h1>
    </div>
  );
}
export default Author;
