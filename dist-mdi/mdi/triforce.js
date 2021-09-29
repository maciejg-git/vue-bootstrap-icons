import { h } from 'vue'
export default {
  name: "Triforce",
  vendor: "Mdi",
  tags: ["triforce"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"vi-icon","fill":"currentColor","data-name":"mdi-triforce","innerHTML":"<path d='M1.5,21L12,3.5L22.5,21H1.5M12,21L17,12H7L12,21Z' />"},
    )
  }
}