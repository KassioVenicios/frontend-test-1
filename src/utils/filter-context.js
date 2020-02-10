import React from 'react';
import { priceFilter } from '../services/api';

export const filters = {
  default: {
    term: 'restaurants',
    location: 'Las Vegas',
    open_now: false,
    limit: 8,
    price: priceFilter[0],
    categories: undefined,
  },
};

export const FilterContext = React.createContext({
  filters: filters.default,
  applyFilters: () => {},
});