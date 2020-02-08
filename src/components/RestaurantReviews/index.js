import React from 'react';
import StarRatings from 'react-star-ratings';
import './style.css';

function RestaurantReviews({ reviews }) {

  return (
    <section className='container reviews'>
      <div className='counter'>
        {reviews.length} Reviews
      </div>
      {
        reviews.map((review, i) => (
          <div key={review.username} className='review'>
            <div className='reviewer'>
              <figure>
                <img src='' alt='' />
              </figure>
              <div className='reviewer-info'>
                <div className='reviewer-name'>{review.username}</div>
                <div className='reviewer-date'>{review.date}</div>
              </div>
            </div>
            <div className='review-body'>
              <StarRatings
                name='rating'
                starSpacing='2px'
                starDimension='20px'
                rating={review.rating}
                starRatedColor='#002b56'
                starEmptyColor='#fff'
                starStrokeColor='#002b56'
                starStrokeWidth='3px'
                numberOfStars={5}
              />
              <div className='message'>
                {
                  review.message.map(msg => (
                    <div>{msg}</div>
                  ))
                }
              </div>
            </div>
            {
              i !== reviews.length-1 ? (
                <hr style={{
                  width: '100%',
                  border: 'none',
                  borderBottom: '1px solid #e6e6e6',
                }}/>
              ) : null
            }
          </div>
        ))
      }
    </section>
  );
}

export default RestaurantReviews;