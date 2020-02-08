import React from 'react';
import Header from './components/Header';
import FilterNav from './components/FilterNav';
import Restaurants from './components/Restaurants';
import './fonts/helvetica-neue.ttf';
import './App.css';
import './Main.css';

function App() {
  return (
    <main>
      <Header />
      <FilterNav />
      <Restaurants />
    </main>
  );
}

export default App;
