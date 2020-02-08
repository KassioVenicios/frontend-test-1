import React from 'react';
import FilterClear from '../FilterClear';
import FilterOpenNow from '../FilterOpenNow';
import FilterPrice from '../FilterPrice';
import FilterCategories from '../FilterCategories';
import './style.css';

function FilterNav() {

  return (
    <nav className='filter-nav'>
      <div className='container'>
        <div className='content'>
          <span className='by'>Filter By:</span>
          <FilterOpenNow />
          <FilterPrice />
          <FilterCategories />
          <FilterClear disabled={true} />
        </div>
      </div>
    </nav>
  );
}

export default FilterNav;