import { h } from 'vue'
export default {
  name: "DigitalOcean",
  vendor: "Mdi",
  tags: ["digital","ocean"],
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","class":"vi-icon","fill":"currentColor","data-name":"mdi-digital-ocean","innerHTML":"<path d='M6 12H2C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22V18H8V14H12V18C15.32 18 18 15.31 18 12C18 8.69 15.31 6 12 6C8.69 6 6 8.69 6 12M8 18V21H5V18H8M3 16H5V18H3V16Z' />"},
    )
  }
}