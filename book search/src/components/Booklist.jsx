import React from "react";
import BookItem from "./BookItem";

function BookList({ books }) {
  if (!books || books.length === 0) {
    return <p className="text-center text-gray-500">No books found</p>;
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {books.map((book, index) => (
        <BookItem key={index} book={book} />
      ))}
    </div>
  );
}

export default BookList;