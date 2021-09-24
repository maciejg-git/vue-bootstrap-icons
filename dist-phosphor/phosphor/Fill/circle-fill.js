import { h } from 'vue'
export default {
  name: "CircleFill",
  vendor: "Ph",
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"ph-icon","fill":"currentColor","data-name":"ph-circle-fill","innerHTML":"  <rect width='256' height='256' fill='none'/>  <circle cx='128' cy='128' r='104'/>"},
    )
  }
}