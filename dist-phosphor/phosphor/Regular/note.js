import { h } from 'vue'
export default {
  name: "Note",
  vendor: "Ph",
  tags: ["note"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-note","innerHTML":"  <rect width='256' height='256' fill='none'/>  <line x1='96' y1='96' x2='160' y2='96' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <line x1='96' y1='128' x2='160' y2='128' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <line x1='96' y1='160' x2='128' y2='160' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <path d='M156.68629,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V156.68629a8,8,0,0,1-2.34315,5.65686l-51.3137,51.3137A8,8,0,0,1,156.68629,216Z' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <polyline points='215.276 159.992 160 159.992 160 215.272' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}