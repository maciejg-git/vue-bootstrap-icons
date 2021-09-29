import { h } from 'vue'
export default {
  name: "TimerFill",
  vendor: "Ph",
  tags: ["timer","fill"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-timer-fill","innerHTML":"  <rect width='256' height='256' fill='none'/>  <g>    <path d='M104,16h48a8,8,0,0,0,0-16H104a8,8,0,0,0,0,16Z'/>    <path d='M128,32a96,96,0,1,0,96,96A96.10874,96.10874,0,0,0,128,32Zm45.25488,62.05859-39.59765,39.59815a8.00018,8.00018,0,0,1-11.31446-11.31348l39.59815-39.59814a8,8,0,1,1,11.314,11.31347Z'/>  </g>"},
    )
  }
}