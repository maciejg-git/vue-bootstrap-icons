import { h } from 'vue'
export default {
  $_icon: {
    name: "TagOff",
    vendor: "Mdi",
    type: "",
    tags: ["tag","off"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-tag-off","innerHTML":"<path d='M18.33 8.5L22.92 3.92L21.5 2.5L2.5 21.5L3.92 22.92L8.5 18.33L11.58 21.41A2 2 0 0 0 13 22A2 2 0 0 0 14.41 21.41L21.41 14.41A2 2 0 0 0 22 13A2 2 0 0 0 21.41 11.58M5.61 15.43L15.47 5.65L12.41 2.58A2 2 0 0 0 11 2H4A2 2 0 0 0 2 4V11A2 2 0 0 0 2.59 12.41M5.5 4A1.5 1.5 0 1 1 4 5.5A1.5 1.5 0 0 1 5.5 4Z' />"
      }
    )
  }
}