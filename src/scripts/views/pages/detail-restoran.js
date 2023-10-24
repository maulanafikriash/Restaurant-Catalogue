/* eslint-disable no-alert */
/* eslint-disable no-undef */
import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantDetailTemplate } from '../templates/display-template';
import LikeButtonSettings from '../../utils/like-button-settings';
import Reviews from '../../utils/form-review';


const RestaurantDetails = {
  async render() {
    return /* html */`
    
    <div id="restaurant" class="restaurant" tabindex="0"></div>
    <div id="likeButtonContainer" tabindex="0"></div>

    <!-- Form submit review-->
    <form id="review-form" class="form-review">
    <h3 tabindex="0">Buat Review</h3>
        <label for="name">Nama:</label>
        <input type="text" id="name" name="name" required>

        <label for="review">Review:</label>
        <textarea id="review" name="review" rows="4" required></textarea>

        <button type="submit" id="submit-review">Kirim</button>
    </form>

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
      favoriteResto: FavoriteResto,
      restaurant: {
        id: resto.id,
        name: resto.name,
        description: resto.description,
        city: resto.city,
        rating: resto.rating,
        pictureId: resto.pictureId,
      },
    });

    const nameInput = document.querySelector('#name');
    const reviewInput = document.querySelector('#review');
    const submitButton = document.querySelector('#submit-review');

    function handleSubmitReview() {
      const name = nameInput.value;
      const review = reviewInput.value;

      if (name === '' || review === '') {
        alert('Periksa kembali nama dan teks review, tidak boleh kosong!!');
      } else if (navigator.onLine) {
        console.log('online');
        alert('Pesan Terkirim');
        Reviews(url, name, review);
      } else {
        console.log('offline');
        alert('Tidak Ada Internet');
      }

      nameInput.value = '';
      reviewInput.value = '';
    }

    submitButton.addEventListener('click', (e) => {
      e.preventDefault();
      handleSubmitReview();
    });
  },
};

export default RestaurantDetails;
