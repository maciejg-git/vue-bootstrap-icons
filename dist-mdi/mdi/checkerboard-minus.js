import { h } from 'vue'
export default {
  name: "CheckerboardMinus",
  vendor: "Mdi",
  tags: ["checkerboard","minus"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"vi-icon","fill":"currentColor","data-name":"mdi-checkerboard-minus","innerHTML":"<path d='M14 17V19H22V17M8 16H12V12H8V16M12 12H16V8H12V12M2 2V22H13.5C13 21.4 12.6 20.7 12.3 20H8V16H4V12H8V8H4V4H8V8H12V4H16V8H20V12.4C20.7 12.7 21.4 13.1 22 13.6V2H2Z' />"},
    )
  }
}