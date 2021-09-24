import { h } from 'vue'
export default {
  name: "Planet",
  vendor: "Ph",
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"ph-icon","fill":"currentColor","data-name":"ph-planet","innerHTML":"  <rect width='256' height='256' fill='none'/>  <circle cx='128' cy='128' r='88' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <path d='M184.17224,60.25854c27.75785-7.55343,48.54608-6.88109,54.679,3.74146C249.897,83.1317,209.22146,127.29479,148,162.641S28.19444,211.1317,17.14875,192c-6.13187-10.6207,3.67551-28.95548,24.08867-49.21359' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>"},
    )
  }
}