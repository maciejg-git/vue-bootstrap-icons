import { h } from 'vue'
export default {
  $_icon: {
    name: "Pallet",
    vendor: "Fa",
    type: "Solid",
    tags: ["pallet"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 640 512","fill":"currentColor","data-name":"fa-pallet","innerHTML":"<path d='M624 384c8.75 0 16-7.25 16-16v-32c0-8.75-7.25-16-16-16h-608C7.25 320 0 327.3 0 336v32C0 376.8 7.25 384 16 384H64v64H16C7.25 448 0 455.3 0 464v32C0 504.8 7.25 512 16 512h608c8.75 0 16-7.25 16-16v-32c0-8.75-7.25-16-16-16H576v-64H624zM288 448H128v-64h160V448zM512 448h-160v-64h160V448z'/>"
      }
    )
  }
}