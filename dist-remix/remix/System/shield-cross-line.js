import { h } from 'vue'
export default {
  name: "ShieldCrossLine",
  vendor: "Rx",
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24","class":"rx-icon","fill":"currentColor","data-name":"rx-shield-cross-line","innerHTML":"    <g>        <path fill='none' d='M0 0h24v24H0z'/>        <path d='M3.783 2.826L12 1l8.217 1.826a1 1 0 0 1 .783.976v9.987a6 6 0 0 1-2.672 4.992L12 23l-6.328-4.219A6 6 0 0 1 3 13.79V3.802a1 1 0 0 1 .783-.976zM5 4.604v9.185a4 4 0 0 0 1.781 3.328L12 20.597l5.219-3.48A4 4 0 0 0 19 13.79V4.604L12 3.05 5 4.604zM11 10V7h2v3h3v2h-3v3h-2v-3H8v-2h3z'/>    </g>"},
    )
  }
}