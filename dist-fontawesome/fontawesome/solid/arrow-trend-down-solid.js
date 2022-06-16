import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowTrendDown",
    vendor: "Fa",
    type: "Solid",
    tags: ["arrow","trend","down"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 576 512","fill":"currentColor","data-name":"fa-arrow-trend-down","innerHTML":"<path d='M466.7 352L320 205.3L214.6 310.6C202.1 323.1 181.9 323.1 169.4 310.6L9.372 150.6C-3.124 138.1-3.124 117.9 9.372 105.4C21.87 92.88 42.13 92.88 54.63 105.4L191.1 242.7L297.4 137.4C309.9 124.9 330.1 124.9 342.6 137.4L512 306.7V223.1C512 206.3 526.3 191.1 544 191.1C561.7 191.1 576 206.3 576 223.1V384C576 401.7 561.7 416 544 416H384C366.3 416 352 401.7 352 384C352 366.3 366.3 352 384 352L466.7 352z'/>"
      }
    )
  }
}