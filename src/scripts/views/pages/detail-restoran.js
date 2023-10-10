/* eslint-disable no-alert */
/* eslint-disable no-undef */
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/display-template';
import LikeButtonSettings from '../../utils/like-button-settings';

const RestaurantDetails = {
  async render() {
    return /* html */`
    
    <div id="restaurant" class="restaurant"></div>
    <div id="likeButtonContainer"></div>     
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    let resto = await RestaurantSource.detail(url.id);
    resto = resto.restaurant;
    const restoContainer = document.querySelector('#restaurant');

    restoContainer.innerHTML = createRestaurantDetailTemplate(resto);

    LikeButtonSettings.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: resto.id,
        name: resto.name,
        description: resto.description,
        city: resto.city,
        rating: resto.rating,
        pictureId: resto.pictureId,
      },
    });
  },
};

export default RestaurantDetails;
