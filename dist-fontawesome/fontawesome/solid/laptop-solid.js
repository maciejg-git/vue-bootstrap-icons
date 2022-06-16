import { h } from 'vue'
export default {
  $_icon: {
    name: "Laptop",
    vendor: "Fa",
    type: "Solid",
    tags: ["laptop"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 640 512","fill":"currentColor","data-name":"fa-laptop","innerHTML":"<path d='M128 96h384v256h64v-272c0-26.38-21.62-48-48-48h-416c-26.38 0-48 21.62-48 48V352h64V96zM624 383.1h-608c-8.75 0-16 7.25-16 16v16c0 35.25 28.75 64 64 64h512c35.25 0 64-28.75 64-64v-16C640 391.2 632.8 383.1 624 383.1z'/>"
      }
    )
  }
}