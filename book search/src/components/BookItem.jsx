// import React from "react";
// import { Link } from "react-router-dom";

// function BookItem({ book }) {
//   // ✅ Backticks use for template string
//   const coverUrl = book.cover_i
//     ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
//     : "https://via.placeholder.com/150";

//   // ✅ Proper path interpolation
//   const bookId = book.key.split("/").pop();

//   return (
//     <Link to={`/book/${bookId}`}>
//       <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
//         <img
//           src={coverUrl}
//           alt={book.title}
//           className="w-full h-48 object-cover rounded-lg"
//         />
//         <h2 className="text-lg font-semibold mt-2">{book.title}</h2>
//         <p className="text-gray-600 text-sm">
//           {book.author_name ? book.author_name.join(", ") : "Unknown Author"}
//         </p>
//       </div>
//     </Link>
//   );
// }

// export default BookItem;
import React from "react";
import { Link } from "react-router-dom";
function BookItem({ book }) {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "https://via.placeholder.com/150";

  // Google search URL for the book title
  const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(book.title)}`;

  return (
    <a
      href={googleSearchUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer">
        <img
          src={coverUrl}
          alt={book.title}
          className="w-full h-48 object-cover rounded-lg"
        />
        <h2 className="text-lg font-semibold mt-2">{book.title}</h2>
        <p className="text-gray-600 text-sm">
          {book.author_name ? book.author_name.join(", ") : "Unknown Author"}
        </p>
      </div>
    </a>
  );
}

export default BookItem;