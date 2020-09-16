class PictureFrame extends HTMLElement {

  async connectedCallback() {
    const src = this.getAttribute("src")

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