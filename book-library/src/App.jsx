import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookCard from './components/BookCard';
import BookDetails from './components/BookDetails';
import SearchBar from './components/SearchBar';

export default function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (query) => {
    if (!query) return;
    setLoading(true);
    setError('');

    try {
      const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`);
      const data = await res.json();
      if (data.totalItems > 0 && data.items) {
        setBooks(data.items);
      } else {
        setBooks([]);
        setError('No books found.');
      }
    } catch {
      setBooks([]);
      setError('Failed to fetch books. Try again.');
    }

    setLoading(false);
  };

  return (
    <Router>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-4">Book Library</h1>
        <Routes>
          <Route path="/" element={
            <>
              <SearchBar onSearch={handleSearch} />
              {loading && <p className="text-center">Loading books...</p>}
              {error && <p className="text-center text-red-500">{error}</p>}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {books.map(book => (
                  <BookCard key={book.id} book={book} />
                ))}
              </div>
            </>
          }/>
          <Route path="/book/:id" element={<BookDetails />} />
        </Routes>
      </div>
    </Router>
  );
}
