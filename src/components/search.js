
import React from 'react';
import './search.css';
import search from './Save.png';
import nike from './nike.png';

const SearchComponent = ({ onClose }) => {
    return (
      <div className="search-overlay">
        <div className="search-container">
          <div className="input-container">
            <img src={search} alt="Search Icon" className="search-icon" />
            <input type="text" placeholder="Search" />
          </div>
          <button onClick={onClose} className='cancel-btn'>Cancel</button>
        </div>
        <div className="popular-terms">
          <span>air force 1</span>
          <span>jordan</span>
          <span>air jordan 1</span>
          <span>football shoes</span>
          <span>air max</span>
          <span>shoes</span>
          <span>running shoes</span>
          <span>slides</span>
        </div>
      </div>
    );
  };

  export default SearchComponent;