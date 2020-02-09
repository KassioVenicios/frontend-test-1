import React, { useState, useEffect } from 'react';
import FilterSelectBox from '../FilterSelectBox';
import { categoriesSearch } from '../../services/api';
import './style.css';

function FilterCategories() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      const data = await categoriesSearch();
      setCategories(data);
    }
    loadCategories();
  }, []);

  return (
    <FilterSelectBox
      width={280}
      placeholder='Categories'
      datasource={categories}
    />
  );
}

export default FilterCategories;