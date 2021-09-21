import { h } from 'vue'
export default {
  name: "Buffet",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon","fill": "currentColor","data-name": "mdi-buffet" },
      [ h("path", { "d": "M9 14C9.55 14 10 14.45 10 15C10 15.55 9.55 16 9 16C8.45 16 8 15.55 8 15C8 14.45 8.45 14 9 14M15 14C15.55 14 16 14.45 16 15C16 15.55 15.55 16 15 16C14.45 16 14 15.55 14 15C14 14.45 14.45 14 15 14M3 22L4 19H3C2.45 19 2 18.55 2 18V12C2 11.45 2.45 11 3 11H21C21.55 11 22 11.45 22 12V18C22 18.55 21.55 19 21 19H20L21 22H19L18 19H6L5 22H3M13 13V17H20V13H13M4 13V17H11V13H4Z" }) ]
    )
  }
}