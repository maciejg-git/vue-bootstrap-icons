import { h } from 'vue'
export default {
  $_icon: {
    name: "Umbrella",
    vendor: "Fa",
    type: "Solid",
    tags: ["umbrella"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 576 512","fill":"currentColor","data-name":"fa-umbrella","innerHTML":"<path d='M255.1 301.7v130.3c0 8.814-7.188 16-16 16c-7.814 0-13.19-5.314-15.1-10.69c-5.906-16.72-24.1-25.41-40.81-19.5c-16.69 5.875-25.41 24.19-19.5 40.79C175.8 490.6 206.2 512 239.1 512C284.1 512 320 476.1 320 431.1v-130.3c-9.094-7.908-19.81-13.61-32-13.61C275.7 288.1 265.6 292.9 255.1 301.7zM575.7 280.9C547.1 144.5 437.3 62.61 320 49.91V32.01c0-17.69-14.31-32.01-32-32.01S255.1 14.31 255.1 32.01v17.91C138.3 62.61 29.48 144.5 .2949 280.9C-1.926 290.1 8.795 302.1 18.98 292.2c52-55.01 107.7-52.39 158.6 37.01c5.312 9.502 14.91 8.625 19.72 0C217.5 293.9 242.2 256 287.1 256c58.5 0 88.19 68.82 90.69 73.2c4.812 8.625 14.41 9.502 19.72 0c51-89.52 107.1-91.39 158.6-37.01C567.3 302.2 577.9 290.1 575.7 280.9z'/>"
      }
    )
  }
}