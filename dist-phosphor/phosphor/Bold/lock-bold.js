import { h } from 'vue'
export default {
  name: "LockBold",
  vendor: "Ph",
  tags: ["lock","bold"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-lock-bold","innerHTML":"  <rect width='256' height='256' fill='none'/>  <rect x='40' y='88' width='176' height='128' rx='8' stroke-width='24' stroke='#000' stroke-linecap='round' stroke-linejoin='round' fill='none'/>  <path d='M92,88V52a36,36,0,0,1,72,0V88' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='24'/>  <circle cx='128' cy='152' r='16'/>"},
    )
  }
}