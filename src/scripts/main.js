// // keepStrong
// const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
// const menu = document.querySelector('.menu');

// mobileMenuToggle.addEventListener('click', () => {
//   menu.classList.toggle('active');
//   mobileMenuToggle.classList.toggle('active');
// });

// async function fetchData() {
//   try {
//     const response = await fetch('./data/DATA.json');
//     const data = await response.json();
//     const { restaurants } = data;

//     const restaurantList = document.getElementById('restaurant-list');

//     restaurants.forEach((restaurant) => {
//       const li = document.createElement('li');
//       li.tabIndex = 0;
//       li.innerHTML = `
//       <img src="${restaurant.pictureId}" alt="${restaurant.name}">
//       <h3>${restaurant.name}</h3>
//       <p><i class="fa-solid fa-location-dot"></i> ${restaurant.city}</p>
//       <p>Rating: ${getStarRating(restaurant.rating)}</p>
//       <p>${restaurant.description}</p>
//     `;
//       restaurantList.appendChild(li);
//     });
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// }

// function getStarRating(rating) {
//   const fullStars = Math.floor(rating);
//   const halfStar = Math.ceil(rating - fullStars) === 0.5;

//   const stars = [];
//   // eslint-disable-next-line no-plusplus
//   for (let i = 0; i < fullStars; i++) {
//     stars.push('<i class="fa-solid fa-star"></i>');
//   }
//   if (halfStar) {
//     stars.push('<i class="fa-solid fa-star-half-stroke"></i>');
//   }

//   return stars.join('');
// }

// const focusableElements = document.querySelectorAll('a, button, input, textarea, select, [tabindex]');

// document.addEventListener('keydown', (e) => {
//   if (e.key === 'Tab') {
//     focusableElements.forEach((element) => {
//       element.classList.remove('hide-focus');
//     });
//   }
// });

// document.addEventListener('mousedown', () => {
//   focusableElements.forEach((element) => {
//     element.classList.add('hide-focus');
//   });
// });

// fetchData();

// // skip konten
// const skipToContentLink = document.querySelector('.skip-link');
// const mainContent = document.getElementById('#main-content');
// skipToContentLink.addEventListener('click', (event) => {
//   event.preventDefault();
//   mainContent.tabIndex = -1;
//   mainContent.focus();
// });

// // scroll
// const menuLinks = document.querySelectorAll('.menu ul li a');
// menuLinks.forEach((link) => {
//   // eslint-disable-next-line func-names
//   link.addEventListener('click', function (x) {
//     x.preventDefault();

//     const targetId = this.getAttribute('href').slice(1);
//     const targetElement = document.getElementById(targetId);

//     if (targetElement) {
//       const { offsetTop } = targetElement;
//       const scrollOptions = {
//         behavior: 'smooth',
//       };
//       window.scrollTo({
//         top: offsetTop,
//         ...scrollOptions,
//       });
//     }
//   });
// });

// export default main;
