import { h } from 'vue'
export default {
  name: "ArrowLeftRightBold",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon","fill": "currentColor","data-name": "mdi-arrow-left-right-bold" },
      [ h("path", { "d": "M8,14V18L2,12L8,6V10H16V6L22,12L16,18V14H8Z" }) ]
    )
  }
}