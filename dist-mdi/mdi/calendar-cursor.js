import { h } from 'vue'
export default {
  $_icon: {
    name: "CalendarCursor",
    vendor: "Mdi",
    type: "",
    tags: ["calendar","cursor"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-calendar-cursor","innerHTML":"<path d='M21.7 20.26L20.29 21.67L17.06 18.5L16 20.97L14 14L21 16L18.47 17.03L21.7 20.26M19 8H5V19H13.41L13.97 21H5C3.89 21 3 20.1 3 19L3 5C3 3.9 3.89 3 5 3H6V1H8V3H16V1H18V3H19C20.1 3 21 3.9 21 5V13.95L19 13.35V8M12 10V15H7V10H12Z' />"},
    )
  }
}