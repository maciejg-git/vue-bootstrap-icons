import { h } from 'vue'
export default {
  name: "SimCard",
  vendor: "Ph",
  tags: ["sim","card"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-sim-card","innerHTML":"  <rect width='256' height='256' fill='none'/>  <path d='M200,224.00005H55.99219a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8L152,32l56,56v128A8,8,0,0,1,200,224.00005Z' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <rect x='80' y='120' width='96' height='72' stroke-width='16' stroke='#000' stroke-linecap='round' stroke-linejoin='round' fill='none'/>  <line x1='112' y1='152' x2='112' y2='192' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <line x1='144' y1='152' x2='144' y2='192' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}