import { h } from 'vue'
export default {
  name: "Baby",
  vendor: "Ph",
  tags: ["baby"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-baby","innerHTML":"  <rect width='256' height='256' fill='none'/>  <circle cx='128' cy='128' r='96' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <circle cx='92' cy='128' r='12'/>  <circle cx='164' cy='128' r='12'/>  <path d='M154.53832,168.00269a48.03112,48.03112,0,0,1-53.07491.00115' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <path d='M128,32c-16,20-16,40-16,40a16,16,0,0,0,32,0' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}