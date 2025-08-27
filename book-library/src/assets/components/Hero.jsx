import React from "react";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
      <div className="text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold text-white mb-6">
          Welcome to Book Library 📚
        </h1>
        <p className="text-lg text-gray-200 mb-8">
          Discover, manage, and explore your favorite books in one place.
        </p>
       </div>
    </section>
  );
}
