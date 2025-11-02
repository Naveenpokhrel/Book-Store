import React, { useState } from 'react';
// You would typically use an icon library like 'react-icons' for the search icon
// import { FiSearch } from 'react-icons/fi';

const genres = ['All Genres', 'Fiction', 'Non-Fiction', 'Mystery', 'Fantasy'];
const sortOptions = ['Sort By Title', 'Author', 'Price (Low to High)', 'Newest'];

export default function SearchAndFilter() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState(genres[0]);
  const [selectedSort, setSelectedSort] = useState(sortOptions[0]);

  // Handler functions (for real filtering logic)
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    // In a real app, you'd trigger a filter/search function here
    // e.g., filterBooks(event.target.value, selectedGenre, selectedSort);
  };

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
    // In a real app, you'd trigger a filter/search function here
  };

  const handleSortChange = (event) => {
    setSelectedSort(event.target.value);
    // In a real app, you'd trigger a filter/search function here
  };

  return (
    <div className="flex flex-col md:flex-row gap-4 p-4 bg-white shadow-md rounded-lg max-w-6xl mx-auto">
      {/* 1. Search Bar */}
      <div className="relative flex-grow">
        {/* Placeholder for Search Icon */}
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
          {/* <FiSearch className="w-5 h-5" /> */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
          </svg>
        </div>
        
        <input
          type="text"
          placeholder="Search by title, author, or keyword..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
        />
      </div>

      {/* 2. Filter Controls (Genre and Sort) */}
      <div className="flex space-x-4">
        
        {/* Genre Filter Dropdown */}
        <select 
          value={selectedGenre}
          onChange={handleGenreChange}
          className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          {genres.map(genre => (
            <option key={genre} value={genre}>{genre}</option>
          ))}
        </select>

        {/* Sort By Dropdown */}
        <select
          value={selectedSort}
          onChange={handleSortChange}
          className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          {sortOptions.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
    </div>
  );
}