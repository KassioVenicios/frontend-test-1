import React from 'react';
import './filter-open-now.style.css';
import { FilterContext } from '../../utils/filter-context';

class FilterOpenNow extends React.Component {

  check(context) {
    let filters = context.filters;
    filters.open_now = !context.filters.open_now;
    context.changeFilters(filters);
  }

  render() {
    return (
      <FilterContext.Consumer>
        {filterCtx => (
          <div className='filter open-now'
            onClick={() => this.check(filterCtx)}>
            <span className='circle-bordered'>
              <span className={
                filterCtx.filters.open_now ?
                'circle checked' : ''
              }></span>
            </span>
            <span className='label'>Open Now</span>
          </div>
        )}
      </FilterContext.Consumer>
    );
  }
}

export default FilterOpenNow;