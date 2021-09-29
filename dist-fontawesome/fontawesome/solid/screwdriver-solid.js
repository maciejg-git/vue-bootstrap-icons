import { h } from 'vue'
export default {
  name: "ScrewdriverSolid",
  vendor: "Fa",
  tags: ["screwdriver"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 512 512","class":"vi-icon","fill":"currentColor","data-name":"fa-screwdriver","innerHTML":"<path d='M448 0L320 96v62.06l-83.03 83.03c6.79 4.25 13.27 9.06 19.07 14.87 5.8 5.8 10.62 12.28 14.87 19.07L353.94 192H416l96-128-64-64zM128 278.59L10.92 395.67c-14.55 14.55-14.55 38.15 0 52.71l52.7 52.7c14.56 14.56 38.15 14.56 52.71 0L233.41 384c29.11-29.11 29.11-76.3 0-105.41s-76.3-29.11-105.41 0z'/>"},
    )
  }
}