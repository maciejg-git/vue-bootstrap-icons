import { h } from 'vue'
export default {
  $_icon: {
    name: "MagnifyingGlassMinus",
    vendor: "Fa",
    type: "Solid",
    tags: ["magnifying","glass","minus"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","fill":"currentColor","data-name":"fa-magnifying-glass-minus","innerHTML":"<path d='M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7c-12.23-91.55-87.28-166-178.9-177.6c-136.2-17.24-250.7 97.28-233.4 233.4c11.6 91.64 86.07 166.7 177.6 178.9c53.81 7.191 104.3-6.235 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 .0003C515.9 484.7 515.9 459.3 500.3 443.7zM288 232H127.1C114.7 232 104 221.3 104 208s10.74-24 23.1-24h160C301.3 184 312 194.7 312 208S301.3 232 288 232z'/>"
      }
    )
  }
}