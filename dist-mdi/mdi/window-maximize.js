import { h } from 'vue'
export default {
  name: "WindowMaximize",
  vendor: "Mdi",
  tags: ["window","maximize"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"vi-icon","fill":"currentColor","data-name":"mdi-window-maximize","innerHTML":"<path d='M4,4H20V20H4V4M6,8V18H18V8H6Z' />"},
    )
  }
}