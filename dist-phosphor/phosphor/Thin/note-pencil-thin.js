import { h } from 'vue'
export default {
  name: "NotePencilThin",
  vendor: "Ph",
  tags: ["note","pencil","thin"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 256 256","class":"vi-icon","fill":"currentColor","data-name":"ph-note-pencil-thin","innerHTML":"  <rect width='256' height='256' fill='none'/>  <polygon points='128 160 96 160 96 128 192 32 224 64 128 160' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <line x1='168' y1='56' x2='200' y2='88' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>  <path d='M216,120v88a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h88' fill='none' stroke='#000' stroke-linecap='round' stroke-linejoin='round' stroke-width='8'/>"},
    )
  }
}