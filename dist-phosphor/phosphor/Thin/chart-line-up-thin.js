import { h } from 'vue'
export default {
  name: "ChartLineUpThin",
  vendor: "Ph",
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"ph-icon","fill":"currentColor","data-name":"ph-chart-line-up-thin","innerHTML":"  <rect width='256' height='256' fill='none'/>  <polyline points='224 208 32 208 32 48' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <polyline points='208.002 64 128.002 144 96.002 112 32.002 176' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <polyline points='208.002 104 208.002 64 168.002 64' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>"},
    )
  }
}