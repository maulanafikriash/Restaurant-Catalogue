import RestaurantList from '../views/pages/daftar-restoran';
import Favorite from '../views/pages/favorite';
import RestaurantDetails from '../views/pages/detail-restoran';

const routes = {
  '/': RestaurantList, // default page
  '/daftar-restoran': RestaurantList,
  '/favorite': Favorite,
  '/detail-restoran/:id': RestaurantDetails,
};

export default routes;
