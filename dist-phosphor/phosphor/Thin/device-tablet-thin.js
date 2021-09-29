import { h } from 'vue'
export default {
  name: "DeviceTabletThin",
  vendor: "Ph",
  tags: ["device","tablet","thin"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-device-tablet-thin","innerHTML":"  <rect width='256' height='256' fill='none'/>  <rect x='32' y='48' width='192' height='160' rx='16' transform='translate(256) rotate(90)' stroke-width='8' stroke='#000' stroke-linecap='round' stroke-linejoin='round' fill='none'/>  <line x1='48' y1='64' x2='208' y2='64' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <line x1='48' y1='192' x2='208' y2='192' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>"},
    )
  }
}