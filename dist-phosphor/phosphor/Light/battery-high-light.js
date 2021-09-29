import { h } from 'vue'
export default {
  name: "BatteryHighLight",
  vendor: "Ph",
  tags: ["battery","high","light"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-battery-high-light","innerHTML":"  <rect width='256' height='256' fill='none'/>  <line x1='248' y1='96' x2='248' y2='160' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>  <rect x='52' y='36' width='144' height='184' rx='16' transform='translate(252 4) rotate(90)' stroke-width='12' stroke='#000' stroke-linecap='round' stroke-linejoin='round' fill='none'/>  <line x1='142.4' y1='168.00043' x2='142.4' y2='88.00043' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>  <line x1='105.6' y1='168.00043' x2='105.6' y2='88.00043' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>  <line x1='68.8' y1='168.00043' x2='68.8' y2='88.00043' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>"},
    )
  }
}