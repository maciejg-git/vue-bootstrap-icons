import { h } from 'vue'
export default {
  $_icon: {
    name: "SquareRoundedBadge",
    vendor: "Mdi",
    type: "",
    tags: ["square","rounded","badge"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-square-rounded-badge","innerHTML":"<path d='M19.5 8C21.43 8 23 6.43 23 4.5C23 2.57 21.43 1 19.5 1C17.57 1 16 2.57 16 4.5C16 6.43 17.57 8 19.5 8M19.5 10C20 10 20.5 9.93 21 9.79V16C21 18.76 18.76 21 16 21H8C5.24 21 3 18.76 3 16V8C3 5.24 5.24 3 8 3H14.21C14.07 3.5 14 4 14 4.5C14 7.54 16.46 10 19.5 10Z' />"
      }
    )
  }
}