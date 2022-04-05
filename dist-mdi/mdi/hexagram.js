import { h } from 'vue'
export default {
  $_icon: {
    name: "Hexagram",
    vendor: "Mdi",
    type: "",
    tags: ["hexagram"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-hexagram","innerHTML":"<path d='M14.5,7.66L20.64,6.97L17,12L20.68,16.97L14.5,16.32L12.03,22L9.5,16.34L3.36,17.03L7,12L3.32,7.03L9.5,7.68L11.97,2L14.5,7.66Z' />"},
    )
  }
}