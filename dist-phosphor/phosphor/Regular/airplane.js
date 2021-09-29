import { h } from 'vue'
export default {
  name: "Airplane",
  vendor: "Ph",
  tags: ["airplane"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-airplane","innerHTML":"  <rect width='256' height='256' fill='none'/>  <path d='M128,216,88,232V200l16-16V152L24,168V136l80-40,.11255-48a24,24,0,0,1,48,0l.11255,48,80,40v32l-80-16v32L168,200v32Z' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}