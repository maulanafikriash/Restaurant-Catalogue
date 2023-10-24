import DrawerSettings from '../utils/drawer-settings';
import UrlParser from '../routes/url-parser';
import routes from '../routes/route';

class Apps {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerSettings.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();

    const skipLinkElement = document.querySelector('.skip-link');
    skipLinkElement.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#main-content').focus();
    });

    function hideLoadingIndicator() {
      document.getElementById('loading-indicator').style.display = 'none';
      document.getElementById('mycontent').style.display = 'block';
    }

    function showErrorNotification() {
      document.getElementById('loading-indicator').style.display = 'none';
      document.getElementById('error-notification').style.display = 'block';
    }

    function fetchDataFromServer() {
      setTimeout(() => {
        const isError = Math.random() < 0.2;

        if (!isError) {
          hideLoadingIndicator();
        } else {
          showErrorNotification();
        }
      }, 1000);
    }

    fetchDataFromServer();
  }
}

export default Apps;
