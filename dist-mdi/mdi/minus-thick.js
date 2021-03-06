import { h } from 'vue'
export default {
  $_icon: {
    name: "MinusThick",
    vendor: "Mdi",
    type: "",
    tags: ["minus","thick"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-minus-thick"},
      [ 
        h(
          "path",
          {"d":"M20 14H4V10H20V14Z"}
        ) 
      ]
    )
  }
}