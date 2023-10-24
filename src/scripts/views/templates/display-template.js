import CONFIG from '../../globals/config';

const listMenu = (items) => {
  // eslint-disable-next-line no-shadow
  let listMenu = '';
  items.forEach((item) => {
    listMenu += `<li>${item.name}</li>`;
  });
  return listMenu;
};

const createRestaurantItemTemplate = (restaurant) => /* html */ `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img tabindex="0" class="restaurant-item__header__poster" alt="${restaurant.name}"
           src="${CONFIG.BASE_IMAGE_URL_LARGE + restaurant.pictureId}">
      <div class="restaurant-item__header__rating">
        <p tabindex="0">⭐️<span class="restaurant-item-header__rating__score">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3><a href="/#/detail-restoran/${restaurant.id}">${restaurant.name}</a></h3>
      <h4 tabindex="0"><i class="fa-solid fa-location-dot"></i> ${restaurant.city}</h4>
      <p tabindex="0">${restaurant.description}</p>
    </div>
  </div>
`;

const createRestaurantDetailTemplate = (restaurant) => /* html */ `
  <h2 tabindex="0" class="restaurant__title">${restaurant.name}</h2>
  <img tabindex="0" class="restaurant__poster" src="${CONFIG.BASE_IMAGE_URL_LARGE + restaurant.pictureId}" alt="${restaurant.name}" />
  <div class="restaurant__info">
    <h3 tabindex="0">Informasi</h3>
    <h4 tabindex="0">Kota</h4>
    <p tabindex="0"><i class="fa-solid fa-location-dot"></i> ${restaurant.city}</p>
    <h4 tabindex="0">Rating</h4>
    <p tabindex="0">⭐️ ${restaurant.rating}</p>
  </div>
  <div class="restaurant__description">
    <h3 tabindex="0">Tentang Restoran</h3>
    <p tabindex="0">${restaurant.description}</p>
  </div>

 <div class="restaurant__menu">
  <h3 tabindex="0">Menu Restoran</h3>
  <h4 tabindex="0">Foods</h4>
    <ul tabindex="0">
    ${listMenu(restaurant.menus.foods)}
    </ul>
    <h4 tabindex="0">Drinks</h4>
      <ul tabindex="0">
        ${listMenu(restaurant.menus.drinks)}
      </ul>
  </div>

  <div class="customer-review">
  <h3 tabindex="0">Customer Review</h3>
  ${restaurant.customerReviews.map((customerReviews) => /* html */`                        
  <div class="customer-review__container">
      <h4 tabindex="0">${customerReviews.name}</h4>
      <p tabindex="0">${customerReviews.date}</p>
      <p tabindex="0">${customerReviews.review}</p>
  </div>
`).join('')}
  <div id="post-review"></div>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => /* html */`
  <button tabindex="0" aria-label="like this restaurant" id="likeButton" class="like">
  <i class="fa-regular fa-heart" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => /* html */`
  <button tabindex="0" aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
