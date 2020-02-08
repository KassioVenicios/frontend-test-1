import React from 'react';
import RestaurantItem from '../RestaurantItem';
import './style.css';

function Restaurants() {

  const restaurants = [{
    name: 'Very Long Name Restaurants Number 1 In List',
    rating: 4,
    category: ['Thai'],
    openNow: true,
    priceRange: '$$$$',
    images: [],
  }, {
    name: 'Restaurant 2',
    rating: 3.5,
    category: ['Seafood'],
    openNow: false,
    priceRange: '$',
    images: [],
  }, {
    name: 'Restaurant 3',
    rating: 3.5,
    category: ['Japaneese'],
    openNow: true,
    priceRange: '$$$',
    images: [],
  }, {
    name: 'Restaurant 4',
    rating: 3.5,
    category: ['Italian'],
    openNow: true,
    priceRange: '$$',
    images: [],
  }, {
    name: 'Restaurant 5',
    rating: 3,
    category: ['American'],
    openNow: false,
    priceRange: '$',
    images: [],
  }, {
    name: 'Restaurant 6',
    rating: 4,
    category: ['Mexican'],
    openNow: true,
    priceRange: '$$$',
    images: [],
  }, {
    name: 'Restaurant 7',
    rating: 3,
    category: ['Steakhouses'],
    openNow: true,
    priceRange: '$$$',
    images: [],
  }, {
    name: 'Restaurant 8',
    rating: 3,
    category: ['Mexican'],
    openNow: true,
    priceRange: '$$$$',
    images: [],
  }];

  return (
    <section className='container'>
      <header className='restaurants'>
        <h2>All Restaurants</h2>
        <div className='restaurants-list'>
        {
          restaurants.map(restaurant => (
            <RestaurantItem key={restaurant.name} restaurant={restaurant} />
          ))
        }
        </div>
      </header>
    </section>
  );
}

export default Restaurants;