import React from 'react';
import Header from './components/Header/header';
import FilterNav from './components/FilterNav/filter-nav';
import Restaurants from './components/Restaurants/restaurants';
import RestaurantDetail from './components/RestaurantDetail';
import { businessesSearch } from './services/api';
import { FilterContext, filters } from './utils/filter-context';
import deepCopy from './utils/deepCopy';
import './fonts/helvetica-neue.ttf';
import './App.css';
import './Main.css';
import './Checkbox.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.getRestaurants = searchObj => {
      businessesSearch(searchObj).then(response => {
        if (searchObj && searchObj.offset > 0) {
          this.setState({
            ...this.state,
            restaurants: [
              ...this.state.restaurants,
              ...response.data.businesses
            ],
          });
        } else {
          this.setState({
            ...this.state,
            restaurants: response.data.businesses,
          });
        }
      });
    }

    this.changeFilters = searchObj => {
      this.getRestaurants(searchObj);
      this.setState({
        ...this.state,
        filters: searchObj,
      });
    }

    this.selectRestaurant = restaurant => {
      this.setState({
        ...this.state,
        selectedRestaurant: restaurant,
      });
    }

    this.state = {
      restaurants: [],
      filters: deepCopy(filters.default),
      changeFilters: this.changeFilters,
      selectedRestaurant: null,
    };
  }

  componentDidMount() {
    this.getRestaurants();
  }

  render() {
    return (
      <>
        <FilterContext.Provider value={{
          filters: this.state.filters,
          changeFilters: this.state.changeFilters,
        }}>
          <main>
            <Header />
            <FilterNav />
            <Restaurants
              restaurants={this.state.restaurants}
              selectRestaurant={this.selectRestaurant} />
          </main>
          </FilterContext.Provider>
        <section className='modal'>
          { this.state.selectedRestaurant ?
            <RestaurantDetail restaurant={this.state.selectedRestaurant}/>
            : null
          }
        </section>
      </>
    );
  }
}

export default App;
