import { h } from 'vue'
export default {
  name: "PagesLine",
  vendor: "Rx",
  tags: ["pages","line"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"vi-icon","fill":"currentColor","data-name":"rx-pages-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M5 8v12h14V8H5zm0-2h14V4H5v2zm15 16H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zM7 10h4v4H7v-4zm0 6h10v2H7v-2zm6-5h4v2h-4v-2z'/>    </g>"},
    )
  }
}