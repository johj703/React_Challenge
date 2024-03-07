import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { Database } from "../../db";

function BookDetail() {
  const { name, book: bookId } = useParams();
  const author = Database.find((author) => author.name === name);
  if (!author) {
    return <div>작가를 찾을 수 없습니다.</div>;
  }
  if (!bookId) {
    return <div>Something is wrong</div>;
  }

  const selectedBook = author.books[+bookId - 1];

  return (
    <div>
      <h1>{selectedBook.title}</h1>
      <div>
        <Link to={`/author/${name}/${bookId}/chapters`}>Chapters</Link>
      </div>
      <div>
        <Link to={`/author/${name}/${bookId}/characters`}>Characters</Link>
      </div>
      <Outlet />
    </div>
  );
}

export default BookDetail;
