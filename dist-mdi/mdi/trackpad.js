import { h } from 'vue'
export default {
  $_icon: {
    name: "Trackpad",
    vendor: "Mdi",
    type: "",
    tags: ["trackpad"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-trackpad","innerHTML":"<path d='M4,3H20A2,2 0 0,1 22,5V19A2,2 0 0,1 20,21H4A2,2 0 0,1 2,19V5A2,2 0 0,1 4,3M4,5V13H20V5H4M4,19H11V15H4V19M20,19V15H13V19H20Z' />"},
    )
  }
}