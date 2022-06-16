import { h } from 'vue'
export default {
  $_icon: {
    name: "AlertPlusOutline",
    vendor: "Mdi",
    type: "",
    tags: ["alert","plus","outline"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-alert-plus-outline","innerHTML":"<path d='M11 15.5H13V17.5H11V15.5M14 19C14 18.86 14 18.73 14 18.6H5.4L12 7.3L16.11 14.44C16.62 14 17.2 13.65 17.84 13.41L12 3.3L2 20.6H14.22C14.08 20.09 14 19.56 14 19M13 10.5H11V14.5H13V10.5M19 15V18H16V20H19V23H21V20H24V18H21V15H19Z' />"
      }
    )
  }
}