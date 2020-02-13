import React from 'react';
import StarRatings from '../StarRatings/star-ratings';
import { ddMMyyy } from '../../utils/dateFormat';
import './restaurant-reviews.style.css';

export default class RestaurantReviews extends React.Component {

  render() {
    const { reviews } = this.props;
    return (
      <section className='container reviews'>
        <div className='counter'>
          {reviews.length} Reviews
        </div>
        {
          reviews.map((review, i) => (
            <div key={review.id} className='review'>
              <div className='reviewer'>
                <figure>
                  <div style={styles(review.user.image_url)}></div>
                </figure>
                <div className='reviewer-info'>
                  <div className='reviewer-name'>
                    {review.user.name}
                  </div>
                  <div className='reviewer-date'>
                    {ddMMyyy(review.time_created)}</div>
                </div>
              </div>
              <div className='review-body'>
                <StarRatings rating={review.rating}/>
                <div className='message'>
                  {review.text}
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
}

const styles = photoUrl => ({
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  backgroundImage: `url(${photoUrl})`,
});
