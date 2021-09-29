import { h } from 'vue'
export default {
  name: "PaintBrush",
  vendor: "Ph",
  tags: ["paint","brush"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-paint-brush","innerHTML":"  <rect width='256' height='256' fill='none'/>  <path d='M20,216H92a52,52,0,1,0-52-52C40,200,20,216,20,216Z' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <path d='M112.40713,116.15918c19.194-25.86782,68.02669-85.12974,112.56343-85.12974,0,44.53626-59.26065,93.36835-85.12891,112.56282' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <path d='M132.9608,90.6464a84.40058,84.40058,0,0,1,32.3928,32.3928' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}