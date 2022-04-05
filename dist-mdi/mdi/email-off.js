import { h } from 'vue'
export default {
  $_icon: {
    name: "EmailOff",
    vendor: "Mdi",
    type: "",
    tags: ["email","off"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-email-off","innerHTML":"<path d='M22.1 21.5L2.4 1.7L1.1 3L2.6 4.5C2.2 4.9 2 5.4 2 6V18C2 19.1 2.9 20 4 20H18.1L20.8 22.7L22.1 21.5M4 8V6L4.3 6.2L9.6 11.5L4 8M13.4 10.2L7.2 4H20C21.1 4 22 4.9 22 6V18C22 18.2 22 18.5 21.9 18.7L14.6 11.4L20 8V6L13.4 10.2Z' />"},
    )
  }
}