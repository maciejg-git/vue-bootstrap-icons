import { h } from 'vue'
export default {
  $_icon: {
    name: "CalendarTextOutline",
    vendor: "Mdi",
    type: "",
    tags: ["calendar","text","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-calendar-text-outline"},
      [ 
        h(
          "path",
          {"d":"M19,4H18V2H16V4H8V2H6V4H5A2,2 0 0,0 3,6V20A2,2 0 0,0 5,22H19A2,2 0 0,0 21,20V6A2,2 0 0,0 19,4M19,20H5V10H19V20M5,8V6H19V8H5M7,12H17V14H7V12M7,16H14V18H7V16Z"}
        ) 
      ]
    )
  }
}