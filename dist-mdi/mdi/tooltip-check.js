import { h } from 'vue'
export default {
  $_icon: {
    name: "TooltipCheck",
    vendor: "Mdi",
    type: "",
    tags: ["tooltip","check"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-tooltip-check","innerHTML":"<path d='M20 2H4C2.9 2 2 2.9 2 4V16C2 17.11 2.9 18 4 18H8L12 22L16 18H20C21.11 18 22 17.11 22 16V4C22 2.9 21.11 2 20 2M10.46 14L6.96 10.5L8.37 9.08L10.46 11.17L15.64 6L17.05 7.41L10.46 14Z' />"},
    )
  }
}