import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowTrendUp",
    vendor: "Fa",
    type: "Solid",
    tags: ["arrow","trend","up"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 576 512","fill":"currentColor","data-name":"fa-arrow-trend-up","innerHTML":"<path d='M384 160C366.3 160 352 145.7 352 128C352 110.3 366.3 96 384 96H544C561.7 96 576 110.3 576 128V288C576 305.7 561.7 320 544 320C526.3 320 512 305.7 512 288V205.3L342.6 374.6C330.1 387.1 309.9 387.1 297.4 374.6L191.1 269.3L54.63 406.6C42.13 419.1 21.87 419.1 9.372 406.6C-3.124 394.1-3.124 373.9 9.372 361.4L169.4 201.4C181.9 188.9 202.1 188.9 214.6 201.4L320 306.7L466.7 159.1L384 160z'/>"},
    )
  }
}