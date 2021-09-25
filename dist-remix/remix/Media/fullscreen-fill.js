import { h } from 'vue'
export default {
  name: "FullscreenFill",
  vendor: "Rx",
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"rx-icon","fill":"currentColor","data-name":"rx-fullscreen-fill","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M16 3h6v6h-2V5h-4V3zM2 3h6v2H4v4H2V3zm18 16v-4h2v6h-6v-2h4zM4 19h4v2H2v-6h2v4z'/>    </g>"},
    )
  }
}