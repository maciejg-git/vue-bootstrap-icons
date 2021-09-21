import { h } from 'vue'
export default {
  name: "TextShort",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon","fill": "currentColor","data-name": "mdi-text-short" },
      [ h("path", { "d": "M4,9H20V11H4V9M4,13H14V15H4V13Z" }) ]
    )
  }
}