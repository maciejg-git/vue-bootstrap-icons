import { h } from 'vue'
export default {
  $_icon: {
    name: "SkipNextOutline",
    vendor: "Mdi",
    type: "",
    tags: ["skip","next","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-skip-next-outline"},
      [ 
        h(
          "path",
          {"d":"M6,18L14.5,12L6,6M8,9.86L11.03,12L8,14.14M16,6H18V18H16"}
        ) 
      ]
    )
  }
}