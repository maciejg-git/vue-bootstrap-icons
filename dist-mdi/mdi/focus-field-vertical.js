import { h } from 'vue'
export default {
  $_icon: {
    name: "FocusFieldVertical",
    vendor: "Mdi",
    type: "",
    tags: ["focus","field","vertical"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-focus-field-vertical","innerHTML":"<path d='M19 19H15V21H19C20.1 21 21 20.1 21 19V15H19M19 3H15V5H19V9H21V5C21 3.9 20.1 3 19 3M5 5H9V3H5C3.9 3 3 3.9 3 5V9H5M5 15H3V19C3 20.1 3.9 21 5 21H9V19H5V15M11 11H13V13H11V11M11 7H13V9H11V7M11 15H13V17H11V15Z' />"},
    )
  }
}