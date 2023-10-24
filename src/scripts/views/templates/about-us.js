class AboutUsSection extends HTMLElement {
  // eslint-disable-next-line no-useless-constructor
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = /* html */`
    <section id="about-us" class="aboutUs">
      <h2 tabindex="0">About Us</h2>
      <p tabindex="0">Follow me on social media </p>
    <div class="icons">
      <a href="https://github.com/maulanafikriash" target="_blank"><i class="fa-brands fa-github"></i></a>
      <a href="https://www.instagram.com/maulanafikri.ash/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
      <a href="https://www.linkedin.com/in/maulana-fikri-ash-shidiq-63749227b/" target="_blank"><i
          class="fa-brands fa-linkedin"></i></a>
    </div>
    </section>

      `;
  }
}

customElements.define('about-us', AboutUsSection);
