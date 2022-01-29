import { h } from 'vue'
export default {
  $_icon: {
    name: "CheckCircleThin",
    vendor: "Ph",
    type: "",
    tags: ["check","circle","thin"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"v-icon","fill":"currentColor","data-name":"ph-check-circle-thin","innerHTML":"  <rect width='256' height='256' fill='none'/>  <polyline points='172 104 113.333 160 84 132' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <circle cx='128' cy='128' r='96' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>"},
    )
  }
}