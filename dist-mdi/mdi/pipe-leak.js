import { h } from 'vue'
export default {
  $_icon: {
    name: "PipeLeak",
    vendor: "Mdi",
    type: "",
    tags: ["pipe","leak"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-pipe-leak","innerHTML":"<path d='M2,5V13H4V11H10L12,9L10,7H4V5H2M20,5V7H12L14,9L12,11H20V13H22V5H20M12,13C12,13 10,15.17 10,16.5A2,2 0 0,0 12,18.5A2,2 0 0,0 14,16.5C14,15.17 12,13 12,13Z' />"
      }
    )
  }
}