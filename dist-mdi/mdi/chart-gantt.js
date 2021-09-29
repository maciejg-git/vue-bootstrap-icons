import { h } from 'vue'
export default {
  name: "ChartGantt",
  vendor: "Mdi",
  tags: ["chart","gantt"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"vi-icon","fill":"currentColor","data-name":"mdi-chart-gantt","innerHTML":"<path d='M2,5H10V2H12V22H10V18H6V15H10V13H4V10H10V8H2V5M14,5H17V8H14V5M14,10H19V13H14V10M14,15H22V18H14V15Z' />"},
    )
  }
}