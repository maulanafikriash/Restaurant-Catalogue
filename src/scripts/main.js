// // keepStrong
// const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
// const menu = document.querySelector('.menu');

// mobileMenuToggle.addEventListener('click', () => {
//   menu.classList.toggle('active');
//   mobileMenuToggle.classList.toggle('active');
// });

const focusableElements = document.querySelectorAll('a, button, input, textarea, select, [tabindex]');

document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    focusableElements.forEach((element) => {
      element.classList.remove('hide-focus');
    });
  }
});

document.addEventListener('mousedown', () => {
  focusableElements.forEach((element) => {
    element.classList.add('hide-focus');
  });
});
