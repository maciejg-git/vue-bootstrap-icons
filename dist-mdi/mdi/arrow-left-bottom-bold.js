import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowLeftBottomBold",
    vendor: "Mdi",
    type: "",
    tags: ["arrow","left","bottom","bold"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-arrow-left-bottom-bold","innerHTML":"<path d='M21 10.5C21 14.64 17.64 18 13.5 18H11V22L4 16L11 10V14H13.5C15.43 14 17 12.43 17 10.5V3H21V10.5Z' />"},
    )
  }
}