import { h } from 'vue'
export default {
  $_icon: {
    name: "FitToScreen",
    vendor: "Mdi",
    type: "",
    tags: ["fit","to","screen"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-fit-to-screen","innerHTML":"<path d='M17 4H20C21.1 4 22 4.9 22 6V8H20V6H17V4M4 8V6H7V4H4C2.9 4 2 4.9 2 6V8H4M20 16V18H17V20H20C21.1 20 22 19.1 22 18V16H20M7 18H4V16H2V18C2 19.1 2.9 20 4 20H7V18M18 8H6V16H18V8Z' />"},
    )
  }
}