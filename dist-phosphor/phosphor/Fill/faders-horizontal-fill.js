import { h } from 'vue'
export default {
  name: "FadersHorizontalFill",
  vendor: "Ph",
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"ph-icon","fill":"currentColor","data-name":"ph-faders-horizontal-fill","innerHTML":"  <rect width='256' height='256' fill='none'/>  <g>    <path d='M135.999,163.99353h-96a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Z'/>    <path d='M215.999,163.99353h-40v-16a8,8,0,0,0-16,0v48a8,8,0,0,0,16,0v-16h40a8,8,0,0,0,0-16Z'/>    <path d='M39.999,91.99255l32,.001a8,8,0,0,0,0-16l-32-.001a8,8,0,0,0,0,16Z'/>    <path d='M103.999,115.99353a8.00039,8.00039,0,0,0,8-8v-16l104-.001a8,8,0,1,0,0-16l-104,.001v-16a8,8,0,1,0-16,0v48A8.00039,8.00039,0,0,0,103.999,115.99353Z'/>  </g>"},
    )
  }
}