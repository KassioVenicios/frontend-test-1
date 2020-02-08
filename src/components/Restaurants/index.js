import React from 'react';
import RestaurantItem from '../RestaurantItem';
import restaurants from '../../utils/restaurants';
import './style.css';

function Restaurants() {

  return (
    <section className='container'>
      <section className='restaurants'>
        <h2>All Restaurants</h2>
        <div className='restaurants-list'>
        {
          restaurants.map(restaurant => (
            <RestaurantItem key={restaurant.name} restaurant={restaurant} />
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

export default Restaurants;