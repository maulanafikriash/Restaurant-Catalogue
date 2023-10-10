import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => /* html */ `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__poster" alt="${restaurant.name}"
           src="${CONFIG.BASE_IMAGE_URL_LARGE + restaurant.pictureId}">
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item-header__rating__score">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3><a href="/#/detail-restoran/${restaurant.id}">${restaurant.name}</a></h3>
      <p><i class="fa-solid fa-location-dot"></i> ${restaurant.city}</p>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;

const createRestaurantDetailTemplate = (restaurant) => /* html */ `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <img class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL_LARGE + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__info">
    <h3>Informasi</h3>
    <h4>Kota</h4>
    <p><i class="fa-solid fa-location-dot"></i> ${restaurant.city}</p>
    <h4>Rating</h4>
    <p>⭐️ ${restaurant.rating}</p>
  </div>
  <div class="restaurant__description">
    <h3>Tentang Restoran</h3>
    <p>${restaurant.description}</p>
  </div>
`;

const createLikeButtonTemplate = () => /* html */`
  <button aria-label="like this restaurant" id="likeButton" class="like">
  <i class="fa-regular fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => /* html */`
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
