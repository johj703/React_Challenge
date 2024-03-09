import React from "react";
import { useParams } from "react-router-dom";
import { Database } from "../../db";

function ChapterList() {
  const { name, book: bookId } = useParams();
  const author = Database.find((author) => author.name === name);
  if (!author) {
    return <div>작가를 찾을 수 없습니다.</div>;
  }
  if (!bookId) {
    return <div>Something is wrong</div>;
  }

  const selectedBook = Database.books[+bookId - 1];

  return (
    <div>
      <ul>
        <li key={selectedBook.id}>
          <h2>{selectedBook.title}</h2>
          <ul>
            {selectedBook.chapters ? (
              selectedBook.chapters.map((chapters, index) => (
                <li key={index}>{chapters}</li>
              ))
            ) : (
              <li>챕터가 없습니다.</li>
            )}
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default ChapterList;
