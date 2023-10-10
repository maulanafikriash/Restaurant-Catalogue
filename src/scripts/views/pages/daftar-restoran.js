import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/display-template';

const RestaurantList = {
  async render() {
    return /* html */`
    <section class="hero">
      <img src="./images/heros/hero-image_4.jpg" alt="Gambar Makanan Restoran">
        <div class="hero-text">
          <h1>Welcome...</h1>
        </div>
    </section>

    <div class="content">
      <h2 class="content-heading">Daftar Restoran</h2>
      <div id="restaurant" class="resto"></div>
    </div>

      `;
  },

  async afterRender() {
    const restaurantApi = await RestaurantSource.restaurantList();
    const restaurantContainer = document.querySelector('#restaurant');

    restaurantApi.restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default RestaurantList;
