import RestaurantSource from '../data/restaurant-source';

const Reviews = (url, name, review) => {
  const datas = {
    id: url.id,
    name,
    review,
  };
  RestaurantSource.formReview(datas);

  const container = document.querySelector('#post-review');
  const times = { year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date().toLocaleDateString('id-ID', times);
  const addReview = /* html */`                   
    <div class="customer-review__container">
        <h4 tabindex="0">${name}</h4>
        <p tabindex="0">${date}</p>
        <p tabindex="0">${review}</p>
    </div>
      `;
  container.innerHTML += addReview;
};

export default Reviews;
