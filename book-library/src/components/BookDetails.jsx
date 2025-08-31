import React from "react";

export default function BookDetails({ book, onClose }) {
  const olid = book.cover_edition_key || book.edition_key?.[0];
  const readUrl = olid
    ? `https://openlibrary.org/books/${olid}/reader`
    : null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center p-4 z-50 overflow-auto">
      <button
        onClick={onClose}
        className="self-end mb-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Close
      </button>
      {readUrl ? (
        <iframe
          src={readUrl}
          className="w-full max-w-4xl h-[80vh] rounded shadow-lg"
          title={book.title}
        ></iframe>
      ) : (
        <p className="text-white text-center text-lg">
          Sorry, this book cannot be read online.
        </p>
      )}
    </div>
  );
}
