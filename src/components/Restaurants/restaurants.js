import React from 'react';
import RestaurantItem from '../RestaurantItem/restaurant-item';
import RestaurantItemPlaceholder from '../RestaurantItemPlaceholder/restaurant-item-placeholder';
import { FilterContext, filters } from '../../utils/filter-context';
import { priceFilter } from '../../utils/filter-context';
import './restaurants.style.css';

class Restaurants extends React.Component {

  arrayFromNumber(n) {
    return Array.from(Array(n).keys());
  }

  loadMore(filterCtx) {
    let filters = filterCtx.filters;
    filters.offset += filters.limit;
    filterCtx.changeFilters(filters, true);
  }

  renderTitle(filter) {
    let text = '';
    text += filter.categories ? filter.categories : 'All';
    text += ' Restaurants ';
    text += filter.price !== filters.default.price ?
      `(${priceFilter[filter.price].text})` : '';
    return text;
  }

  renderTotal() {
    return `${this.props.totalResults} results`;
  }

  renderPlaceholder() {
    return this.arrayFromNumber(filters.default.limit).map(item => (
      <RestaurantItemPlaceholder key={item} />
    ));
  }

  renderRestaurants() {
    return this.props.restaurants.map(restaurant => (
      <RestaurantItem
        key={restaurant.id}
        restaurant={restaurant}
        selectRestaurant={this.props.selectRestaurant} />
    ));
  }

  renderBoth() {
    return (
      <>
        <>{this.renderRestaurants()}</>
        <>{this.renderPlaceholder()}</>
      </>
    );
  }

  render() {
    const { loadMore, searching } = this.props;
    return (
      <section className='container'>
        <FilterContext.Consumer>
          { filterCtx => (
            <section className='restaurants'>
              <header>
                <h2>{this.renderTitle(filterCtx.filters)}</h2>
                <h4>{this.renderTotal()}</h4>
              </header>
              <div className='restaurants-list'>
                {
                  searching ?
                    this.renderPlaceholder() :
                    loadMore ?
                      this.renderBoth() :
                      this.renderRestaurants()
                }
              </div>
              <div className='load-more'
                onClick={() => this.loadMore(filterCtx)}>
                Load More
              </div>
            </section>
          )}
        </FilterContext.Consumer>
      </section>
    );
  }
}

export default Restaurants;