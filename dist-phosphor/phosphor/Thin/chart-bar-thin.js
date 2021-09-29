import { h } from 'vue'
export default {
  name: "ChartBarThin",
  vendor: "Ph",
  tags: ["chart","bar","thin"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-chart-bar-thin","innerHTML":"  <rect width='256' height='256' fill='none'/>  <line x1='228' y1='208' x2='28' y2='208' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <polyline points='100 208 100 88 156 88' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <rect x='156' y='40' width='56' height='168' stroke-width='8' stroke='#000' stroke-linecap='round' stroke-linejoin='round' fill='none'/>  <polyline points='44 208 44 136 100 136' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>"},
    )
  }
}