import { h } from 'vue'
export default {
  $_icon: {
    name: "TurnUp",
    vendor: "Fa",
    type: "Solid",
    tags: ["turn","up"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 384 512","fill":"currentColor","data-name":"fa-turn-up","innerHTML":"<path d='M318 145.6c-3.812 8.75-12.45 14.41-22 14.41L224 160v272c0 44.13-35.89 80-80 80H32c-17.67 0-32-14.31-32-32s14.33-32 32-32h112C152.8 448 160 440.8 160 432V160L88 159.1c-9.547 0-18.19-5.656-22-14.41S63.92 126.7 70.41 119.7l104-112c9.498-10.23 25.69-10.23 35.19 0l104 112C320.1 126.7 321.8 136.8 318 145.6z'/>"
      }
    )
  }
}