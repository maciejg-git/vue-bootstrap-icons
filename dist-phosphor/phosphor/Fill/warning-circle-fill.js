import { h } from 'vue'
export default {
  name: "WarningCircleFill",
  vendor: "Ph",
  tags: ["warning","circle","fill"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-warning-circle-fill","innerHTML":"  <rect width='256' height='256' fill='none'/>  <path d='M128,24.00012a104,104,0,1,0,104,104A104.11759,104.11759,0,0,0,128,24.00012Zm-8,56a8,8,0,1,1,16,0v56a8,8,0,1,1-16,0Zm8,104a12,12,0,1,1,12-12A12,12,0,0,1,128,184.00012Z'/>"},
    )
  }
}