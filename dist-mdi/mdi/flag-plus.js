import { h } from 'vue'
export default {
  $_icon: {
    name: "FlagPlus",
    vendor: "Mdi",
    type: "",
    tags: ["flag","plus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-flag-plus","innerHTML":"<path d='M17,14H19V17H22V19H19V22H17V19H14V17H17V14M12.4,5H18V12C15.78,12 13.84,13.21 12.8,15H11L10.6,13H5V20H3V3H12L12.4,5Z' />"},
    )
  }
}