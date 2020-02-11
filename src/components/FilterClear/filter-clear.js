import React from 'react';
import { FilterContext, filters, isDefaultFilter } from '../../utils/filter-context';
import deepCopy from '../../utils/deepCopy';
import './filter-clear.style.css';

class FilterClear extends React.Component {

  render() {
    return (
      <FilterContext.Consumer>
        {
          filterCtx => (
            <button className='filter-clear'
              onClick={() => filterCtx.changeFilters(deepCopy(filters.default))}
              disabled={isDefaultFilter(filterCtx.filters)}>
              Clear All
            </button>
          )
        }
      </FilterContext.Consumer>
    );
  }
}

export default FilterClear;