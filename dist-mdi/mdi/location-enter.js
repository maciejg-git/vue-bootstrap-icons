import { h } from 'vue'
export default {
  $_icon: {
    name: "LocationEnter",
    vendor: "Mdi",
    type: "",
    tags: ["location","enter"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-location-enter","innerHTML":"<path d='M14 12L10 8V11H2V13H10V16M22 12A10 10 0 0 1 2.46 15H4.59A8 8 0 1 0 4.59 9H2.46A10 10 0 0 1 22 12Z' />"},
    )
  }
}