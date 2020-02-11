import React from 'react';
import { FilterContext, filters } from '../../utils/filter-context';
import deepCopy from '../../utils/deepCopy';
import './filter-clear.style.css';

class FilterClear extends React.Component {

  isDefaultFilter(currentFilter) {
    return filters.default.categories === currentFilter.categories &&
      filters.default.price === currentFilter.price &&
      filters.default.open_now === currentFilter.open_now;
  }

  render() {
    return (
      <FilterContext.Consumer>
        {
          filterCtx => (
            <button className='filter-clear'
              onClick={() => filterCtx.changeFilters(deepCopy(filters.default))}
              disabled={this.isDefaultFilter(filterCtx.filters)}>
              Clear All
            </button>
          )
        }
      </FilterContext.Consumer>
    );
  }
}

export default FilterClear;