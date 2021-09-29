import { h } from 'vue'
export default {
  name: "FlagBanner",
  vendor: "Ph",
  tags: ["flag","banner"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-flag-banner","innerHTML":"  <rect width='256' height='256' fill='none'/>  <polyline points='40 216 40 48 40 48 224 48 176 108 224 168 40 168' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}