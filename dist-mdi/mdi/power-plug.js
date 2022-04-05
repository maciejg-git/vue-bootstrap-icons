import { h } from 'vue'
export default {
  $_icon: {
    name: "PowerPlug",
    vendor: "Mdi",
    type: "",
    tags: ["power","plug"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-power-plug","innerHTML":"<path d='M16,7V3H14V7H10V3H8V7H8C7,7 6,8 6,9V14.5L9.5,18V21H14.5V18L18,14.5V9C18,8 17,7 16,7Z' />"},
    )
  }
}