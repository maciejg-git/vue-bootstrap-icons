import { h } from 'vue'
export default {
  name: "ColorHelper",
  vendor: "Mdi",
  tags: ["color","helper"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"vi-icon","fill":"currentColor","data-name":"mdi-color-helper","innerHTML":"<path d='M0,24H24V20H0V24Z' />"},
    )
  }
}