import { h } from 'vue'
export default {
  $_icon: {
    name: "CircleBoxOutline",
    vendor: "Mdi",
    type: "",
    tags: ["circle","box","outline"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-circle-box-outline","innerHTML":"<path d='M19 5V19H5V5H19M19 3H5C3.9 3 3 3.9 3 5V19C3 20.11 3.9 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.9 20.11 3 19 3M12 8C9.79 8 8 9.79 8 12S9.79 16 12 16 16 14.21 16 12 14.21 8 12 8Z' />"
      }
    )
  }
}