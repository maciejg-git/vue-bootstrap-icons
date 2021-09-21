import { h } from 'vue'
export default {
  name: "Drone",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon","fill": "currentColor","data-name": "mdi-drone" },
      [ h("path", { "d": "M22,11H21L20,9H13.75L16,12.5H14L10.75,9H4C3.45,9 2,8.55 2,8C2,7.45 3.5,5.5 5.5,5.5C7.5,5.5 7.67,6.5 9,7H21A1,1 0 0,1 22,8V9L22,11M10.75,6.5L14,3H16L13.75,6.5H10.75M18,11V9.5H19.75L19,11H18M3,19A1,1 0 0,1 2,18A1,1 0 0,1 3,17A4,4 0 0,1 7,21A1,1 0 0,1 6,22A1,1 0 0,1 5,21A2,2 0 0,0 3,19M11,21A1,1 0 0,1 10,22A1,1 0 0,1 9,21A6,6 0 0,0 3,15A1,1 0 0,1 2,14A1,1 0 0,1 3,13A8,8 0 0,1 11,21Z" }) ]
    )
  }
}