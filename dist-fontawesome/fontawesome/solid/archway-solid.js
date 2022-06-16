import { h } from 'vue'
export default {
  $_icon: {
    name: "Archway",
    vendor: "Fa",
    type: "Solid",
    tags: ["archway"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor","data-name":"fa-archway","innerHTML":"<path d='M480 32C497.7 32 512 46.33 512 64C512 81.67 497.7 96 480 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H480zM32 128H480V416C497.7 416 512 430.3 512 448C512 465.7 497.7 480 480 480H352V352C352 298.1 309 256 256 256C202.1 256 160 298.1 160 352V480H32C14.33 480 0 465.7 0 448C0 430.3 14.33 416 32 416V128z'/>"
      }
    )
  }
}