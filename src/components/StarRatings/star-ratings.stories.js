import React from 'react';
import StarRating from './star-ratings';

export default {
  component: StarRating,
  title: 'Components/StarRating',
};

const allStars = size => (
  <>
    <StarRating starDimension={size} rating={5}   /><br/>
    <StarRating starDimension={size} rating={4.5} /><br/>
    <StarRating starDimension={size} rating={4}   /><br/>
    <StarRating starDimension={size} rating={3.5} /><br/>
    <StarRating starDimension={size} rating={3}   /><br/>
    <StarRating starDimension={size} rating={2.5} /><br/>
    <StarRating starDimension={size} rating={2}   /><br/>
    <StarRating starDimension={size} rating={1.5} /><br/>
    <StarRating starDimension={size} rating={1}   /><br/>
    <StarRating starDimension={size} rating={0.5} /><br/>
    <StarRating starDimension={size} rating={0}   /><br/>
  </>
);

export const Small = () => allStars('20px');
export const Large = () => allStars('30px');
