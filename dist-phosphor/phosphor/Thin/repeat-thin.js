import { h } from 'vue'
export default {
  name: "RepeatThin",
  vendor: "Ph",
  tags: ["repeat","thin"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-repeat-thin","innerHTML":"  <rect width='256' height='256' fill='none'/>  <polyline points='200 88 224 64 200 40' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <path d='M32,128A64,64,0,0,1,96,64H224' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <polyline points='56 168 32 192 56 216' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <path d='M224,128a64,64,0,0,1-64,64H32' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>"},
    )
  }
}