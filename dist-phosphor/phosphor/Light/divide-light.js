import { h } from 'vue'
export default {
  name: "DivideLight",
  vendor: "Ph",
  tags: ["divide","light"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-divide-light","innerHTML":"  <rect width='256' height='256' fill='none'/>  <line x1='40' y1='128' x2='216' y2='128' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>  <circle cx='128' cy='64' r='14'/>  <circle cx='128' cy='192' r='14'/>"},
    )
  }
}