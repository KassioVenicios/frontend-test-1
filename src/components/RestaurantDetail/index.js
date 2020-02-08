import React from 'react';
import StarRatings from 'react-star-ratings';
import './style.css';

function RestaurantDetail({ restaurant }) {
  return (
    <>
    <div className='container'>
      <header className='restaurant'>
        <div className='restaurant-name'>
          {restaurant.name}
        </div>
        <StarRatings
          name='rating'
          starSpacing='2px'
          starDimension='30px'
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
      </header>
    </div>
    <section className='location'>
      <div className='container'>
        <div className='map'>
          <span className='location-name'>
            {restaurant.locationName}
          </span>
        </div>
        <figure>
          <img src='' alt=''/>
        </figure>
        <figure>
          <img src='' alt=''/>
        </figure>
      </div>
    </section>
    </>
  );
}

export default RestaurantDetail;