import { h } from 'vue'
export default {
  $_icon: {
    name: "BarsProgress",
    vendor: "Fa",
    type: "Solid",
    tags: ["bars","progress"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor","data-name":"fa-bars-progress","innerHTML":"<path d='M464 64C490.5 64 512 85.49 512 112V176C512 202.5 490.5 224 464 224H48C21.49 224 0 202.5 0 176V112C0 85.49 21.49 64 48 64H464zM448 128H320V160H448V128zM464 288C490.5 288 512 309.5 512 336V400C512 426.5 490.5 448 464 448H48C21.49 448 0 426.5 0 400V336C0 309.5 21.49 288 48 288H464zM192 352V384H448V352H192z'/>"},
    )
  }
}