import { h } from 'vue'
export default {
  $_icon: {
    name: "CalendarWeekOutline",
    vendor: "Mdi",
    type: "",
    tags: ["calendar","week","outline"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-calendar-week-outline","innerHTML":"<path d='M5 4H6V2H8V4H16V2H18V4H19C20.11 4 21 4.89 21 6V20C21 21.1 20.11 22 19 22H5C3.9 22 3 21.11 3 20V6C3 4.89 3.9 4 5 4M5 20H19V10H5V20M5 8H19V6H5V8M17 12V14H7V12H17' />"
      }
    )
  }
}