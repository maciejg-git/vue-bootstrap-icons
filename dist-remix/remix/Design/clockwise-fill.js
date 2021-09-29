import { h } from 'vue'
export default {
  name: "ClockwiseFill",
  vendor: "Rx",
  tags: ["clockwise","fill"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"vi-icon","fill":"currentColor","data-name":"rx-clockwise-fill","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M20 10h3l-4 5-4-5h3V8a3 3 0 0 0-3-3h-4V3h4a5 5 0 0 1 5 5v2zm-7-1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h10z'/>    </g>"},
    )
  }
}