import React, { useState } from "react";
import { Routes, Route } from "react-router-dom"; // ✅ Router नहीं, सिर्फ Routes & Route
import SearchBar from "./components/SearchBar";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import Loader from "./components/Loader";

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchBooks = async (query) => {
    setLoading(true);
    try {
      const res = await fetch(`https://openlibrary.org/search.json?q=${query}`);
      const data = await res.json();
      setBooks(data.docs);
    } catch (err) {
      console.error("Error fetching books", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">📚 Book Search App</h1>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchBar onSearch={searchBooks} />
              {loading ? <Loader /> : <BookList books={books} />}
            </>
          }
        />
        <Route path="/book/:id" element={<BookDetails />} />
      </Routes>
    </div>
  );
}

export default App;
