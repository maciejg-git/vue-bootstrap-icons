import { h } from 'vue'
export default {
  $_icon: {
    name: "PanoramaOutline",
    vendor: "Mdi",
    type: "",
    tags: ["panorama","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-panorama-outline","innerHTML":"<path d='M21 4H3C1.9 4 1 4.9 1 6V18C1 19.1 1.9 20 3 20H21C22.1 20 23 19.1 23 18V6C23 4.9 22.1 4 21 4M21 18H3V6H21V18M14.5 11L11 15.5L8.5 12.5L5 17H19L14.5 11Z' />"},
    )
  }
}