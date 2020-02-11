import React from 'react';
import FilterClear from '../FilterClear/filter-clear';
import FilterOpenNow from '../FilterOpenNow';
import FilterPrice from '../FilterPrice/filter-price';
import FilterCategories from '../FilterCategories/filter-categories';
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
          <FilterClear />
        </div>
      </div>
    </nav>
  );
}

export default FilterNav;