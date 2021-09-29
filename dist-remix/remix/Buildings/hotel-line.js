import { h } from 'vue'
export default {
  name: "HotelLine",
  vendor: "Rx",
  tags: ["hotel","line"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"vi-icon","fill":"currentColor","data-name":"rx-hotel-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M22 21H2v-2h1V4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v5h2v10h1v2zm-5-2h2v-8h-6v8h2v-6h2v6zm0-10V5H5v14h6V9h6zM7 11h2v2H7v-2zm0 4h2v2H7v-2zm0-8h2v2H7V7z'/>    </g>"},
    )
  }
}