import { h } from 'vue'
export default {
  name: "XSquare",
  vendor: "Ph",
  tags: ["x","square"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-x-square","innerHTML":"  <rect width='256' height='256' fill='none'/>  <line x1='160' y1='96' x2='96' y2='160' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <line x1='160' y1='160' x2='96' y2='96' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <rect x='40' y='40' width='176' height='176' rx='8' stroke-width='16' stroke='#000' stroke-linecap='round' stroke-linejoin='round' fill='none'/>"},
    )
  }
}