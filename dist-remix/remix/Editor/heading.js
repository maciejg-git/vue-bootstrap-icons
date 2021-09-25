import { h } from 'vue'
export default {
  name: "Heading",
  vendor: "Rx",
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"rx-icon","fill":"currentColor","data-name":"rx-heading","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M17 11V4h2v17h-2v-8H7v8H5V4h2v7z'/>    </g>"},
    )
  }
}