import { h } from 'vue'
export default {
  name: "PencilLineFill",
  vendor: "Ph",
  tags: ["pencil","line","fill"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-pencil-line-fill","innerHTML":"  <rect width='256' height='256' fill='none'/>  <path d='M216,208H115.314l82.33838-82.33887.00489-.00439.00439-.00488L223.999,99.31445A15.99888,15.99888,0,0,0,224,76.68652L179.31348,31.999A16.02162,16.02162,0,0,0,156.68555,32l-120,120.00049a15.95392,15.95392,0,0,0-3.572,5.45654c-.08228.19971-.15162.40283-.21705.60742A15.9896,15.9896,0,0,0,32,163.31348V208a16.01833,16.01833,0,0,0,16,16H216a8,8,0,0,0,0-16ZM168,43.31348,212.68555,88,192,108.68555,147.314,64Z'/>"},
    )
  }
}