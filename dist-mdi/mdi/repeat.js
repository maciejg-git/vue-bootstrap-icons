import { h } from 'vue'
export default {
  $_icon: {
    name: "Repeat",
    vendor: "Mdi",
    type: "",
    tags: ["repeat"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-repeat"},
      [ 
        h(
          "path",
          {"d":"M17,17H7V14L3,18L7,22V19H19V13H17M7,7H17V10L21,6L17,2V5H5V11H7V7Z"}
        ) 
      ]
    )
  }
}