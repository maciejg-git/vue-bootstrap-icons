import { h } from 'vue'
export default {
  $_icon: {
    name: "TrendingUp",
    vendor: "Mdi",
    type: "",
    tags: ["trending","up"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-trending-up"},
      [ 
        h(
          "path",
          {"d":"M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z"}
        ) 
      ]
    )
  }
}