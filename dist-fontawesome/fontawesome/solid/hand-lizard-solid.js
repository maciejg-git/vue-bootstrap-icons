import { h } from 'vue'
export default {
  $_icon: {
    name: "HandLizard",
    vendor: "Fa",
    type: "Solid",
    tags: ["hand","lizard"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor","data-name":"fa-hand-lizard","innerHTML":"<path d='M512 329.1V432c0 8.836-7.164 16-16 16H368c-8.836 0-16-7.164-16-16V416l-85.33-64H95.1c-16.47 0-31.44-13.44-31.96-29.9C62.87 285.8 91.96 256 127.1 256h104.9c13.77 0 26-8.811 30.36-21.88l10.67-32C280.9 181.4 265.4 160 243.6 160H63.1C27.95 160-1.129 130.2 .0352 93.9C.5625 77.44 15.53 64 31.1 64h271.2c26.26 0 50.84 12.88 65.79 34.47l128.8 185.1C507 297.8 512 313.7 512 329.1z'/>"},
    )
  }
}