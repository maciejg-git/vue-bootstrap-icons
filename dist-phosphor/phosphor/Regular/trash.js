import { h } from 'vue'
export default {
  name: "Trash",
  vendor: "Ph",
  tags: ["trash"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-trash","innerHTML":"  <rect width='256' height='256' fill='none'/>  <line x1='215.99609' y1='56' x2='39.99609' y2='56.00005' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <line x1='104' y1='104' x2='104' y2='168' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <line x1='152' y1='104' x2='152' y2='168' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <path d='M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <path d='M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}