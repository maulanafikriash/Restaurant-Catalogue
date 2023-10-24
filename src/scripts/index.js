import 'regenerator-runtime'; /* for async await transpile */
import '../styles/style.scss';
import '../styles/responsive.scss';
import './views/templates/menu-maestro';
import './views/templates/about-us';
import './views/templates/loading-indicator';
import './main';
import Apps from './views/app';
import swRegister from './utils/sw-register';

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
