import { h } from 'vue'
export default {
  name: "TShirt",
  vendor: "Ph",
  tags: ["t","shirt"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-t-shirt","innerHTML":"  <rect width='256' height='256' fill='none'/>  <path d='M192,120h27.05573a8,8,0,0,0,7.15542-4.42229l18.40439-36.80878a8,8,0,0,0-3.18631-10.52366L192,40' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <path d='M64,120H36.94427a8,8,0,0,1-7.15542-4.42229L11.38446,78.76893a8,8,0,0,1,3.18631-10.52366L64,40' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <path d='M160,40a32,32,0,0,1-64,0H64V208a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V40Z' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}