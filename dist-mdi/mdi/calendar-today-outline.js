import { h } from 'vue'
export default {
  $_icon: {
    name: "CalendarTodayOutline",
    vendor: "Mdi",
    type: "",
    tags: ["calendar","today","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-calendar-today-outline"},
      [ 
        h(
          "path",
          {"d":"M19 4H18V2H16V4H8V2H6V4H5C3.9 4 3 4.89 3 6V20C3 21.11 3.9 22 5 22H19C20.11 22 21 21.11 21 20V6C21 4.89 20.11 4 19 4M19 20H5V10H19V20M19 8H5V6H19M7 12H12V17H7"}
        ) 
      ]
    )
  }
}