import axios from 'axios';
import { filters, getSearchObj } from '../utils/filter-context';

const yelp = 'http://api.yelp.com/v3';
const proxy = 'https://cors-anywhere.herokuapp.com';
const token = 'Bearer FrMt4A8sfoHbuG5xqQaCcbmRaTUPmn2lIJECj2amc4E9S4EXTzLknjOwi2FMRtw-Ez50-PeomcTOZPMZgT3fkTUU1DlpMX4eeuIw46YNjc5H_ysyzcnWZgr7WntFXnYx';

const api = axios.create({
  baseURL: `${proxy}/${yelp}`,
  headers: {
    Authorization: token,
  },
});

const restrictCategories = [
  'Italian', 'Seafood', 'Steakhouses',
  'Japanese', 'American (New)', 'Mexican', 'Thai',
];

export const categoriesSearch = async () => {
  try {
    const response = await api.get('categories');
    let categories = response.data.categories.filter(category => {
      return category.parent_aliases.includes(filters.default.term) &&
        restrictCategories.includes(category.title);
    });
    categories = categories.map(category => ({
      value: category.alias,
      text: category.title,
    }))
    categories.unshift({
      text: 'All',
      value: filters.default.categories,
    });
    return categories;
  } catch(error) {
    return console.log(error);
  }
};

export const businessesSearch = async searchObj => {
  const searchParams = getSearchObj(searchObj);
  try {
    let url = 'businesses/search';
    url = url.concat(`?term=${searchParams.term}`);
    url = url.concat(`&location=${searchParams.location}`);
    url = url.concat(`&limit=${searchParams.limit}`);
    url = url.concat(`&open_now=${searchParams.open_now}`);
    url = url.concat(`&price=${searchParams.price}`);
    url = url.concat(`&offset=${searchParams.offset}`);
    url = url.concat(searchParams.categories ?
      `&categories=${searchParams.categories}` : ''
    );
    return api.get(url);
  } catch(error) {
    return console.log(error);
  }
};

export const businessesDetail = async id => {
  try {
    return api.get(`businesses/${id}`);
  } catch(error) {
    return console.log(error);
  }
};

export const businessesReviews = async id => {
  try {
    return api.get(`businesses/${id}/reviews`);
  } catch(error) {
    return console.log(error);
  }
};
