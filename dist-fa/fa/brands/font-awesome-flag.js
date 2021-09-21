import { h } from 'vue'
export default {
  name: "FontAwesomeFlag",
  vendor: "Fa",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","viewBox": "0 0 448 512","class": "fa-icon","fill": "currentColor","data-name": "fa-font-awesome-flag" },
      [ h("path", { "d": "M448 48V384c-63 23-82 32-119 32-63 0-87-32-150-32-20 0-36 4-51 8V328c15-4 31-8 51-8 63 0 87 32 150 32 20 0 35-3 55-9V135c-20 6-35 9-55 9-63 0-87-32-150-32-51 0-75 21-115 29V448a31.6 31.6 0 0 1-32 32A31.6 31.6 0 0 1 0 448V64A31.6 31.6 0 0 1 32 32 31.6 31.6 0 0 1 64 64V77c40-8 64-29 115-29 63 0 87 32 150 32C366 80 385 71 448 48Z" }) ]
    )
  }
}