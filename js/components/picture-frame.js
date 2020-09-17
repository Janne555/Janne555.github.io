class PictureFrame extends HTMLElement {

  async connectedCallback() {
    const src = this.getAttribute("src")
    const observer = new IntersectionObserver(event => {
      if (event.some(entry => entry.isIntersecting)) {
        document.querySelector("#dynamic-style").innerHTML = `
        @media screen and (max-width: 600px) {
          body {
            background: url(${src});
            background-size: cover;
          }
        }
        `
      }
    }, {
      root: document.root,
      threshold: 1.0
    })

    observer.observe(this)

    this.innerHTML = `
      <style>
        @import "css/picture-frame.css";
      </style>
      <picture>
        <img src="${src}" alt="foo" />
      </picture>
    `
  }
}

window.customElements.define('picture-frame', PictureFrame)