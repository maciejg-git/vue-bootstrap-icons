import { h } from 'vue'
export default {
  $_icon: {
    name: "AccountArrowLeft",
    vendor: "Mdi",
    type: "",
    tags: ["account","arrow","left"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-account-arrow-left"},
      [ 
        h(
          "path",
          {"d":"M6 8C6 5.79 7.79 4 10 4S14 5.79 14 8 12.21 12 10 12 6 10.21 6 8M10 14C5.58 14 2 15.79 2 18V20H13.09C13.04 19.67 13 19.34 13 19C13 17.36 13.66 15.87 14.74 14.78C13.41 14.29 11.78 14 10 14M18 18V16L15 19L18 22V20H22V18H18Z"}
        ) 
      ]
    )
  }
}