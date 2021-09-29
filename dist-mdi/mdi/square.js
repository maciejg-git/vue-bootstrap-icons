import { h } from 'vue'
export default {
  name: "Square",
  vendor: "Mdi",
  tags: ["square"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"vi-icon","fill":"currentColor","data-name":"mdi-square","innerHTML":"<path d='M3,3V21H21V3' />"},
    )
  }
}