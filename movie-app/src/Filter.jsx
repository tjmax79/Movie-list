// src/Filter.js
import React from 'react';

function Filter({ filterTitle, filterRating }) {
  return (
    <div className="filter">
      <input 
        type="text" 
        placeholder="Filter by title" 
        onChange={(e) => filterTitle(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Filter by rating" 
        onChange={(e) => filterRating(e.target.value)} 
      />
    </div>
  );
}

export default Filter;
