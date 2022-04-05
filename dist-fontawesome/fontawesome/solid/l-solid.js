import { h } from 'vue'
export default {
  $_icon: {
    name: "L",
    vendor: "Fa",
    type: "Solid",
    tags: ["l"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 320 512","fill":"currentColor","data-name":"fa-l","innerHTML":"<path d='M320 448c0 17.67-14.31 32-32 32H64c-17.69 0-32-14.33-32-32v-384C32 46.34 46.31 32.01 64 32.01S96 46.34 96 64.01v352h192C305.7 416 320 430.3 320 448z'/>"},
    )
  }
}