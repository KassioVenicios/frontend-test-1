import React from 'react';
import RestaurantItem from '../RestaurantItem/restaurant-item';
import RestaurantItemPlaceholder from '../RestaurantItemPlaceholder/restaurant-item-placeholder';
import { FilterContext, filters } from '../../utils/filter-context';
import { priceFilter } from '../../utils/filter-context';
import './restaurants.style.css';

class Restaurants extends React.Component {

  render() {
    const { searching, restaurants, selectRestaurant } = this.props;
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
          { searching ?
            Array.from(Array(8).keys()).map(item => (
              <RestaurantItemPlaceholder key={item} />
            ))
            :
            restaurants.map(restaurant => (
              <RestaurantItem
                key={restaurant.id}
                restaurant={restaurant}
                selectRestaurant={selectRestaurant} />
            ))
          }
          </div>
          <FilterContext.Consumer>
            { filterCtx => (
              <div className='load-more' onClick={() => {
                let filters = filterCtx.filters;
                filters.offset += filters.limit;
                filterCtx.changeFilters(filters);
              }}>
                Load More
              </div>
            )}
          </FilterContext.Consumer>
        </section>
      </section>
    );
  }
}

export default Restaurants;