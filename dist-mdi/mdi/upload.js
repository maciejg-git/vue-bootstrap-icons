import { h } from 'vue'
export default {
  $_icon: {
    name: "Upload",
    vendor: "Mdi",
    type: "",
    tags: ["upload"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-upload"},
      [ 
        h(
          "path",
          {"d":"M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z"}
        ) 
      ]
    )
  }
}