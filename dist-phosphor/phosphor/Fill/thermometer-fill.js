import { h } from 'vue'
export default {
  name: "ThermometerFill",
  vendor: "Ph",
  tags: ["thermometer","fill"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-thermometer-fill","innerHTML":"  <rect width='256' height='256' fill='none'/>  <path d='M212,52a28,28,0,1,0,28,28A28.03146,28.03146,0,0,0,212,52Zm0,40a12,12,0,1,1,12-12A12.01343,12.01343,0,0,1,212,92Zm-52,51.27441V48a40,40,0,0,0-80,0v95.27441a60,60,0,1,0,80,0ZM120,24a24.02718,24.02718,0,0,1,24,24V80H96V48A24.02718,24.02718,0,0,1,120,24Z'/>"},
    )
  }
}