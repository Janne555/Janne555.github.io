class PictureFrame extends HTMLElement {

  async connectedCallback() {
    const src = this.getAttribute("src")
    const observer = new IntersectionObserver(event => {
      if (event.some(entry => entry.isIntersecting)) {
        this.classList.toggle("foo")
        document.querySelector("#dynamic-style").innerHTML = `body { background: url(${src}); background-size: cover;}`
      } else {
        this.classList.toggle("foo")
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