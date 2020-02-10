import React from 'react';

export const RestaurantsContext = React.createContext({
  restaurants: [],
  getRestaurants: () => {},
});