import 'regenerator-runtime'; /* for async await transpile */
import '../styles/style.scss';
import '../styles/responsive.scss';
import Apps from './views/app';
import swRegister from './utils/sw-register';
// import main from './main';

const app = new Apps({
  button: document.querySelector('#hamburger-button'),
  drawer: document.querySelector('#menu-drawer'),
  content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

// document.addEventListener('DOMContentLoaded', main);
