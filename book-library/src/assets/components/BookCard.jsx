import React from "react";

export default function BookCard({ book }) {
  // Open Library cover image URL pattern
  const coverId = book.cover_i;
  const coverUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : "https://via.placeholder.com/128x193?text=No+Cover";

  return (
    <div className="bg-white p-4 rounded shadow flex flex-col items-center">
      <img
        src={coverUrl}
        alt={book.title}
        className="w-32 h-48 object-cover mb-4 rounded"
      />
      <h2 className="font-bold text-center">{book.title}</h2>
      <p className="text-sm text-gray-700 text-center">
        {book.author_name?.join(", ") || "Unknown Author"}
      </p>
      <p className="text-xs text-gray-500 text-center">
        {book.publisher?.[0] || "Unknown Publisher"}
      </p>
    </div>
  );
}