import React from 'react';
import StarRatings from 'react-star-ratings';
import './style.css';

function RestaurantItem({ restaurant }) {

  return (
    <article className='restaurant'>
      <figure>
        <img src={restaurant.images[0]} alt='' />
      </figure>
      <div className='restaurant-name'>{restaurant.name}</div>
      <StarRatings
        name='rating'
        starSpacing='0'
        starDimension='20px'
        rating={restaurant.rating}
        starRatedColor='#002b56'
        starEmptyColor='#fff'
        starStrokeColor='#002b56'
        starStrokeWidth='3px'
        numberOfStars={5}
      />
      <div className='restaurant-info'>
        <span>
          {restaurant.category[0]}&nbsp;•&nbsp;{restaurant.priceRange}
        </span>
        <span className={restaurant.openNow ? 'right open' : 'right closed' }>
          {restaurant.openNow ? 'open now' : 'closed'}
        </span>
      </div>
      <div className='learn-more'>
        <span>Lean More</span>
      </div>
    </article>
  );
}

export default RestaurantItem;