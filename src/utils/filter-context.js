import React from 'react';
import deepCopy from './deepCopy';

export const priceFilter = [
  { value: '1,2,3,4', text: 'All' },
  { value: 1, text: '$' },
  { value: 2, text: '$$' },
  { value: 3, text: '$$$' },
  { value: 4, text: '$$$$' },
];

export const filters = {
  default: {
    term: 'restaurants',
    location: 'Las Vegas',
    open_now: false,
    limit: 8,
    price: priceFilter[0].value,
    categories: '',
    offset: 0,
  },
};

export const isDefaultFilter = currentFilter => (
  filters.default.categories === currentFilter.categories &&
  filters.default.price === currentFilter.price &&
  filters.default.open_now === currentFilter.open_now
);

export const FilterContext = React.createContext({
  filters: deepCopy(filters.default),
  changeFilters: (searchObj) => {},
});
