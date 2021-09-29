import { h } from 'vue'
export default {
  name: "Rainbow",
  vendor: "Ph",
  tags: ["rainbow"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-rainbow","innerHTML":"  <rect width='256' height='256' fill='none'/>  <path d='M176,184V168a48,48,0,0,0-96,0v16' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <path d='M208,184V168a80,80,0,0,0-160,0v16' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <path d='M240,184V168a112,112,0,0,0-224,0v16' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}