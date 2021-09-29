import { h } from 'vue'
export default {
  name: "DotsNineDuotone",
  vendor: "Ph",
  tags: ["dots","nine","duotone"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-dots-nine-duotone","innerHTML":"  <rect width='256' height='256' fill='none'/>  <circle cx='60' cy='60' r='12'/>  <circle cx='128' cy='60' r='12'/>  <circle cx='196' cy='60' r='12'/>  <circle cx='60' cy='128' r='12'/>  <circle cx='128' cy='128' r='12'/>  <circle cx='196' cy='128' r='12'/>  <circle cx='60' cy='196' r='12'/>  <circle cx='128' cy='196' r='12'/>  <circle cx='196' cy='196' r='12'/>"},
    )
  }
}