import { h } from 'vue'
export default {
  $_icon: {
    name: "WindowMinimize",
    vendor: "Fa",
    type: "Regular",
    tags: ["window","minimize"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor","data-name":"fa-window-minimize","innerHTML":"<path d='M0 456C0 442.7 10.75 432 24 432H488C501.3 432 512 442.7 512 456C512 469.3 501.3 480 488 480H24C10.75 480 0 469.3 0 456z'/>"},
    )
  }
}