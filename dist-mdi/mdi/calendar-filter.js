import { h } from 'vue'
export default {
  $_icon: {
    name: "CalendarFilter",
    vendor: "Mdi",
    type: "",
    tags: ["calendar","filter"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-calendar-filter"},
      [ 
        h(
          "path",
          {"d":"M19 21.44C19 21.59 18.97 21.75 18.86 21.86L18.69 21.96L18.5 22L18.31 21.96L18.15 21.85L17.15 20.85L17.03 20.66L17 20.44V17.5H17L14.1 13.81C14.03 13.71 14 13.57 14 13.44C14 13.31 14.09 13.19 14.19 13.11L14.5 13H21.5L21.81 13.11C21.92 13.19 22 13.31 22 13.44C22 13.57 22 13.71 21.9 13.81L19 17.5H19V21.44M6 1H8V3H16V1H18V3H19C20.11 3 21 3.9 21 5V11H19V8H5V19H15V21H5C3.9 21 3 20.11 3 19V5C3 3.9 3.9 3 5 3H6V1Z"}
        ) 
      ]
    )
  }
}