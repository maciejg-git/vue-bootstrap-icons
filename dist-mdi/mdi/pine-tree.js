import { h } from 'vue'
export default {
  $_icon: {
    name: "PineTree",
    vendor: "Mdi",
    type: "",
    tags: ["pine","tree"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-pine-tree"},
      [ 
        h(
          "path",
          {"d":"M10,21V18H3L8,13H5L10,8H7L12,3L17,8H14L19,13H16L21,18H14V21H10Z"}
        ) 
      ]
    )
  }
}