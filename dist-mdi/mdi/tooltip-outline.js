import { h } from 'vue'
export default {
  $_icon: {
    name: "TooltipOutline",
    vendor: "Mdi",
    type: "",
    tags: ["tooltip","outline"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-tooltip-outline","innerHTML":"<path d='M4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H16L12,22L8,18H4A2,2 0 0,1 2,16V4A2,2 0 0,1 4,2M4,4V16H8.83L12,19.17L15.17,16H20V4H4Z' />"
      }
    )
  }
}