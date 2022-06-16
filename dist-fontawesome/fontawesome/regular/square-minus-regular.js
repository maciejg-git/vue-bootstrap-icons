import { h } from 'vue'
export default {
  $_icon: {
    name: "SquareMinus",
    vendor: "Fa",
    type: "Regular",
    tags: ["square","minus"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 448 512","fill":"currentColor","data-name":"fa-square-minus","innerHTML":"<path d='M312 232C325.3 232 336 242.7 336 256C336 269.3 325.3 280 312 280H136C122.7 280 112 269.3 112 256C112 242.7 122.7 232 136 232H312zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z'/>"
      }
    )
  }
}