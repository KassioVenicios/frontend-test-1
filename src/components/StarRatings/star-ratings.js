import React from 'react';
import ReactStarRatings from 'react-star-ratings';

class StarRatings extends React.Component {

  render() {
    const { starDimension, rating } = this.props;
    return (
      <ReactStarRatings
        name='rating'
        starSpacing='2px'
        numberOfStars={5}
        starEmptyColor='#fff'
        starStrokeWidth='3px'
        starRatedColor='#002b56'
        starStrokeColor='#002b56'
        rating={rating}
        starDimension={starDimension ? starDimension : '20px'} />
    );
  }
}

export default StarRatings;