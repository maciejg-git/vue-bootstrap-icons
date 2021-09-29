import { h } from 'vue'
export default {
  name: "GovernmentLine",
  vendor: "Rx",
  tags: ["government","line"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"vi-icon","fill":"currentColor","data-name":"rx-government-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M20 6h3v2h-1v11h1v2H1v-2h1V8H1V6h3V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2zm0 2H4v11h3v-7h2v7h2v-7h2v7h2v-7h2v7h3V8zM6 5v1h12V5H6z'/>    </g>"},
    )
  }
}