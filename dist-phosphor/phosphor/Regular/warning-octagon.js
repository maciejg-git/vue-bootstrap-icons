import { h } from 'vue'
export default {
  name: "WarningOctagon",
  vendor: "Ph",
  tags: ["warning","octagon"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-warning-octagon","innerHTML":"  <rect width='256' height='256' fill='none'/>  <line x1='128' y1='80' x2='128' y2='136' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='16'/>  <path d='M164.45079,32H91.54921a8,8,0,0,0-5.65686,2.34315l-51.5492,51.5492A8,8,0,0,0,32,91.54921v72.90158a8,8,0,0,0,2.34315,5.65686l51.5492,51.5492A8,8,0,0,0,91.54921,224h72.90158a8,8,0,0,0,5.65686-2.34315l51.5492-51.5492A8,8,0,0,0,224,164.45079V91.54921a8,8,0,0,0-2.34315-5.65686l-51.5492-51.5492A8,8,0,0,0,164.45079,32Z' fill='none' stroke='#000' stroke-miterlimit='10' stroke-width='16'/>  <circle cx='128' cy='172' r='12'/>"},
    )
  }
}