import { h } from 'vue'
export default {
  name: "SipFill",
  vendor: "Rx",
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"rx-icon","fill":"currentColor","data-name":"rx-sip-fill","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M13.96 6.504l2.829-2.828a1 1 0 0 1 1.414 0l2.121 2.121a1 1 0 0 1 0 1.414l-2.828 2.829 1.767 1.768-1.414 1.414-7.07-7.071 1.413-1.414 1.768 1.767zM10.778 8.98l4.243 4.243L7.243 21H3v-4.243l7.778-7.778z'/>    </g>"},
    )
  }
}