import { h } from 'vue'
export default {
  name: "BicycleBold",
  vendor: "Ph",
  tags: ["bicycle","bold"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-bicycle-bold","innerHTML":"  <rect width='256' height='256' fill='none'/>  <path d='M208,80a16,16,0,0,0-16-16H148l56,96' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='24'/>  <circle cx='204' cy='160' r='40' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='24'/>  <circle cx='52' cy='160' r='40' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='24'/>  <polyline points='166.667 96 102.667 96 52 160' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='24'/>  <polyline points='52 64 84 64 128.333 140' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='24'/>"},
    )
  }
}