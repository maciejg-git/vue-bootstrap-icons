import { h } from 'vue'
export default {
  $_icon: {
    name: "HospitalMarker",
    vendor: "Mdi",
    type: "",
    tags: ["hospital","marker"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-hospital-marker","innerHTML":"<path d='M12,2C15.86,2 19,5.13 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M9,6V12H11V10H13V12H15V6H13V8H11V6H9Z' />"
      }
    )
  }
}