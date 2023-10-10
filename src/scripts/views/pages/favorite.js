import FavoriteRestaurantIdb from '../../data/favorite-resto-idb';
import { createRestaurantItemTemplate } from '../templates/display-template';

const Favorite = {
  async render() {
    return /* html */`
    <div class="content">
      <h2 class="content__heading">Restoran Favorit</h2>
      <div id="restaurant" class="resto">

      </div>
    </div>

        `;
  },

  async afterRender() {
    const resto = await FavoriteRestaurantIdb.getAllRestaurants();
    const restoContainer = document.querySelector('#restaurant');
    resto.forEach((res) => {
      restoContainer.innerHTML += createRestaurantItemTemplate(res);
    });
  },
};

export default Favorite;
