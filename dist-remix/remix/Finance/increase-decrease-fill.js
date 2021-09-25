import { h } from 'vue'
export default {
  name: "IncreaseDecreaseFill",
  vendor: "Rx",
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"rx-icon","fill":"currentColor","data-name":"rx-increase-decrease-fill","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm6 8V9H7v2H5v2h2v2h2v-2h2v-2H9zm4 0v2h6v-2h-6z'/>    </g>"},
    )
  }
}