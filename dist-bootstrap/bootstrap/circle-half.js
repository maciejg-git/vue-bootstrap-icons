import { h } from 'vue'
export default {
  $_icon: {
    name: "CircleHalf",
    vendor: "B",
    type: "",
    tags: ["circle","half"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-circle-half","innerHTML":"<path d='M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z'/>"
      }
    )
  }
}