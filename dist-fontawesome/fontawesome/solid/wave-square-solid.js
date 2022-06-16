import { h } from 'vue'
export default {
  $_icon: {
    name: "WaveSquare",
    vendor: "Fa",
    type: "Solid",
    tags: ["wave","square"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 640 512","fill":"currentColor","data-name":"fa-wave-square","innerHTML":"<path d='M476 480h-152c-19.88 0-36-16.12-36-36v-348H192v156c0 19.88-16.12 36-36 36H31.1C14.33 288 0 273.7 0 256s14.33-31.1 31.1-31.1H128v-156c0-19.88 16.12-36 36-36h152c19.88 0 36 16.12 36 36v348h96v-156c0-19.88 16.12-36 36-36h124C625.7 224 640 238.3 640 256s-14.33 32-31.1 32H512v156C512 463.9 495.9 480 476 480z'/>"
      }
    )
  }
}