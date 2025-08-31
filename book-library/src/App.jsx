import React, { useState } from "react";
import Hero from "./assets/components/Hero";
import SearchBar from "./assets/components/SearchBar";
import BookCard from "./assets/components/BookCard";

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
    <div className="min-h-screen bg-gray-900">
      <Hero />
      <SearchBar
        value={query}
        onChange={setQuery}
        onSubmit={fetchBooks}
      />
      {error && <div className="text-red-500 text-center">{error}</div>}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
        {books.map(book => (
          <BookCard key={book.key} book={book} />
        ))}
      </div>
    </div>
  );
}