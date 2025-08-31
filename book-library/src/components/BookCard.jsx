import React from 'react';
import { Link } from 'react-router-dom';

export default function BookCard({ book }) {
  const coverUrl = book.volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/150?text=No+Cover';
  const title = book.volumeInfo.title || 'Untitled';
  const authors = book.volumeInfo.authors?.join(', ') || 'Unknown Author';
  const publisher = book.volumeInfo.publisher || 'Unknown Publisher';

  // Use Google Books ID as identifier
  const identifier = book.id;

  return (
    <Link
      to={`/book/${identifier}`}
      className="bg-white rounded-lg shadow p-2 flex flex-col items-center transition-transform hover:scale-101 hover:shadow-lg cursor-pointer w-full max-w-[180px]"
    >
      <img
        src={coverUrl}
        alt={title}
        className="w-32 h-48 object-cover rounded mb-1 shadow"
      />
      <h2 className="text-[20px] font-bold text-gray-900 text-center mb-0.5 truncate w-full">{title}</h2>
      <p className="text-[12px] text-gray-600 text-center font-medium mb-0.5">{authors}</p>
      <p className="text-[12px] text-gray-500 text-center font-medium mb-1">{publisher}</p>
      <span className="mt-auto px-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 text-[10px] font-semibold w-full text-center">
        Read
      </span>
    </Link>
  );
}
