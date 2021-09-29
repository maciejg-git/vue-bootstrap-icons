import { h } from 'vue'
export default {
  name: "DoorClosed",
  vendor: "B",
  tags: ["door","closed"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","class":"vi-icon","viewBox":"0 0 16 16","data-name":"b-door-closed","innerHTML":"  <path d='M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2zm1 13h8V2H4v13z'/>  <path d='M9 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0z'/>"},
    )
  }
}