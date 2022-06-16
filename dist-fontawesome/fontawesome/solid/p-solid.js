import { h } from 'vue'
export default {
  $_icon: {
    name: "P",
    vendor: "Fa",
    type: "Solid",
    tags: ["p"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 320 512","fill":"currentColor","data-name":"fa-p","innerHTML":"<path d='M160 32.01H32c-17.69 0-32 14.33-32 32v384c0 17.67 14.31 32 32 32s32-14.33 32-32v-96h96c88.22 0 160-71.78 160-159.1S248.2 32.01 160 32.01zM160 288H64V96.01h96c52.94 0 96 43.06 96 96S212.9 288 160 288z'/>"
      }
    )
  }
}