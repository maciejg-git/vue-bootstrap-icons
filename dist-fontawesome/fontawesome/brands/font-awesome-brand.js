import { h } from 'vue'
export default {
  $_icon: {
    name: "FontAwesome",
    vendor: "Fa",
    type: "Brand",
    tags: ["font","awesome"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 448 512","fill":"currentColor","data-name":"fa-font-awesome","innerHTML":"<path d='M448 48V384C385 407 366 416 329 416C266 416 242 384 179 384C159 384 143 388 128 392V328C143 324 159 320 179 320C242 320 266 352 329 352C349 352 364 349 384 343V135C364 141 349 144 329 144C266 144 242 112 179 112C128 112 104 133 64 141V448C64 466 50 480 32 480S0 466 0 448V64C0 46 14 32 32 32S64 46 64 64V77C104 69 128 48 179 48C242 48 266 80 329 80C366 80 385 71 448 48Z'/>"
      }
    )
  }
}