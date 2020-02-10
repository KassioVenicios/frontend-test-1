import axios from 'axios';

const defaultLimit = 8;
const defaultLocation = 'Las Vegas';
const yelp = 'http://api.yelp.com/v3';
const proxy = 'http://cors-anywhere.herokuapp.com';
const token = 'Bearer av1sVZCD8sdwINxL1hzKwi-819wCFfxJqkZ1Dce6EUhpAndRBnsevcHV64tZllja7jgSdbIhc_mf8kWSAvec96E1CpLPBATWwmt77y3iu3i5BddxRVTiUFEPTf0_XnYx';

const api = axios.create({
  baseURL: `${proxy}/${yelp}`,
  headers: {
    Authorization: token,
  },
});

const priceFilter = [
  { value: [1,2,3,4], text: 'All' },
  { value: 1, text: '$' },
  { value: 2, text: '$$' },
  { value: 3, text: '$$$' },
  { value: 4, text: '$$$$' },
];

const categoriesSearch = async (parent_alias='restaurants') => {
  try {
    const response = await api.get('categories');
    let categories = response.data.categories.filter(category => {
      return category.parent_aliases.includes(parent_alias);
    });
    categories = categories.map(category => ({
      value: category.alias,
      text: category.title,
    }))
    categories.unshift({ value: '', text: 'All' });
    return categories;
  } catch(error) {
    return console.log(error);
  }
};

const businessesSearch = async (searchObj) => {
  searchObj = searchObj || {};
  const searchParams = {
    term: searchObj.term || 'restaurants',
    location: searchObj.location || defaultLocation,
    open_now: searchObj.open_now || false,
    limit: searchObj.limit || defaultLimit,
    price: searchObj.price || priceFilter[0].value,
    categories: searchObj.categories || undefined,
  };
  try {
    let url = 'businesses/search';
    url = url.concat(`?term=${searchParams.term}`);
    url = url.concat(`&location=${searchParams.location}`);
    url = url.concat(`&limit=${searchParams.limit}`);
    url = url.concat(`&open_now=${searchParams.open_now}`);
    url = url.concat(`&price=${searchParams.price}`);
    url = url.concat(searchParams.categories ? `&categories=${searchParams.categories}`: '');
    return api.get(url);
  } catch(error) {
    return console.log(error);
  }
};

const businessesDetail = async id => {
  try {
    return await api.get(`businesses/${id}`);
  } catch(error) {
    return console.log(error);
  }
};

export {
  api,
  priceFilter,
  categoriesSearch,
  businessesSearch,
  businessesDetail,
};