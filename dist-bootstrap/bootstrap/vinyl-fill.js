import { h } from 'vue'
export default {
  name: "VinylFill",
  vendor: "B",
  tags: ["vinyl","fill"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","class":"vi-icon","viewBox":"0 0 16 16","data-name":"b-vinyl-fill","innerHTML":"  <path d='M8 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm0 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2z'/>  <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4 8a4 4 0 1 0 8 0 4 4 0 0 0-8 0z'/>"},
    )
  }
}