import { h } from 'vue'
export default {
  name: "LogoutCircleLine",
  vendor: "Rx",
  tags: ["logout","circle","line"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"vi-icon","fill":"currentColor","data-name":"rx-logout-circle-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M5 11h8v2H5v3l-5-4 5-4v3zm-1 7h2.708a8 8 0 1 0 0-12H4A9.985 9.985 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.985 9.985 0 0 1-8-4z'/>    </g>"},
    )
  }
}