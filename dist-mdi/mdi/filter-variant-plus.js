import { h } from 'vue'
export default {
  $_icon: {
    name: "FilterVariantPlus",
    vendor: "Mdi",
    type: "",
    tags: ["filter","variant","plus"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-filter-variant-plus"},
      [ 
        h(
          "path",
          {"d":"M21 8H3V6H21V8M13.81 16H10V18H13.09C13.21 17.28 13.46 16.61 13.81 16M18 11H6V13H18V11M18 15V18H15V20H18V23H20V20H23V18H20V15H18Z"}
        ) 
      ]
    )
  }
}