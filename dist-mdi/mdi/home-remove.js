import { h } from 'vue'
export default {
  $_icon: {
    name: "HomeRemove",
    vendor: "Mdi",
    type: "",
    tags: ["home","remove"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-home-remove","innerHTML":"<path d='M14.46 15.88L15.88 14.46L18 16.59L20.12 14.47L21.54 15.88L19.41 18L21.54 20.12L20.12 21.54L18 19.41L15.88 21.54L14.46 20.12L16.59 18L14.47 15.88M12 3L22 12H18C14.69 12 12 14.69 12 18C12 18.7 12.12 19.37 12.34 20H5V12H2L12 3Z' />"
      }
    )
  }
}