import { h } from 'vue'
export default {
  name: "HomePlus",
  vendor: "Mdi",
  tags: ["home","plus"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"vi-icon","fill":"currentColor","data-name":"mdi-home-plus","innerHTML":"<path d='M12,3L2,12H5V20H19V12H22L12,3M11,10H13V13H16V15H13V18H11V15H8V13H11V10Z' />"},
    )
  }
}