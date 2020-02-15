import React from 'react';
import FilterSelectBox from '../FilterSelectBox/filter-selectbox';
import { priceFilter } from '../../utils/filter-context';
import './filter-price.style.css';

class FilterPrice extends React.Component {

  render() {
    return (
      <FilterSelectBox
        width={100}
        placeholder='Price'
        datasource={priceFilter}
      />
    );
  }
}

export default FilterPrice;