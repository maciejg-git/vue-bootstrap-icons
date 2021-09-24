import { h } from 'vue'
export default {
  name: "DeviceTabletLight",
  vendor: "Ph",
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"ph-icon","fill":"currentColor","data-name":"ph-device-tablet-light","innerHTML":"  <rect width='256' height='256' fill='none'/>  <rect x='32' y='48' width='192' height='160' rx='16' transform='translate(256) rotate(90)' stroke-width='12' stroke='#000' stroke-linecap='round' stroke-linejoin='round' fill='none'/>  <line x1='48' y1='64' x2='208' y2='64' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>  <line x1='48' y1='192' x2='208' y2='192' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>"},
    )
  }
}