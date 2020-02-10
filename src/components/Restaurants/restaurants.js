import React from 'react';
import RestaurantItem from '../RestaurantItem';
import './restaurants.style.css';

class Restaurants extends React.Component {

  render() {
    const { restaurants } = this.props;
    return (
      <section className='container'>
        <section className='restaurants'>
          <h2>All Restaurants</h2>
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