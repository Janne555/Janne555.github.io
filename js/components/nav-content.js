import { getTemplate } from '../utils.js'

class NavBar extends HTMLElement {
  async connectedCallback() {
    const template = await getTemplate('../../templates/nav-content.html?ver=2')
    this.innerHTML = template.innerHTML
  }
}

window.customElements.define('nav-content', NavBar)