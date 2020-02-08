import React from 'react';
import './style.css';

function FilterOpenNow() {

  return (
    <div className="filter open-now">
      <input id='openNow' type='checkbox' />
      <label htmlFor='openNow'>Open Now</label>
    </div>
  );
}

export default FilterOpenNow;