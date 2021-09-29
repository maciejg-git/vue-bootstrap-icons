import { h } from 'vue'
export default {
  name: "BedThin",
  vendor: "Ph",
  tags: ["bed","thin"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-bed-thin","innerHTML":"  <rect width='256' height='256' fill='none'/>  <path d='M104,168V80H208a32,32,0,0,1,32,32v56' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <line x1='16' y1='208' x2='16' y2='48' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <polyline points='16 168 240 168 240 208' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <line x1='104' y1='80' x2='16' y2='80' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>"},
    )
  }
}