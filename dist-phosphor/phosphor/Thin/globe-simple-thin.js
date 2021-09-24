import { h } from 'vue'
export default {
  name: "GlobeSimpleThin",
  vendor: "Ph",
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"ph-icon","fill":"currentColor","data-name":"ph-globe-simple-thin","innerHTML":"  <rect width='256' height='256' fill='none'/>  <circle cx='128' cy='128' r='96' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <line x1='32' y1='128' x2='224' y2='128' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <ellipse cx='128' cy='128' rx='40' ry='93.42294' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>"},
    )
  }
}