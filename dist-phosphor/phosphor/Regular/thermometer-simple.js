import { h } from 'vue'
export default {
  name: "ThermometerSimple",
  vendor: "Ph",
  tags: ["thermometer","simple"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-thermometer-simple","innerHTML":"  <rect width='256' height='256' fill='none'/>  <path d='M96,147.02548V48a32,32,0,0,1,64,0v99.02548l.00787-.01006a52,52,0,1,1-64.01574,0Z' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <circle cx='128' cy='188' r='20' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <line x1='128' y1='168' x2='128' y2='88' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}