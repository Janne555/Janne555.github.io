import { getTemplate } from '../utils.js'

class NavBar extends HTMLElement {
  async connectedCallback() {
    const template = await getTemplate('../../templates/nav-content.html')
    this.innerHTML = template.innerHTML
  }
}

window.customElements.define('nav-content', NavBar)