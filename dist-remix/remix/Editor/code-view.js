import { h } from 'vue'
export default {
  name: "CodeView",
  vendor: "Rx",
  tags: ["code","view"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"vi-icon","fill":"currentColor","data-name":"rx-code-view","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M16.95 8.464l1.414-1.414 4.95 4.95-4.95 4.95-1.414-1.414L20.485 12 16.95 8.464zm-9.9 0L3.515 12l3.535 3.536-1.414 1.414L.686 12l4.95-4.95L7.05 8.464z'/>    </g>"},
    )
  }
}