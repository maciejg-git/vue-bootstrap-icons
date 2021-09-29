import { h } from 'vue'
export default {
  name: "ChartBar",
  vendor: "Mdi",
  tags: ["chart","bar"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"vi-icon","fill":"currentColor","data-name":"mdi-chart-bar","innerHTML":"<path d='M22,21H2V3H4V19H6V10H10V19H12V6H16V19H18V14H22V21Z' />"},
    )
  }
}