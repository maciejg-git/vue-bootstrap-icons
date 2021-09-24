import { h } from 'vue'
export default {
  name: "EnvelopeSimpleOpenThin",
  vendor: "Ph",
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"ph-icon","fill":"currentColor","data-name":"ph-envelope-simple-open-thin","innerHTML":"  <rect width='256' height='256' fill='none'/>  <path d='M32,96V200a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V96L128,32Z' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <polyline points='224 96 145.455 152 110.545 152 32 96' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>"},
    )
  }
}