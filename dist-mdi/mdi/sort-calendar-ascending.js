import { h } from 'vue'
export default {
  $_icon: {
    name: "SortCalendarAscending",
    vendor: "Mdi",
    type: "",
    tags: ["sort","calendar","ascending"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-sort-calendar-ascending","innerHTML":"<path d='M21 17H24L20 21L16 17H19V3H21V17M8 16H11V13H8V16M13 5H12V3H10V5H6V3H4V5H3C1.89 5 1 5.89 1 7V18C1 19.11 1.89 20 3 20H13C14.11 20 15 19.11 15 18V7C15 5.89 14.11 5 13 5M3 18L3 11H13L13 18L3 18Z' />"
      }
    )
  }
}