import { h } from 'vue'
export default {
  $_icon: {
    name: "WindowShutterSettings",
    vendor: "Mdi",
    type: "",
    tags: ["window","shutter","settings"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-window-shutter-settings","innerHTML":"<path d='M3 4H21V8H19V20H17V8H7V20H5V8H3V4M8 9H16V11H8V9M8 12H16V14H8V12M8 15H16V17H8V15M8 18H16V20H8V18M13 22H11V24H13V22M17 22H15V24H17V22M9 22H7V24H9V22Z' />"
      }
    )
  }
}