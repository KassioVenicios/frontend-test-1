import React from 'react';
import FilterSelectBox from '../FilterSelectBox';
import './style.css';

function FilterPrice() {

  let datasource = [
    { value: 'All', text: 'All' },
    { value: '$', text: '$' },
    { value: '$$', text: '$$' },
    { value: '$$$', text: '$$$' },
    { value: '$$$$', text: '$$$$' },
  ];

  return (
    <FilterSelectBox
      width={120}
      placeholder='Price'
      datasource={datasource}
    />
  );
}

export default FilterPrice;