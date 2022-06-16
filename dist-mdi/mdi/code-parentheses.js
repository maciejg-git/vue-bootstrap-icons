import { h } from 'vue'
export default {
  $_icon: {
    name: "CodeParentheses",
    vendor: "Mdi",
    type: "",
    tags: ["code","parentheses"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-code-parentheses","innerHTML":"<path d='M17.62,3C19.13,5.27 20,8.55 20,12C20,15.44 19.13,18.72 17.62,21L16,19.96C17.26,18.07 18,15.13 18,12C18,8.87 17.26,5.92 16,4.03L17.62,3M6.38,3L8,4.04C6.74,5.92 6,8.87 6,12C6,15.13 6.74,18.08 8,19.96L6.38,21C4.87,18.73 4,15.45 4,12C4,8.55 4.87,5.27 6.38,3Z' />"
      }
    )
  }
}