import { h } from 'vue'
export default {
  name: "Archive",
  vendor: "Ph",
  tags: ["archive"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-archive","innerHTML":"  <rect width='256' height='256' fill='none'/>  <rect x='24' y='56' width='208' height='40' rx='7.99999' stroke-width='16' stroke='#000' stroke-linecap='round' stroke-linejoin='round' fill='none'/>  <path d='M216,96v96a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <line x1='104' y1='136' x2='152' y2='136' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}