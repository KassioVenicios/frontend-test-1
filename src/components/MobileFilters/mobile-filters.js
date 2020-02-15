import React from 'react';
import './mobile-filters.style.css';
import FilterClear from '../FilterClear/filter-clear';
import { priceFilter } from '../../utils/filter-context';
import FilterCategories from '../FilterCategories/filter-categories';
import { Link } from 'react-router-dom';

export default class MobileFilters extends React.Component {

  render() {
    return (
      <section>
        <div className='filter-header'>
          <span className='title'>Filter By</span>
          <Link to='/'>
            <span className='close' />
          </Link>
        </div>
        <div className='filter-buttons'>
          <FilterClear />
          <FilterClear />
        </div>
        <div className='filter-body'>
          <div className='filter-content'>
            <span className='filter-title'>open now</span>
            <span className='checkbox' />
          </div>
          <div className='filter-content'>
            <span className='filter-title'>price</span>
            <div className='filter-price'>
              <table>
                { priceFilter.map(price => (
                  <th>{price.text}</th>
                ))}
              </table>
            </div>
          </div>
          <div className='filter-content categories'>
            <span className='filter-title'>categories</span>
            <span className='filter-subtitle'>Select One</span>
          </div>
          <FilterCategories />
        </div>
      </section>
    );
  }
}
