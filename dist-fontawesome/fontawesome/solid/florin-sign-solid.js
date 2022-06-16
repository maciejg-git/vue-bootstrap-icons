import { h } from 'vue'
export default {
  $_icon: {
    name: "FlorinSign",
    vendor: "Fa",
    type: "Solid",
    tags: ["florin","sign"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 384 512","fill":"currentColor","data-name":"fa-florin-sign","innerHTML":"<path d='M352 32C369.7 32 384 46.33 384 64C384 81.67 369.7 96 352 96H314.7C301.7 96 290.1 103.8 285.1 115.7L240 224H320C337.7 224 352 238.3 352 256C352 273.7 337.7 288 320 288H213.3L157.9 420.9C143 456.7 108.1 480 69.33 480H32C14.33 480 0 465.7 0 448C0 430.3 14.33 416 32 416H69.33C82.25 416 93.9 408.2 98.87 396.3L144 288H64C46.33 288 32 273.7 32 256C32 238.3 46.33 224 64 224H170.7L226.1 91.08C240.1 55.3 275.9 32 314.7 32H352z'/>"
      }
    )
  }
}