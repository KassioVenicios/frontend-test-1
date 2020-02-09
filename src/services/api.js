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
  { value: [1, 2], text: '$$' },
  { value: [1, 2, 3], text: '$$$' },
  { value: [1, 2, 3, 4], text: '$$$$' },
];

const businessesSearch = async (term, location=defaultLocation, open_now=false, price=priceFilter[0].value) => {
  try {
    let url = 'businesses/search';
    url = url.concat(`?term=${term}`);
    url = url.concat(`&location=${location}`);
    url = url.concat(`&limit=${defaultLimit}`);
    url = url.concat(`&open_now=${open_now}`);
    url = url.concat(`&price=${price}`);
    return await api.get(url);
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
  businessesSearch,
  businessesDetail,
};