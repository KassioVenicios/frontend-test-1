import React from 'react';
import FilterClear from '../FilterClear';
import './style.css';

function FilterNav() {

  return (
    <nav>
      <div className="container">
        <div className="content">
          <span>Filter By:</span>
          <FilterClear disabled={true} />
        </div>
      </div>
    </nav>
  );
}

export default FilterNav;