import { h } from 'vue'
export default {
  name: "Bandaids",
  vendor: "Ph",
  tags: ["bandaids"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-bandaids","innerHTML":"  <rect width='256' height='256' fill='none'/>  <path d='M49.37258,94.62742A32,32,0,0,1,94.62742,49.37258l112,112a32,32,0,0,1-45.25484,45.25484Z' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <path d='M161.37258,49.37258a32,32,0,0,1,45.25484,45.25484l-112,112a32,32,0,0,1-45.25484-45.25484Z' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <circle cx='128' cy='128' r='4' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16' opacity='0.5'/>  <circle cx='128' cy='128' r='12'/>"},
    )
  }
}