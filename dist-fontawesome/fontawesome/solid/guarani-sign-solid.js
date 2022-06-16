import { h } from 'vue'
export default {
  $_icon: {
    name: "GuaraniSign",
    vendor: "Fa",
    type: "Solid",
    tags: ["guarani","sign"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 384 512","fill":"currentColor","data-name":"fa-guarani-sign","innerHTML":"<path d='M224 32V66.66C263.5 73.3 299 92.03 326.4 118.9C339 131.3 339.2 151.5 326.9 164.1C314.5 176.8 294.2 176.1 281.6 164.6C265.8 149.1 246.1 137.7 224 132V224H352C369.7 224 384 238.3 384 256C384 351.1 314.8 430.1 224 445.3V480C224 497.7 209.7 512 192 512C174.3 512 160 497.7 160 480V445.3C69.19 430.1 0 351.1 0 256C0 160.9 69.19 81.89 160 66.65V32C160 14.33 174.3 0 192 0C209.7 0 224 14.33 224 32H224zM160 132C104.8 146.2 64 196.4 64 256C64 315.6 104.8 365.8 160 379.1V132zM224 379.1C268.1 368.4 304.4 332.1 315.1 288H224V379.1z'/>"
      }
    )
  }
}