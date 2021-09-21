import { h } from 'vue'
export default {
  name: "SwapVerticalCircleOutline",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon","fill": "currentColor","data-name": "mdi-swap-vertical-circle-outline" },
      [ h("path", { "d": "M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M6.5 9L10 5.5L13.5 9H11V13H9V9H6.5M17.5 15L14 18.5L10.5 15H13V11H15V15H17.5Z" }) ]
    )
  }
}