import { h } from 'vue'
export default {
  name: "CirclesThreePlus",
  vendor: "Ph",
  tags: ["circles","three","plus"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-circles-three-plus","innerHTML":"  <rect width='256' height='256' fill='none'/>  <circle cx='76' cy='76' r='36' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <circle cx='180' cy='76' r='36' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <circle cx='76' cy='180' r='36' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <line x1='180' y1='152' x2='180' y2='208' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <line x1='208' y1='180' x2='152' y2='180' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}