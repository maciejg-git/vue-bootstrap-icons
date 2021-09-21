import { h } from 'vue'
export default {
  name: "MenuDown",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon","fill": "currentColor","data-name": "mdi-menu-down" },
      [ h("path", { "d": "M7,10L12,15L17,10H7Z" }) ]
    )
  }
}