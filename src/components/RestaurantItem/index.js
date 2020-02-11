import React from 'react';
import StarRatings from '../StarRatings/star-ratings';
import { businessesDetail } from '../../services/api';
import './style.css';

function RestaurantItem({ restaurant }) {

  async function restaurantDetail(id) {
    const response = await businessesDetail(id);
    console.log(response);
  }

  return (
    <article className='restaurant'>
      <figure>
        <div style={styles(restaurant)}></div>
      </figure>
      <div className='restaurant-name'>{restaurant.name}</div>
      <StarRatings rating={restaurant.rating}/>
      <div className='restaurant-info'>
        <span>
          {restaurant.categories[0].title}&nbsp;•&nbsp;{restaurant.price}
        </span>
        <span className={!restaurant.is_closed ? 'right open' : 'right closed' }>
          {!restaurant.is_closed ? 'open now' : 'closed'}
        </span>
      </div>
      <div
        className='learn-more'
        onClick={() => restaurantDetail(restaurant.id)}>
        <span>Learn More</span>
      </div>
    </article>
  );
}

const styles = restaurant => ({
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  backgroundImage: `url(${restaurant.image_url})`,
});

export default RestaurantItem;