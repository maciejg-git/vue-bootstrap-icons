import { h } from 'vue'
export default {
  name: "SideBarLine",
  vendor: "Rx",
  tags: ["side","bar","line"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"vi-icon","fill":"currentColor","data-name":"rx-side-bar-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm5 2H4v14h4V5zm2 0v14h10V5H10z'/>    </g>"},
    )
  }
}