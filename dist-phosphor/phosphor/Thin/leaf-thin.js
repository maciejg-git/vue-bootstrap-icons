import { h } from 'vue'
export default {
  name: "LeafThin",
  vendor: "Ph",
  tags: ["leaf","thin"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-leaf-thin","innerHTML":"  <rect width='256' height='256' fill='none'/>  <line x1='160' y1='96' x2='40' y2='216' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <path d='M64,192C16,112,80,32,216,40,224,176,144,240,64,192Z' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>"},
    )
  }
}