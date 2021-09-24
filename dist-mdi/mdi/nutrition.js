import { h } from 'vue'
export default {
  name: "Nutrition",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"mdi-icon","fill":"currentColor","data-name":"mdi-nutrition","innerHTML":"<path d='M22,18A4,4 0 0,1 18,22H14A4,4 0 0,1 10,18V16H22V18M4,3H14A2,2 0 0,1 16,5V14H8V19H4A2,2 0 0,1 2,17V5A2,2 0 0,1 4,3M4,6V8H6V6H4M14,8V6H8V8H14M4,10V12H6V10H4M8,10V12H14V10H8M4,14V16H6V14H4Z' />"},
    )
  }
}