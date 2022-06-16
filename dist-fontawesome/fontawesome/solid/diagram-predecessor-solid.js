import { h } from 'vue'
export default {
  $_icon: {
    name: "DiagramPredecessor",
    vendor: "Fa",
    type: "Solid",
    tags: ["diagram","predecessor"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor","data-name":"fa-diagram-predecessor","innerHTML":"<path d='M64 480C28.65 480 0 451.3 0 416V352C0 316.7 28.65 288 64 288H448C483.3 288 512 316.7 512 352V416C512 451.3 483.3 480 448 480H64zM448 416V352H64V416H448zM288 160C288 195.3 259.3 224 224 224H64C28.65 224 0 195.3 0 160V96C0 60.65 28.65 32 64 32H368C412.2 32 448 67.82 448 112V128H486.1C507.4 128 518.1 153.9 503 168.1L432.1 239C423.6 248.4 408.4 248.4 399 239L328.1 168.1C313.9 153.9 324.6 128 345.9 128H384V112C384 103.2 376.8 96 368 96H288V160z'/>"
      }
    )
  }
}