import ApolloClient, { gql } from 'apollo-boost';
import { getSearchObj } from '../utils/filter-context';

const yelp = 'https://api.yelp.com/v3/graphql';
const proxy = 'https://cors-anywhere.herokuapp.com';
const token = 'Bearer FrMt4A8sfoHbuG5xqQaCcbmRaTUPmn2lIJECj2amc4E9S4EXTzLknjOwi2FMRtw-Ez50-PeomcTOZPMZgT3fkTUU1DlpMX4eeuIw46YNjc5H_ysyzcnWZgr7WntFXnYx';

const client = new ApolloClient({
  uri: `${proxy}/${yelp}`,
  headers: {
    Authorization: token,
    'Accept-Language': 'en_US',
  }
});

export const businessesSearch = searchObj => {
  const params = getSearchObj(searchObj);
  return client.query({
    query: gql`
    {
      search(
        term: "${params.term}",
        location: "${params.location}",
        open_now: ${params.open_now},
        limit: ${params.limit},
        price: "${params.price}",
        categories: "${params.categories}",
        offset: ${params.offset}
      ) {
        total
        business {
          id
          name
          rating
          price
          url
          photos
          hours {
            is_open_now
          }
          categories {
            title
            alias
          }
        }
      }
    }
    `,
  }).then(result => ({
    data: {
      total: result.data.search.total,
      businesses: result.data.search.business
    }
  })).catch(error => error);
};
