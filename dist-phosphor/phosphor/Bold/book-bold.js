import { h } from 'vue'
export default {
  name: "BookBold",
  vendor: "Ph",
  tags: ["book","bold"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-book-bold","innerHTML":"  <rect width='256' height='256' fill='none'/>  <path d='M48,208a24,24,0,0,1,24-24H208V32H72A24,24,0,0,0,48,56Z' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='24'/>  <polyline points='48 208 48 224 192 224' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='24'/>"},
    )
  }
}