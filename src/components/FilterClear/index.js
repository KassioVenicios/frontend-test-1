import React from 'react';
import './style.css';

function FilterClear(props) {

  return (
    <button
      className='filter-clear'
      disabled={props.disabled}>
        Clear All
    </button>
  );
}

export default FilterClear;