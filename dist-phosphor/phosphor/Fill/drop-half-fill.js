import { h } from 'vue'
export default {
  name: "DropHalfFill",
  vendor: "Ph",
  tags: ["drop","half","fill"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-drop-half-fill","innerHTML":"  <rect width='256' height='256' fill='none'/>  <path d='M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <path d='M128,224a80,80,0,0,0,80-80c0-72-80-128-80-128Z'/>  <line x1='128' y1='224' x2='128' y2='16' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}