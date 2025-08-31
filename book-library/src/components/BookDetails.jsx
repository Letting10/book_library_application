import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function BookDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!id) return;

    fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setError('No details found for this book.');
        } else {
          setBook(data);
        }
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch book details.');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading book details...</p>;
  if (error) return (
    <div className="p-4">
      <button className="mb-4" onClick={() => navigate(-1)}>Back</button>
      <p>{error}</p>
    </div>
  );

  const info = book.volumeInfo;

  return (
    <div className="p-4">
      <button className="mb-4" onClick={() => navigate(-1)}>Back</button>
      <h1 className="text-xl font-bold mb-2">{info.title}</h1>
      <p><strong>Authors:</strong> {info.authors?.join(', ')}</p>
      <p><strong>Publisher:</strong> {info.publisher}</p>
      <p><strong>Published:</strong> {info.publishedDate}</p>
      <p><strong>Pages:</strong> {info.pageCount}</p>
      <p><strong>Categories:</strong> {info.categories?.join(', ')}</p>
      <p><strong>Description:</strong> {info.description}</p>
    </div>
  );
}
