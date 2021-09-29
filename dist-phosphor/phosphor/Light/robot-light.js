import { h } from 'vue'
export default {
  name: "RobotLight",
  vendor: "Ph",
  tags: ["robot","light"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-robot-light","innerHTML":"  <rect width='256' height='256' fill='none'/>  <rect x='32' y='56' width='192' height='160' rx='24' stroke-width='12' stroke='#000' stroke-linecap='round' stroke-linejoin='round' fill='none'/>  <rect x='72' y='144' width='112' height='40' rx='19.99998' stroke-width='12' stroke='#000' stroke-linecap='round' stroke-linejoin='round' fill='none'/>  <line x1='148' y1='144' x2='148' y2='184' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>  <line x1='108' y1='144' x2='108' y2='184' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>  <line x1='128' y1='56' x2='128' y2='16' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='12'/>  <circle cx='84' cy='108' r='10'/>  <circle cx='172' cy='108' r='10'/>"},
    )
  }
}