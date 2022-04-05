import { h } from 'vue'
export default {
  $_icon: {
    name: "FolderArrowUpDownOutline",
    vendor: "Mdi",
    type: "",
    tags: ["folder","arrow","up","down","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-folder-arrow-up-down-outline","innerHTML":"<path d='M13 19C13 19.34 13.04 19.67 13.09 20H4C2.9 20 2 19.11 2 18V6C2 4.89 2.89 4 4 4H10L12 6H20C21.1 6 22 6.89 22 8V13.81C21.39 13.46 20.72 13.22 20 13.09V8H4V18H13.09C13.04 18.33 13 18.66 13 19M22 20V16H20V20H18.5L21 23L23.5 20H22M17 15L14.5 18H16V22H18V18H19.5L17 15Z' />"},
    )
  }
}