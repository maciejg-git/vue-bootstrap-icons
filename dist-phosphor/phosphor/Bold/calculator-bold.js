import { h } from 'vue'
export default {
  name: "CalculatorBold",
  vendor: "Ph",
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"ph-icon","fill":"currentColor","data-name":"ph-calculator-bold","innerHTML":"  <rect width='256' height='256' fill='none'/>  <rect x='32' y='48' width='192' height='160' rx='8' transform='translate(256) rotate(90)' stroke-width='24' stroke='#000' stroke-linecap='round' stroke-linejoin='round' fill='none'/>  <line x1='92' y1='76' x2='164' y2='76' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='24'/>  <circle cx='104' cy='128' r='16'/>  <circle cx='152' cy='128' r='16'/>  <circle cx='104' cy='176' r='16'/>  <circle cx='152' cy='176' r='16'/>"},
    )
  }
}