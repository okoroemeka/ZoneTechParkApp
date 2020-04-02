import React, { useState } from 'react';

const SerachBar = (props) => {
  const [searchText, setsearchText] = useState('');
  return (
    <div className="searchBar">
      <span className="title">Movies</span>
      <div className="search">
        <input
          type="text"
          placeholder="Search..."
          className="input__box"
          onChange={e => setsearchText(e.target.value)}
        />
        <button type="submit" onClick={() => props.handleClick(searchText)}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SerachBar;
