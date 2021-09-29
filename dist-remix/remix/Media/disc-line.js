import { h } from 'vue'
export default {
  name: "DiscLine",
  vendor: "Rx",
  tags: ["disc","line"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"vi-icon","fill":"currentColor","data-name":"rx-disc-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M15 4.582V12a3 3 0 1 1-2-2.83V2.05c5.053.501 9 4.765 9 9.95 0 5.523-4.477 10-10 10S2 17.523 2 12c0-5.185 3.947-9.449 9-9.95v2.012A8.001 8.001 0 0 0 12 20a8 8 0 0 0 3-15.418z'/>    </g>"},
    )
  }
}