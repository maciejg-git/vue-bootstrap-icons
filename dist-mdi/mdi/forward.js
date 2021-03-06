import { h } from 'vue'
export default {
  $_icon: {
    name: "Forward",
    vendor: "Mdi",
    type: "",
    tags: ["forward"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-forward"},
      [ 
        h(
          "path",
          {"d":"M12,8V4L20,12L12,20V16H4V8H12Z"}
        ) 
      ]
    )
  }
}