import { getTemplate } from '../utils.js?ver=7'

class NavBar extends HTMLElement {
  async connectedCallback() {
    const template = await getTemplate('../../templates/nav-content.html?ver=7')
    this.innerHTML = template.innerHTML

    const currentpage = this.getAttribute("currentpage")
    if (currentpage) {
      this.querySelector(`#${currentpage}-item`).setAttribute('data-active', 'true')
    }
  }
}

window.customElements.define('nav-content', NavBar)