import { h } from 'vue'
export default {
  $_icon: {
    name: "Headphones",
    vendor: "Fa",
    type: "Solid",
    tags: ["headphones"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor","data-name":"fa-headphones","innerHTML":"<path d='M512 287.9l-.0042 112C511.1 444.1 476.1 480 432 480c-26.47 0-48-21.56-48-48.06V304.1C384 277.6 405.5 256 432 256c10.83 0 20.91 2.723 30.3 6.678C449.7 159.1 362.1 80.13 256 80.13S62.29 159.1 49.7 262.7C59.09 258.7 69.17 256 80 256C106.5 256 128 277.6 128 304.1v127.9C128 458.4 106.5 480 80 480c-44.11 0-79.1-35.88-79.1-80.06L0 288c0-141.2 114.8-256 256-256c140.9 0 255.6 114.5 255.1 255.3C511.1 287.5 511.1 287.7 512 287.9z'/>"},
    )
  }
}