import { h } from 'vue'
export default {
  $_icon: {
    name: "Parking",
    vendor: "Mdi",
    type: "",
    tags: ["parking"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-parking","innerHTML":"<path d='M13.2,11H10V7H13.2A2,2 0 0,1 15.2,9A2,2 0 0,1 13.2,11M13,3H6V21H10V15H13A6,6 0 0,0 19,9C19,5.68 16.31,3 13,3Z' />"
      }
    )
  }
}