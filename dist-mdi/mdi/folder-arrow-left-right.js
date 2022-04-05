import { h } from 'vue'
export default {
  $_icon: {
    name: "FolderArrowLeftRight",
    vendor: "Mdi",
    type: "",
    tags: ["folder","arrow","left","right"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-folder-arrow-left-right","innerHTML":"<path d='M13 19C13 19.34 13.04 19.67 13.09 20H4C2.9 20 2 19.11 2 18V6C2 4.89 2.89 4 4 4H10L12 6H20C21.1 6 22 6.89 22 8V13.81C21.12 13.3 20.1 13 19 13C15.69 13 13 15.69 13 19M23 17L20 14.5V16H16V18H20V19.5L23 17M18 18.5L15 21L18 23.5V22H22V20H18V18.5Z' />"},
    )
  }
}