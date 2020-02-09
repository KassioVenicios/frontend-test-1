import React, { useState, useEffect } from 'react';
import RestaurantItem from '../RestaurantItem';
import { businessesSearch } from '../../services/api';
import './style.css';

function Restaurants() {

  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    async function loadRestaurants() {
      const response = await businessesSearch('restaurants');
      setRestaurants(response.data.businesses);
    }
    loadRestaurants();
  }, []);

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

export default Restaurants;