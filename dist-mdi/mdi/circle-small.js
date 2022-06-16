import { h } from 'vue'
export default {
  $_icon: {
    name: "CircleSmall",
    vendor: "Mdi",
    type: "",
    tags: ["circle","small"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-circle-small","innerHTML":"<path d='M12,10A2,2 0 0,0 10,12C10,13.11 10.9,14 12,14C13.11,14 14,13.11 14,12A2,2 0 0,0 12,10Z' />"
      }
    )
  }
}