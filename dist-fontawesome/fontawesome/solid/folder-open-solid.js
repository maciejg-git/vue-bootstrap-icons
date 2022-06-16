import { h } from 'vue'
export default {
  $_icon: {
    name: "FolderOpen",
    vendor: "Fa",
    type: "Solid",
    tags: ["folder","open"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 576 512","fill":"currentColor","data-name":"fa-folder-open","innerHTML":"<path d='M147.8 192H480V144C480 117.5 458.5 96 432 96h-160l-64-64h-160C21.49 32 0 53.49 0 80v328.4l90.54-181.1C101.4 205.6 123.4 192 147.8 192zM543.1 224H147.8C135.7 224 124.6 230.8 119.2 241.7L0 480h447.1c12.12 0 23.2-6.852 28.62-17.69l96-192C583.2 249 567.7 224 543.1 224z'/>"
      }
    )
  }
}