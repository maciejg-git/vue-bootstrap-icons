import { h } from 'vue'
export default {
  $_icon: {
    name: "ToiletPortable",
    vendor: "Fa",
    type: "Solid",
    tags: ["toilet","portable"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 320 512","fill":"currentColor","data-name":"fa-toilet-portable","innerHTML":"<path d='M0 32C0 14.33 14.33 0 32 0H288C305.7 0 320 14.33 320 32V64H0V32zM320 96V488C320 501.3 309.3 512 296 512C282.7 512 272 501.3 272 488V480H48V488C48 501.3 37.25 512 24 512C10.75 512 0 501.3 0 488V96H320zM256 240C256 231.2 248.8 224 240 224C231.2 224 224 231.2 224 240V304C224 312.8 231.2 320 240 320C248.8 320 256 312.8 256 304V240z'/>"
      }
    )
  }
}