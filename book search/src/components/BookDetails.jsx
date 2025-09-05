import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Loader from "./Loader";

function BookDetails() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      setLoading(true);
      const res = await fetch('https://openlibrary.org/works/${id}.json');
      const data = await res.json();
      setBook(data);
      setLoading(false);
    };
    fetchBook();
  }, [id]);

  if (loading) return <Loader />;

  if (!book) return <p className="text-center">Book not found</p>;

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md">
      <Link to="/" className="text-blue-500 underline mb-4 inline-block">
        ← Back to Search
      </Link>
      <h1 className="text-2xl font-bold mb-2">{book.title}</h1>
      {book.description && (
        <p className="mb-4 text-gray-700">
          {typeof book.description === "string"
            ? book.description
            : book.description.value}
        </p>
      )}
      {book.subjects && (
        <div>
          <h2 className="font-semibold mb-1">Subjects:</h2>
          <p className="text-gray-600">{book.subjects.join(", ")}</p>
        </div>
      )}
    </div>
  );
}

export default BookDetails;