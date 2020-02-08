import React from 'react';
import FilterSelectBox from '../FilterSelectBox';
import './style.css';

function FilterCategories() {

  let datasource = [
    { value: 'All', text: 'All' },
    { value: 'Italian', text: 'Italian' },
    { value: 'Seafood', text: 'Seafood' },
    { value: 'Steakhouses', text: 'Steakhouses' },
    { value: 'Japanese', text: 'Japanese' },
    { value: 'American', text: 'American' },
    { value: 'Mexican', text: 'Mexican' },
    { value: 'Thai', text: 'Thai' },
  ];

  return (
    <FilterSelectBox
      width={200}
      placeholder='Categories'
      datasource={datasource}
    />
  );
}

export default FilterCategories;