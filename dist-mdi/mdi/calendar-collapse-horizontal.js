import { h } from 'vue'
export default {
  $_icon: {
    name: "CalendarCollapseHorizontal",
    vendor: "Mdi",
    type: "",
    tags: ["calendar","collapse","horizontal"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-calendar-collapse-horizontal","innerHTML":"<path d='M19 19H5V8H19M16 1V3H8V1H6V3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3H18V1M11 14L8 11V13H6V15H8V17L11 14M18 13H16V11L13 14L16 17V15H18V13Z' />"
      }
    )
  }
}