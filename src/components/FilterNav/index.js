import React from 'react';
import FilterClear from '../FilterClear';
import FilterOpenNow from '../FilterOpenNow';
import './style.css';

function FilterNav() {

  return (
    <nav className='filter-nav'>
      <div className='container'>
        <div className='content'>
          <span>Filter By:</span>
          <FilterOpenNow />
          <FilterClear disabled={true} />
        </div>
      </div>
    </nav>
  );
}

export default FilterNav;