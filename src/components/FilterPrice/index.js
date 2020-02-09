import React from 'react';
import FilterSelectBox from '../FilterSelectBox';
import { priceFilter } from '../../services/api';
import './style.css';

function FilterPrice() {

  return (
    <FilterSelectBox
      width={120}
      placeholder='Price'
      datasource={priceFilter}
    />
  );
}

export default FilterPrice;