import { h } from 'vue'
export default {
  $_icon: {
    name: "Slash",
    vendor: "Fa",
    type: "Solid",
    tags: ["slash"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 640 512","fill":"currentColor","data-name":"fa-slash","innerHTML":"<path d='M5.112 9.196C13.29-1.236 28.37-3.065 38.81 5.112L630.8 469.1C641.2 477.3 643.1 492.4 634.9 502.8C626.7 513.2 611.6 515.1 601.2 506.9L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196V9.196z'/>"
      }
    )
  }
}