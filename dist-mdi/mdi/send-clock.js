import { h } from 'vue'
export default {
  $_icon: {
    name: "SendClock",
    vendor: "Mdi",
    type: "",
    tags: ["send","clock"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-send-clock","innerHTML":"<path d='M2 3V10L11 12L2 14V21L9.27 17.89A7 7 0 0 0 16 23A7 7 0 0 0 23 16A7 7 0 0 0 16 9L2 3M16 11A5 5 0 0 1 21 16A5 5 0 0 1 16 21A5 5 0 0 1 11 16A5 5 0 0 1 16 11M15 12.5V16.5L18 18.5L18.75 17.25L16.5 15.75V12.5H15Z' />"},
    )
  }
}