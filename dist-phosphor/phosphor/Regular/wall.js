import { h } from 'vue'
export default {
  name: "Wall",
  vendor: "Ph",
  tags: ["wall"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-wall","innerHTML":"  <rect width='256' height='256' fill='none'/>  <line x1='128' y1='104' x2='128' y2='56' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <line x1='80' y1='152' x2='80' y2='104' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <line x1='176' y1='152' x2='176' y2='104' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <line x1='128' y1='200' x2='128' y2='152' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <line x1='32' y1='104' x2='224' y2='104' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <line x1='32' y1='152' x2='224' y2='152' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <rect x='32' y='56' width='192' height='144' stroke-width='16' stroke='#000' stroke-linecap='round' stroke-linejoin='round' fill='none'/>"},
    )
  }
}