import React from "react";

export default function SearchBar({ value, onChange, onSubmit }) {
  return (
    <form
      className="flex justify-center mb-8"
      onSubmit={e => {
        e.preventDefault();
        onSubmit();
      }}
    >
      <input
        type="text"
        className="w-full max-w-md px-4 py-2 rounded-l bg-white text-gray-900 focus:outline-none"
        placeholder="Search by title, author, or keyword..."
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-r hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
}