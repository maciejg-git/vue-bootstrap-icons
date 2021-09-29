import { h } from 'vue'
export default {
  name: "NewspaperLight",
  vendor: "Ph",
  tags: ["newspaper","light"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-newspaper-light","innerHTML":"  <rect width='256' height='256' fill='none'/>  <line x1='96' y1='112' x2='176' y2='112' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>  <line x1='96' y1='144' x2='176' y2='144' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>  <path d='M32,200a16,16,0,0,0,16-16V64a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V184a16,16,0,0,1-16,16Z' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>  <path d='M32,200a16,16,0,0,1-16-16V88' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>"},
    )
  }
}