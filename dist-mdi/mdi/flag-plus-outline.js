import { h } from 'vue'
export default {
  $_icon: {
    name: "FlagPlusOutline",
    vendor: "Mdi",
    type: "",
    tags: ["flag","plus","outline"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-flag-plus-outline","innerHTML":"<path d='M13 16L12.6 14H7V21H5V4H14L14.4 6H20V13.09C19.67 13.04 19.34 13 19 13C18.66 13 18.33 13.04 18 13.09V8H12.76L12.36 6H7V12H14.24L14.64 14H15.69C14.92 14.5 14.27 15.2 13.81 16H13M18 15V18H15V20H18V23H20V20H23V18H20V15H18Z' />"
      }
    )
  }
}