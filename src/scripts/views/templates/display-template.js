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

 <div class="restaurant__menu">
  <h3>Menu Restoran</h3>
  <h4>Foods</h4>
    <ul>
    ${listMenu(restaurant.menus.foods)}
    </ul>
    <h4>Drinks</h4>
      <ul>
        ${listMenu(restaurant.menus.drinks)}
      </ul>
  </div>

  <div class="customer-review">
  <h3>Customer Review</h3>
  ${restaurant.customerReviews.map((customerReviews) => /* html */`                        
  <div class="customer-review__container">
      <h4 tabindex="0">${customerReviews.name}</h4>
      <p tabindex="0">${customerReviews.date}</p>
      <p tabindex="0">${customerReviews.review}</p>
  </div>
`).join('')}
  </div>

  <!-- Form submit menu-->
  <form id="review-form" class="form-review">
  <h2>Buat Review</h2>
      <label for="name">Nama:</label>
      <input type="text" id="name" name="name" required>

      <label for="date">Tanggal Review:</label>
      <input type="text" id="date" name="date" required placeholder="13 November 2019">

      <label for="review">Review:</label>
      <textarea id="review" name="review" rows="4" required></textarea>

      <button type="submit">Kirim</button>
  </form>

  
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
