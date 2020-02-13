import React from 'react';
import StarRatings from '../StarRatings/star-ratings';
import { Link } from 'react-router-dom';
import './restaurant-item.style.css';

export default class RestaurantItem extends React.Component {

  renderIsOpen(restaurant) {
    return restaurant.hours &&
           restaurant.hours[0] &&
           restaurant.hours[0].is_open_now ?
           <span className='right open'>open now</span> :
           <span className='right closed'>closed</span>
    ;
  }

  render() {
    const { restaurant } = this.props;
    return (
      <article className='restaurant'>
        <figure>
          <div style={styles(restaurant)}></div>
        </figure>
        <div className='restaurant-name'>{restaurant.name}</div>
        <StarRatings rating={restaurant.rating}/>
        <div className='restaurant-info'>
          <span>
            {restaurant.categories[0].title}
            &nbsp;•&nbsp;
            {restaurant.price}
          </span>
          {this.renderIsOpen(restaurant)}
        </div>
        <Link to={{
          pathname: '/details',
          state: { id: restaurant.id}
        }}>
          <div className='learn-more'>
            <span>Learn More</span>
          </div>
        </Link>
      </article>
    );
  }
}

const styles = restaurant => ({
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  backgroundImage: `url(${restaurant.photos[0]})`,
});
