import App from './App';
import Root from './Root';
import RestaurantDetail from './components/RestaurantDetail/restaurant-detail';

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
      }
    ]
  }
];