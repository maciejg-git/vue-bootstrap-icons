import { h } from 'vue'
export default {
  name: "MoviePlayOutline",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon","fill": "currentColor","data-name": "mdi-movie-play-outline" },
      [ h("path", { "d": "M22 4V13.81C21.39 13.46 20.72 13.22 20 13.09V10H5.76L4 6.47V18H13.09C13.04 18.33 13 18.66 13 19C13 19.34 13.04 19.67 13.09 20H4C2.9 20 2 19.11 2 18V6C2 4.89 2.9 4 4 4H5L7 8H10L8 4H10L12 8H15L13 4H15L17 8H20L18 4H22M17 22L22 19L17 16V22Z" }) ]
    )
  }
}