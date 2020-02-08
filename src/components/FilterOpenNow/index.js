import React from 'react';
import './style.css';

function FilterOpenNow() {

  return (
    <div className="open-now">
      <input id='openNow' type='checkbox' />
      <label for='openNow'>Open Now</label>
    </div>
  );
}

export default FilterOpenNow;