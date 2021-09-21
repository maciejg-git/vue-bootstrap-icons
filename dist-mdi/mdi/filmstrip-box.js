import { h } from 'vue'
export default {
  name: "FilmstripBox",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon","fill": "currentColor","data-name": "mdi-filmstrip-box" },
      [ h("path", { "d": "M19 3C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19M7 18V16H5V18H7M7 13V11H5V13H7M7 8V6H5V8H7M19 18V16H17V18H19M19 13V11H17V13H19M19 8V6H17V8H19Z" }) ]
    )
  }
}