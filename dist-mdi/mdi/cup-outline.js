import { h } from 'vue'
export default {
  $_icon: {
    name: "CupOutline",
    vendor: "Mdi",
    type: "",
    tags: ["cup","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-cup-outline","innerHTML":"<path d='M3 2L5 20.23C5.13 21.23 5.97 22 7 22H17C18 22 18.87 21.23 19 20.23L21 2H3M5.22 4H18.78L17 20H7L5.22 4Z' />"},
    )
  }
}