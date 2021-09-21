import { h } from 'vue'
export default {
  name: "WaterMinus",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon","fill": "currentColor","data-name": "mdi-water-minus" },
      [ h("path", { "d": "M22 17V19H14V17H22M17.62 12C16.31 8.1 12 3.25 12 3.25S6 10 6 14C6 17.31 8.69 20 12 20C12.12 20 12.23 20 12.34 20C12.12 19.36 12 18.7 12 18C12 14.82 14.5 12.22 17.62 12Z" }) ]
    )
  }
}