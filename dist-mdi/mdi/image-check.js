import { h } from 'vue'
export default {
  $_icon: {
    name: "ImageCheck",
    vendor: "Mdi",
    type: "",
    tags: ["image","check"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-image-check","innerHTML":"<path d='M12.5 21C12.18 20.23 12 19.39 12 18.5C12 18.33 12 18.17 12.03 18H5L8.5 13.5L11 16.5L14.5 12L15.19 12.92C16.16 12.34 17.29 12 18.5 12C19.39 12 20.23 12.18 21 12.5V5C21 4.47 20.79 3.96 20.41 3.59C20.04 3.21 19.53 3 19 3H5C3.9 3 3 3.9 3 5V19C3 19.53 3.21 20.04 3.59 20.41C3.96 20.79 4.47 21 5 21H12.5M17.75 22L15 19L16.16 17.84L17.75 19.43L21.34 15.84L22.5 17.25L17.75 22Z' />"
      }
    )
  }
}