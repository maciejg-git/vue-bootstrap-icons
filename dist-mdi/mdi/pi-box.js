import { h } from 'vue'
export default {
  name: "PiBox",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"mdi-icon","fill":"currentColor","data-name":"mdi-pi-box","innerHTML":"<path d='M5,3C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M6,7H17V9H15V14A1,1 0 0,0 16,15A1,1 0 0,0 17,14H19A3,3 0 0,1 16,17A3,3 0 0,1 13,14V9H10V17H8V9H6' />"},
    )
  }
}