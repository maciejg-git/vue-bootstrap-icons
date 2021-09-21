import { h } from 'vue'
export default {
  name: "SwapVertical",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon","fill": "currentColor","data-name": "mdi-swap-vertical" },
      [ h("path", { "d": "M9,3L5,7H8V14H10V7H13M16,17V10H14V17H11L15,21L19,17H16Z" }) ]
    )
  }
}