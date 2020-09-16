import { getTemplate } from '../utils.js'

class NavBar extends HTMLElement {
  async connectedCallback() {
    const template = await getTemplate('../../templates/nav-content.html?ver=5')
    this.innerHTML = template.innerHTML

    const currentpage = this.getAttribute("currentpage")
    if (currentpage) {
      this.querySelector(`#${currentpage}-item`).setAttribute('data-active', 'true')
    }
  }
}

window.customElements.define('nav-content', NavBar)