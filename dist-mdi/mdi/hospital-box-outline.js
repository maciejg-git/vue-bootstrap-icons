import { h } from 'vue'
export default {
  $_icon: {
    name: "HospitalBoxOutline",
    vendor: "Mdi",
    type: "",
    tags: ["hospital","box","outline"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-hospital-box-outline","innerHTML":"<path d='M18 14H14V18H10V14H6V10H10V6H14V10H18M20 2H4C2.9 2 2 2.9 2 4V20C2 21.1 2.9 22 4 22H20C21.1 22 22 21.1 22 20V4C22 2.9 21.1 2 20 2M20 20H4V4H20V20Z' />"
      }
    )
  }
}