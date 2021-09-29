import { h } from 'vue'
export default {
  name: "FlightLandLine",
  vendor: "Rx",
  tags: ["flight","land","line"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"vi-icon","fill":"currentColor","data-name":"rx-flight-land-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M10.254 10.47l-.37-8.382 1.933.518 2.81 9.035 5.261 1.41a1.5 1.5 0 1 1-.776 2.898L4.14 11.937l.776-2.898.242.065.914 3.35-2.627-.703a1 1 0 0 1-.74-.983l.09-5.403 1.449.388.914 3.351 5.096 1.366zM4 19h16v2H4v-2z'/>    </g>"},
    )
  }
}