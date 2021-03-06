import { h } from 'vue'
export default {
  $_icon: {
    name: "SkipNext",
    vendor: "Mdi",
    type: "",
    tags: ["skip","next"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-skip-next"},
      [ 
        h(
          "path",
          {"d":"M16,18H18V6H16M6,18L14.5,12L6,6V18Z"}
        ) 
      ]
    )
  }
}