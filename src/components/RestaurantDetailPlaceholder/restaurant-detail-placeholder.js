import React from 'react';
import './restaurant-detail-placeholder.style.css';

export default class RestaurantDetailPlaceholder extends React.Component {

  render() {
    return (
      <>
        <div className='container'>
          <header className='restaurant-placeholder'>
            <div className='restaurant-name' />
            <div className='restaurant-rating' />
            <div className='restaurant-info'>
              <span />
              <span className='right' />
            </div>
          </header>
        </div>
        <section className='location-placeholder'>
          <div className='container'>
            <div className='map'>
              <span className='location-name' />
            </div>
            <figure />
            <figure />
          </div>
        </section>
        <section className='container reviews-placeholder'>
          <div className='counter' />
          <div className='review'>
            <div className='reviewer'>
              <figure />
              <div className='reviewer-info'>
                <div className='reviewer-name' />
                <div className='reviewer-date' />
              </div>
            </div>
            <div className='review-body'>
              <div className='review-rating' />
              <div className='message' />
            </div>
          </div>
        </section>
      </>
    );
  }
}
