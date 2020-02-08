import React from 'react';
import Header from './components/Header';
import FilterNav from './components/FilterNav';
import Restaurants from './components/Restaurants';
import RestaurantDetail from './components/RestaurantDetail';
import restaurants from './utils/restaurants';
import './fonts/helvetica-neue.ttf';
import './App.css';
import './Main.css';

function App() {
  return (
    <>
      <main>
        <Header />
        <FilterNav />
        <Restaurants />
      </main>
      <RestaurantDetail restaurant={restaurants[2]} />
    </>
  );
}

export default App;
