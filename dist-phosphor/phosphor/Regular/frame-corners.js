import { h } from 'vue'
export default {
  name: "FrameCorners",
  vendor: "Ph",
  tags: ["frame","corners"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-frame-corners","innerHTML":"  <rect width='256' height='256' fill='none'/>  <polyline points='160 80 192 80 192 112' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <polyline points='96 176 64 176 64 144' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <rect x='32' y='48' width='192' height='160' rx='8' stroke-width='16' stroke='#000' stroke-linecap='round' stroke-linejoin='round' fill='none'/>"},
    )
  }
}