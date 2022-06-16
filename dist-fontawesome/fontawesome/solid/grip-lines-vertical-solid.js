import { h } from 'vue'
export default {
  $_icon: {
    name: "GripLinesVertical",
    vendor: "Fa",
    type: "Solid",
    tags: ["grip","lines","vertical"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 192 512","fill":"currentColor","data-name":"fa-grip-lines-vertical","innerHTML":"<path d='M64 448C64 465.7 49.67 480 32 480C14.33 480 0 465.7 0 448V64C0 46.33 14.33 32 32 32C49.67 32 64 46.33 64 64V448zM192 448C192 465.7 177.7 480 160 480C142.3 480 128 465.7 128 448V64C128 46.33 142.3 32 160 32C177.7 32 192 46.33 192 64V448z'/>"
      }
    )
  }
}