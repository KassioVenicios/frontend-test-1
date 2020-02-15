import React from 'react';
import FilterClear from '../FilterClear/filter-clear';
import FilterOpenNow from '../FilterOpenNow/filter-open-now';
import FilterPrice from '../FilterPrice/filter-price';
import FilterCategories from '../FilterCategories/filter-categories';
import FilterSelectBox from '../FilterSelectBox/filter-selectbox';
import './filter-nav.style.css';
import { Link } from 'react-router-dom';

class FilterNav extends React.Component {

  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <nav className='filter-nav'>
        <div className='container'>
          <div className='content'>
            <span className='by'>Filter By:</span>
            { this.state.width > 800 ?
              <>
                <FilterOpenNow />
                <FilterPrice />
                <FilterCategories />
                <FilterClear />
              </>
              :
              <Link to='/filters'>
                <FilterSelectBox
                  width={'100px'}
                  placeholder='All'
                  datasource={[]}
                />
              </Link>
            }
          </div>
        </div>
      </nav>
    );
  }
}

export default FilterNav;