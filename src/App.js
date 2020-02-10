import React from 'react';
import Header from './components/Header';
import FilterNav from './components/FilterNav';
import Restaurants from './components/Restaurants/restaurants';
import RestaurantDetail from './components/RestaurantDetail';
import restaurantsUtils from './utils/restaurants';
import { businessesSearch } from './services/api';
import { RestaurantsContext } from './utils/restaurants-context';
import { FilterContext, filters } from './utils/filter-context';
import './fonts/helvetica-neue.ttf';
import './App.css';
import './Main.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.getRestaurants = (searchObj) => {
      businessesSearch(searchObj).then(response => {
        this.setState({
          restaurants: response.data.businesses,
        });
      });
    };

    this.state = {
      restaurants: [],
      getRestaurants: this.getRestaurants,
      filters: filters.default,
    };
  }

  componentDidMount() {
    this.state.getRestaurants();
  }

  render() {
    return (
      <RestaurantsContext.Provider value={this.state}>
        <FilterContext.Provider value={this.state.filters}>
          <main>
            <Header />
            <FilterNav applyFilters={() => {}} />
            <Restaurants restaurants={this.state.restaurants} />
          </main>
          </FilterContext.Provider>
        <RestaurantDetail restaurant={restaurantsUtils[2]} />
      </RestaurantsContext.Provider>
    );
  }
}

export default App;
