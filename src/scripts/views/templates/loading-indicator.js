class LoadingIndicator extends HTMLElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = /* html */`
    <div class='container-loader' id="loading-indicator">
    <div class='loader'>
      <div class='loader-dot'></div>
      <div class='loader-dot'></div>
      <div class='loader-dot'></div>
      <div class='loader-dot'></div>
      <div class='loader-dot'></div>
      <div class='loader-dot'></div>
      <div class='loader-text'></div>
    </div>
  </div>
  
        `;
  }
}

customElements.define('loading-indicator', LoadingIndicator);
