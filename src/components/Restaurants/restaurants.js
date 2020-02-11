import React from 'react';
import RestaurantItem from '../RestaurantItem';
import { FilterContext, filters } from '../../utils/filter-context';
import { priceFilter } from '../../utils/filter-context';
import './restaurants.style.css';

class Restaurants extends React.Component {

  render() {
    const { restaurants } = this.props;
    return (
      <section className='container'>
        <section className='restaurants'>
          <FilterContext.Consumer>
            { filterCtx => (
              <h2>
              {
                filterCtx.filters.categories ?
                filterCtx.filters.categories : 'All'
              } Restaurants {
                filterCtx.filters.price !== filters.default.price ?
                '(' + priceFilter[filterCtx.filters.price].text + ')' : ''
              }
              </h2>
            )}
          </FilterContext.Consumer>
          <div className='restaurants-list'>
          {
            restaurants.map(restaurant => (
              <RestaurantItem key={restaurant.id} restaurant={restaurant} />
            ))
          }
          </div>
          <div className='load-more'>
            Load More
          </div>
        </section>
      </section>
    );
  }
}

export default Restaurants;