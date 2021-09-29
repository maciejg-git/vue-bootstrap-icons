import { h } from 'vue'
export default {
  name: "LockUnlockLine",
  vendor: "Rx",
  tags: ["lock","unlock","line"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"vi-icon","fill":"currentColor","data-name":"rx-lock-unlock-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M7 10h13a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h1V9a7 7 0 0 1 13.262-3.131l-1.789.894A5 5 0 0 0 7 9v1zm-2 2v8h14v-8H5zm5 3h4v2h-4v-2z'/>    </g>"},
    )
  }
}