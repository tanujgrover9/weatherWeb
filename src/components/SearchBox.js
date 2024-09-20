// src/components/SearchBox.js
import React, { useState } from 'react';

const SearchBox = ({ setCity }) => {
  const [search, setSearch] = useState('');

  const handleSearch = () => {
    setCity(search);
    setSearch('');
  };

  return (
    <div className="search-box">
      <label className='label'>Weather.</label><br/>
      <input
        type="text"
        placeholder="Enter city"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBox;
