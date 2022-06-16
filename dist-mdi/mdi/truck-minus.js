import { h } from 'vue'
export default {
  $_icon: {
    name: "TruckMinus",
    vendor: "Mdi",
    type: "",
    tags: ["truck","minus"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-truck-minus","innerHTML":"<path d='M20 8H17V4H3C1.89 4 1 4.89 1 6V17H3C3 18.66 4.34 20 6 20S9 18.66 9 17H15C15 18.66 16.34 20 18 20S21 18.66 21 17H23V12L20 8M6 18.5C5.17 18.5 4.5 17.83 4.5 17S5.17 15.5 6 15.5 7.5 16.17 7.5 17 6.83 18.5 6 18.5M13 11H5V9H13V11M18 18.5C17.17 18.5 16.5 17.83 16.5 17S17.17 15.5 18 15.5 19.5 16.17 19.5 17 18.83 18.5 18 18.5M17 12V9.5H19.5L21.46 12H17' />"
      }
    )
  }
}