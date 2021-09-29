import { h } from 'vue'
export default {
  name: "RainyLine",
  vendor: "Rx",
  tags: ["rainy","line"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"vi-icon","fill":"currentColor","data-name":"rx-rainy-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M16 18v-2h1a4 4 0 1 0-2.157-7.37A6 6 0 1 0 8 15.917v2.022A8.001 8.001 0 0 1 9 2a7.998 7.998 0 0 1 6.98 4.087A6 6 0 1 1 17 18h-1zm-5.768.732L12 16.964l1.768 1.768a2.5 2.5 0 1 1-3.536 0z'/>    </g>"},
    )
  }
}