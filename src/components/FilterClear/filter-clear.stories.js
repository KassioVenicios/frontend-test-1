import React from 'react';
import FilterClear from './filter-clear';

export default {
  component: FilterClear,
  title: 'Components/FilterClear',
};

export const Default = () => <FilterClear />;

export const Disabled = () => <FilterClear disabled={true} />;
