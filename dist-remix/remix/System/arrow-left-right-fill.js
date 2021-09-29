import { h } from 'vue'
export default {
  name: "ArrowLeftRightFill",
  vendor: "Rx",
  tags: ["arrow","left","right","fill"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"vi-icon","fill":"currentColor","data-name":"rx-arrow-left-right-fill","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M16 16v-4l5 5-5 5v-4H4v-2h12zM8 2v3.999L20 6v2H8v4L3 7l5-5z'/>    </g>"},
    )
  }
}