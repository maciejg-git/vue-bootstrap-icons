import { h } from 'vue'
export default {
  name: "ChatCircleDots",
  vendor: "Ph",
  tags: ["chat","circle","dots"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-chat-circle-dots","innerHTML":"  <rect width='256' height='256' fill='none'/>  <path d='M45.42853,176.99811A95.95978,95.95978,0,1,1,79.00228,210.5717l.00023-.001L45.84594,220.044a8,8,0,0,1-9.89-9.89l9.47331-33.15657Z' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <circle cx='128' cy='128' r='12'/>  <circle cx='80' cy='128' r='12'/>  <circle cx='176' cy='128' r='12'/>"},
    )
  }
}