import { h } from 'vue'
export default {
  $_icon: {
    name: "TrafficCone",
    vendor: "Mdi",
    type: "",
    tags: ["traffic","cone"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-traffic-cone","innerHTML":"<path d='M17 15L18 19H21V22H3V19H6L7 15H17M15 8L16 12H8L9 8H15M13 1L14 5H10L11 1H13Z' />"
      }
    )
  }
}