import { h } from 'vue'
export default {
  name: "NumberCircleZeroFill",
  vendor: "Ph",
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"ph-icon","fill":"currentColor","data-name":"ph-number-circle-zero-fill","innerHTML":"  <rect width='256' height='256' fill='none'/>  <g>    <ellipse cx='128' cy='128' rx='24' ry='40'/>    <path d='M128,24A104,104,0,1,0,232,128,104.12041,104.12041,0,0,0,128,24Zm0,160c-27.63281,0-40-28.125-40-56s12.36719-56,40-56,40,28.125,40,56S155.63281,184,128,184Z'/>  </g>"},
    )
  }
}