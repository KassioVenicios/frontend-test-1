import React from 'react';
import FilterSelectBox from '../FilterSelectBox/filter-selectbox';
import { categoriesSearch } from '../../services/api';
import './style.css';

class FilterCategories extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    this.loadCategories();
  }

  loadCategories() {
    categoriesSearch().then(categories => {
      this.setState({ categories });
    });
  }

  render() {
    return (
      <>
      {
        this.state.categories.length > 0 ?
          <FilterSelectBox
            width={280}
            placeholder='Categories'
            datasource={this.state.categories}
          />
        : null
      }
      </>
    );
  }
}

export default FilterCategories;