import { h } from 'vue'
export default {
  $_icon: {
    name: "Ethernet",
    vendor: "Fa",
    type: "Solid",
    tags: ["ethernet"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor","data-name":"fa-ethernet","innerHTML":"<path d='M512 208v224c0 8.75-7.25 16-16 16H416v-128h-32v128h-64v-128h-32v128H224v-128H192v128H128v-128H96v128H16C7.25 448 0 440.8 0 432v-224C0 199.2 7.25 192 16 192H64V144C64 135.2 71.25 128 80 128H128V80C128 71.25 135.2 64 144 64h224C376.8 64 384 71.25 384 80V128h48C440.8 128 448 135.2 448 144V192h48C504.8 192 512 199.2 512 208z'/>"
      }
    )
  }
}