import { h } from 'vue'
export default {
  $_icon: {
    name: "ToggleOn",
    vendor: "Fa",
    type: "Solid",
    tags: ["toggle","on"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 576 512","fill":"currentColor","data-name":"fa-toggle-on","innerHTML":"<path d='M384 64C490 64 576 149.1 576 256C576 362 490 448 384 448H192C85.96 448 0 362 0 256C0 149.1 85.96 64 192 64H384zM384 352C437 352 480 309 480 256C480 202.1 437 160 384 160C330.1 160 288 202.1 288 256C288 309 330.1 352 384 352z'/>"},
    )
  }
}