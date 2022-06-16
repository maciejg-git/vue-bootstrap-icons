import { h } from 'vue'
export default {
  $_icon: {
    name: "BackspaceOutline",
    vendor: "Mdi",
    type: "",
    tags: ["backspace","outline"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-backspace-outline","innerHTML":"<path d='M19,15.59L17.59,17L14,13.41L10.41,17L9,15.59L12.59,12L9,8.41L10.41,7L14,10.59L17.59,7L19,8.41L15.41,12L19,15.59M22,3A2,2 0 0,1 24,5V19A2,2 0 0,1 22,21H7C6.31,21 5.77,20.64 5.41,20.11L0,12L5.41,3.88C5.77,3.35 6.31,3 7,3H22M22,5H7L2.28,12L7,19H22V5Z' />"
      }
    )
  }
}