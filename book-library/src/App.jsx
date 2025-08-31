import React, { useState } from "react";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import BookCard from "./components/BookCard";

export default function App() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");

  const fetchBooks = async () => {
    if (!query) return;
    setError("");
    setBooks([]);
    try {
      const response = await fetch(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`
      );
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      if (data.docs.length === 0) {
        setError("No books found.");
      } else {
        setBooks(data.docs);
      }
    } catch (err) {
      setError("Failed to fetch books. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Hero />
      <div className="max-w-6xl mx-auto px-4 py-6">
        <SearchBar value={query} onChange={setQuery} onSubmit={fetchBooks} />
        {error && (
          <div className="text-red-600 text-center mb-4 font-semibold bg-red-100 rounded p-2">
            {error}
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {books.map((book) => (
            <BookCard key={book.key} book={book} />
          ))}
        </div>
      </div>
    </div>
  );
}
