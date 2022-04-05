import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowTopLeftBoldBox",
    vendor: "Mdi",
    type: "",
    tags: ["arrow","top","left","bold","box"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-arrow-top-left-bold-box","innerHTML":"<path d='M5 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3M8.2 8V15.1L10.3 13L14.1 16.9L17 14L13.2 10.1L15.3 8H8.2Z' />"},
    )
  }
}