import { h } from 'vue'
export default {
  name: "Comma",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon","fill": "currentColor","data-name": "mdi-comma" },
      [ h("path", { "d": "M7,3H16.95V12.96L12.96,20.94H8L11.97,12.96H7V3Z" }) ]
    )
  }
}