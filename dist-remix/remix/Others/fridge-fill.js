import { h } from 'vue'
export default {
  name: "FridgeFill",
  vendor: "Rx",
  tags: ["fridge","fill"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"vi-icon","fill":"currentColor","data-name":"rx-fridge-fill","innerHTML":"    <g>        <path fill='none' d='M0 0H24V24H0z'/>        <path d='M20 12v10c0 .552-.448 1-1 1H5c-.552 0-1-.448-1-1V12h16zM9 14H7v5h2v-5zM19 1c.552 0 1 .448 1 1v8H4V2c0-.552.448-1 1-1h14zM9 4H7v4h2V4z'/>    </g>"},
    )
  }
}