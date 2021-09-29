import { h } from 'vue'
export default {
  name: "ArrowUpDownFill",
  vendor: "Rx",
  tags: ["arrow","up","down","fill"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"vi-icon","fill":"currentColor","data-name":"rx-arrow-up-down-fill","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M12 8H8.001L8 20H6V8H2l5-5 5 5zm10 8l-5 5-5-5h4V4h2v12h4z'/>    </g>"},
    )
  }
}