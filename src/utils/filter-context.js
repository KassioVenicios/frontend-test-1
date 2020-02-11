import React from 'react';
import { priceFilter } from '../services/api';
import deepCopy from './deepCopy';

export const filters = {
  default: {
    term: 'restaurants',
    location: 'Las Vegas',
    open_now: false,
    limit: 8,
    price: priceFilter[0].value,
    categories: undefined,
  },
};

export const FilterContext = React.createContext({
  filters: deepCopy(filters.default),
  changeFilters: (searchObj) => {},
});
