import { h } from 'vue'
export default {
  $_icon: {
    name: "SquarePlus",
    vendor: "Fa",
    type: "Solid",
    tags: ["square","plus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 448 512","fill":"currentColor","data-name":"fa-square-plus","innerHTML":"<path d='M384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM224 368C237.3 368 248 357.3 248 344V280H312C325.3 280 336 269.3 336 256C336 242.7 325.3 232 312 232H248V168C248 154.7 237.3 144 224 144C210.7 144 200 154.7 200 168V232H136C122.7 232 112 242.7 112 256C112 269.3 122.7 280 136 280H200V344C200 357.3 210.7 368 224 368z'/>"},
    )
  }
}