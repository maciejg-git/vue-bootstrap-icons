import { h } from 'vue'
export default {
  $_icon: {
    name: "KeyArrowRight",
    vendor: "Mdi",
    type: "",
    tags: ["key","arrow","right"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-key-arrow-right","innerHTML":"<path d='M11.7 6C11.1 4.2 9.4 3 7.5 3C5 3 3 5 3 7.5S5 12 7.5 12C9.5 12 11.1 10.8 11.7 9H15V12H18V9H21V6H11.7M7.5 9C6.7 9 6 8.3 6 7.5S6.7 6 7.5 6 9 6.7 9 7.5 8.3 9 7.5 9M13 21V19H8V17H13V15L16 18L13 21' />"
      }
    )
  }
}