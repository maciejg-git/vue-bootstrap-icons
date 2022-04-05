import { h } from 'vue'
export default {
  $_icon: {
    name: "Paragraph",
    vendor: "Fa",
    type: "Solid",
    tags: ["paragraph"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 448 512","fill":"currentColor","data-name":"fa-paragraph","innerHTML":"<path d='M448 63.1C448 81.67 433.7 96 416 96H384v352c0 17.67-14.33 32-31.1 32S320 465.7 320 448V96h-32v352c0 17.67-14.33 32-31.1 32S224 465.7 224 448v-96H198.9c-83.57 0-158.2-61.11-166.1-144.3C23.66 112.3 98.44 32 191.1 32h224C433.7 32 448 46.33 448 63.1z'/>"},
    )
  }
}