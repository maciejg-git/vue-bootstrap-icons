import { h } from 'vue'
export default {
  $_icon: {
    name: "Monument",
    vendor: "Fa",
    type: "Solid",
    tags: ["monument"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 384 512","fill":"currentColor","data-name":"fa-monument","innerHTML":"<path d='M180.7 4.686C186.9-1.562 197.1-1.562 203.3 4.686L283.3 84.69C285.8 87.2 287.4 90.48 287.9 94.02L328.1 416H55.88L96.12 94.02C96.57 90.48 98.17 87.2 100.7 84.69L180.7 4.686zM152 272C138.7 272 128 282.7 128 296C128 309.3 138.7 320 152 320H232C245.3 320 256 309.3 256 296C256 282.7 245.3 272 232 272H152zM352 448C369.7 448 384 462.3 384 480C384 497.7 369.7 512 352 512H32C14.33 512 0 497.7 0 480C0 462.3 14.33 448 32 448H352z'/>"
      }
    )
  }
}