import React from "react";
import { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mb-6">
      <input
        type="text"
        placeholder="Search books..."
        className="w-1/2 p-2 border rounded-l-lg outline-none"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 rounded-r-lg hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;