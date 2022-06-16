import { h } from 'vue'
export default {
  $_icon: {
    name: "TimelineText",
    vendor: "Mdi",
    type: "",
    tags: ["timeline","text"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-timeline-text","innerHTML":"<path d='M4 2V8H2V2H4M2 22H4V16H2V22M5 12C5 10.9 4.11 10 3 10C1.9 10 1 10.9 1 12C1 13.11 1.9 14 3 14C4.11 14 5 13.11 5 12M24 6V18C24 19.11 23.11 20 22 20H10C8.9 20 8 19.11 8 18V14L6 12L8 10V6C8 4.89 8.9 4 10 4H22C23.11 4 24 4.89 24 6M19 13H11V15H19V13M21 9H11V11H21V9Z' />"
      }
    )
  }
}