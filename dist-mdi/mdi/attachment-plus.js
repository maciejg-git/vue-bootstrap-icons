import { h } from 'vue'
export default {
  $_icon: {
    name: "AttachmentPlus",
    vendor: "Mdi",
    type: "",
    tags: ["attachment","plus"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-attachment-plus","innerHTML":"<path d='M7.5 16.5H13.55C13.34 16.97 13.18 17.47 13.09 18H7.5C4.46 18 2 15.54 2 12.5S4.46 7 7.5 7H18C20.21 7 22 8.79 22 11C22 11.91 21.69 12.74 21.17 13.41C20.63 13.2 20.05 13.07 19.45 13.03C20.08 12.58 20.5 11.84 20.5 11C20.5 9.62 19.38 8.5 18 8.5H7.5C5.29 8.5 3.5 10.29 3.5 12.5S5.29 16.5 7.5 16.5M9.5 13.5C8.95 13.5 8.5 13.05 8.5 12.5S8.95 11.5 9.5 11.5H17V10H9.5C8.12 10 7 11.12 7 12.5S8.12 15 9.5 15H14.54C15.11 14.36 15.81 13.85 16.61 13.5H9.5M20 18V15H18V18H15V20H18V23H20V20H23V18H20Z' />"
      }
    )
  }
}