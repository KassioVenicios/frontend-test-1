import axios from 'axios';
import { filters } from '../utils/filter-context';

const yelp = 'http://api.yelp.com/v3';
const proxy = 'https://cors-anywhere.herokuapp.com';
const token = 'Bearer av1sVZCD8sdwINxL1hzKwi-819wCFfxJqkZ1Dce6EUhpAndRBnsevcHV64tZllja7jgSdbIhc_mf8kWSAvec96E1CpLPBATWwmt77y3iu3i5BddxRVTiUFEPTf0_XnYx';

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
  searchObj = searchObj || {};
  const searchParams = {
    term: searchObj.term || filters.default.term,
    location: searchObj.location || filters.default.location,
    open_now: searchObj.open_now || filters.default.open_now,
    limit: searchObj.limit || filters.default.limit,
    price: searchObj.price || filters.default.price,
    categories: searchObj.categories || filters.default.categories,
    offset: searchObj.offset || filters.default.offset,
  };
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
    return await api.get(`businesses/${id}`);
  } catch(error) {
    return console.log(error);
  }
};
