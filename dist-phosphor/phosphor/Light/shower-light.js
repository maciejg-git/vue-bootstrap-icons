import { h } from 'vue'
export default {
  name: "ShowerLight",
  vendor: "Ph",
  tags: ["shower","light"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-shower-light","innerHTML":"  <rect width='256' height='256' fill='none'/>  <circle cx='60' cy='228' r='10'/>  <circle cx='88' cy='200' r='10'/>  <circle cx='28' cy='196' r='10'/>  <circle cx='56' cy='168' r='10'/>  <path d='M248,40H219.31371a8,8,0,0,0-5.65686,2.34315L184,72,55.334,93.44433a8,8,0,0,0-4.34166,13.548l98.01532,98.01532a8,8,0,0,0,13.548-4.34166L184,72' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>"},
    )
  }
}