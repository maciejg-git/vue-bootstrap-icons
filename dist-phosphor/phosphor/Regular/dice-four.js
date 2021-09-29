import { h } from 'vue'
export default {
  name: "DiceFour",
  vendor: "Ph",
  tags: ["dice","four"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-dice-four","innerHTML":"  <rect width='256' height='256' fill='none'/>  <rect x='40' y='40' width='176' height='176' rx='24' stroke-width='16' stroke='#000' stroke-linecap='round' stroke-linejoin='round' fill='none'/>  <circle cx='100' cy='100' r='12'/>  <circle cx='156' cy='100' r='12'/>  <circle cx='100' cy='156' r='12'/>  <circle cx='156' cy='156' r='12'/>"},
    )
  }
}