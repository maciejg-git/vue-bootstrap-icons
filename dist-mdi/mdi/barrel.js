import { h } from 'vue'
export default {
  $_icon: {
    name: "Barrel",
    vendor: "Mdi",
    type: "",
    tags: ["barrel"],
  },
  render() {
    return h(
      "svg",
      {
        "xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-barrel","innerHTML":"<path d='M20 13C20.55 13 21 12.55 21 12S20.55 11 20 11H19V5H20C20.55 5 21 4.55 21 4S20.55 3 20 3H4C3.45 3 3 3.45 3 4S3.45 5 4 5H5V11H4C3.45 11 3 11.45 3 12S3.45 13 4 13H5V19H4C3.45 19 3 19.45 3 20S3.45 21 4 21H20C20.55 21 21 20.55 21 20S20.55 19 20 19H19V13H20M12 16C10.34 16 9 14.68 9 13.05C9 11.75 9.5 11.38 12 8.5C14.47 11.36 15 11.74 15 13.05C15 14.68 13.66 16 12 16Z' />"
      }
    )
  }
}