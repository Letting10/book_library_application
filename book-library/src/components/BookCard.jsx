import React from "react";

// Array of pastel colors for books without covers
const pastelColors = [
  "bg-pink-200",
  "bg-blue-200",
  "bg-green-200",
  "bg-purple-200",
  "bg-yellow-200",
  "bg-indigo-200",
];

function getRandomPastel() {
  return pastelColors[Math.floor(Math.random() * pastelColors.length)];
}

export default function BookCard({ book }) {
  const coverId = book.cover_i;
  const coverUrl = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : null;
  const pastelBg = getRandomPastel();

  const olid = book.edition_key?.[0];

  return (
    <div className="bg-white rounded-lg shadow p-2 flex flex-col items-center transition-transform hover:scale-101 hover:shadow-lg cursor-pointer w-full max-w-[180px]">
      {coverUrl ? (
        <img
          src={coverUrl}
          alt={book.title}
          className="w-32 h-48 object-cover rounded mb-2 shadow"
        />
      ) : (
        <div
          className={`w-32 h-48 flex items-center justify-center rounded mb-1 ${pastelBg}`}
        >
          <span className="text-xs font-semibold text-gray-500 text-center px-0.1">
            {book.title}
          </span>
        </div>
      )}
      <h2 className="text-xs font-bold text-gray-900 text-center mb-0.1 truncate w-full">
        {book.title}
      </h2>
      <p className="text-xs text-gray-600 text-center font-medium mb-2">
        {book.author_name?.join(", ") || "Unknown Author"}
      </p>

      {/* Read Button */}
      {olid && (
        <a
          href={`https://openlibrary.org/books/${olid}/reader`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-xs font-semibold w-full text-center"
        >
          Read
        </a>
      )}
    </div>
  );
}
