import { h } from 'vue'
export default {
  $_icon: {
    name: "ChartTimeline",
    vendor: "Mdi",
    type: "",
    tags: ["chart","timeline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-chart-timeline","innerHTML":"<path d='M2,2H4V20H22V22H2V2M7,10H17V13H7V10M11,15H21V18H11V15M6,4H22V8H20V6H8V8H6V4Z' />"},
    )
  }
}