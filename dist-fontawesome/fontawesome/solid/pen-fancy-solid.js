import { h } from 'vue'
export default {
  $_icon: {
    name: "PenFancy",
    vendor: "Fa",
    type: "Solid",
    tags: ["pen","fancy"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor","data-name":"fa-pen-fancy","innerHTML":"<path d='M373.5 27.11C388.5 9.885 410.2 0 433 0C476.6 0 512 35.36 512 78.98C512 101.8 502.1 123.5 484.9 138.5L277.7 319L192.1 234.3L373.5 27.11zM255.1 341.7L235.9 425.1C231.9 442.2 218.9 455.8 202 460.5L24.35 510.3L119.7 414.9C122.4 415.6 125.1 416 128 416C145.7 416 160 401.7 160 384C160 366.3 145.7 352 128 352C110.3 352 96 366.3 96 384C96 386.9 96.38 389.6 97.08 392.3L1.724 487.6L51.47 309.1C56.21 293.1 69.8 280.1 86.9 276.1L170.3 256.9L255.1 341.7z'/>"},
    )
  }
}