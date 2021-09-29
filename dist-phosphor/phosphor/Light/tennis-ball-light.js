import { h } from 'vue'
export default {
  name: "TennisBallLight",
  vendor: "Ph",
  tags: ["tennis","ball","light"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-tennis-ball-light","innerHTML":"  <rect width='256' height='256' fill='none'/>  <circle cx='128' cy='128' r='96' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>  <path d='M127.83333,32.00018a96,96,0,0,1-95.83212,95.83315' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>  <path d='M223.99982,128.16667a96,96,0,0,0-95.83315,95.83212' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>"},
    )
  }
}