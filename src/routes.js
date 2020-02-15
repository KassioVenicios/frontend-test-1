import App from './App';
import Root from './Root';
import RestaurantDetail from './components/RestaurantDetail/restaurant-detail';
import MobileFilters from './components/MobileFilters/mobile-filters';

export const routes = [
  {
    component: Root,
    routes: [
      {
        path: '/',
        exact: true,
        component: App,
      },
      {
        path: '/details',
        exact: true,
        component: RestaurantDetail
      },
      {
        path: '/filters',
        exact: true,
        component: MobileFilters
      }
    ]
  }
];