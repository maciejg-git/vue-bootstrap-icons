import { h } from 'vue'
export default {
  $_icon: {
    name: "SlopeDownhill",
    vendor: "Mdi",
    type: "",
    tags: ["slope","downhill"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-slope-downhill","innerHTML":"<path d='M22,19V22H2V13L22,19M19.09,7.5L18.25,10.26L8.13,7.26C8.06,5.66 6.7,4.42 5.1,4.5C3.5,4.57 2.26,5.93 2.34,7.53C2.41,9.13 3.77,10.36 5.37,10.29C6.24,10.25 7.05,9.82 7.57,9.11L17.69,12.11L16.85,14.89L21.67,12.29L19.09,7.5Z' />"
      }
    )
  }
}