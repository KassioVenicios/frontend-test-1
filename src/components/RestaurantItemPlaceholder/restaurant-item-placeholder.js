import React from 'react';
import './restaurant-item-placeholder.style.css';

class RestaurantItemPlaceholder extends React.Component {

  render() {
    return (
      <article className='restaurant-placeholder'>
        <figure />
        <div className='mobile'>
          <div className='restaurant-name' />
          <div className='restaurant-rating' />
          <div className='restaurant-info'>
            <span />
            <span className='right' />
          </div>
          <div className='learn-more' />
        </div>
      </article>
    );
  }
}

export default RestaurantItemPlaceholder;