import { h } from 'vue'
export default {
  $_icon: {
    name: "PostOutline",
    vendor: "Mdi",
    type: "",
    tags: ["post","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-post-outline","innerHTML":"<path d='M19 5V19H5V5H19M21 3H3V21H21V3M17 17H7V16H17V17M17 15H7V14H17V15M17 12H7V7H17V12Z' />"},
    )
  }
}