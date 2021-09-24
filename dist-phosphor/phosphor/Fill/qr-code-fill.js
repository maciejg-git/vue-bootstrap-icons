import { h } from 'vue'
export default {
  name: "QrCodeFill",
  vendor: "Ph",
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"ph-icon","fill":"currentColor","data-name":"ph-qr-code-fill","innerHTML":"  <rect width='256' height='256' fill='none'/>  <g>    <rect x='40.00244' y='40' width='80' height='80' rx='16'/>    <rect x='40.00244' y='136' width='80' height='80' rx='16'/>    <rect x='136.00244' y='40' width='80' height='80' rx='16'/>    <path d='M144.00244,184a8.00039,8.00039,0,0,0,8-8V144a8,8,0,0,0-16,0v32A8.00039,8.00039,0,0,0,144.00244,184Z'/>    <path d='M208.00244,152h-24v-8a8,8,0,0,0-16,0v56h-24a8,8,0,1,0,0,16h32a8.00039,8.00039,0,0,0,8-8V168h24a8,8,0,0,0,0-16Z'/>    <path d='M208.00244,184a8.00039,8.00039,0,0,0-8,8v16a8,8,0,0,0,16,0V192A8.00039,8.00039,0,0,0,208.00244,184Z'/>  </g>"},
    )
  }
}