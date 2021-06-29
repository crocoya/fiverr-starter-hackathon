import React from 'react';

function Search() {
  return (
    <div className='search-bar-package'>
      <form>
        <span className='span-form'></span>
        <input
          type='search'
          autocomplete='off'
          placeholder='Find Services'
        ></input>
        <button>Search</button>
      </form>
    </div>
  );
}

export default Search;
