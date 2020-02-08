import React from 'react';
import FilterClear from './index';

export default {
  component: FilterClear,
  title: 'Components/FilterClear',
};

export const Default = () => <FilterClear />;

export const Disabled = () => <FilterClear disabled={true} />;
