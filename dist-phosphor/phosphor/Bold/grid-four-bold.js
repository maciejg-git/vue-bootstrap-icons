import { h } from 'vue'
export default {
  name: "GridFourBold",
  vendor: "Ph",
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"ph-icon","fill":"currentColor","data-name":"ph-grid-four-bold","innerHTML":"  <rect width='256' height='256' fill='none'/>  <rect x='44' y='44' width='168' height='168' rx='8' stroke-width='24' stroke='#000' stroke-linecap='round' stroke-linejoin='round' fill='none'/>  <line x1='128' y1='44' x2='128' y2='212' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='24'/>  <line x1='212' y1='128' x2='44' y2='128' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='24'/>"},
    )
  }
}