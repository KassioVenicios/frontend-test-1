import React from 'react';
import StarRatings from '../StarRatings/star-ratings';
import RestaurantReviews from '../RestaurantReviews';
import './style.css';

function RestaurantDetail({ restaurant }) {
  return (
    <>
    <div className='container'>
      <header className='restaurant'>
        <div className='restaurant-name'>
          {restaurant.name}
        </div>
        <StarRatings starDimension='30px' rating={restaurant.rating}/>
        <div className='restaurant-info'>
          <span>
            {restaurant.categories[0].title}&nbsp;•&nbsp;{restaurant.price}
          </span>
          <span className={!restaurant.is_closed ? 'right open' : 'right closed' }>
            {!restaurant.is_closed ? 'open now' : 'closed'}
          </span>
        </div>
      </header>
    </div>
    <section className='location'>
      <div className='container'>
        <div className='map'>
          <span className='location-name'>
            {restaurant.location.display_address.join(' ')}
          </span>
        </div>
        <figure>
          <div style={styles(restaurant.photos[0])}></div>
        </figure>
        <figure>
        <div style={styles(restaurant.photos[1])}></div>
        </figure>
      </div>
    </section>
    {/* <RestaurantReviews reviews={restaurant.reviews}/> */}
    </>
  );
}

const styles = photoUrl => ({
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  backgroundImage: `url(${photoUrl})`,
});


export default RestaurantDetail;