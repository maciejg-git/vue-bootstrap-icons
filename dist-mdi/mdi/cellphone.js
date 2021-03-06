import { h } from 'vue'
export default {
  $_icon: {
    name: "Cellphone",
    vendor: "Mdi",
    type: "",
    tags: ["cellphone"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-cellphone"},
      [ 
        h(
          "path",
          {"d":"M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3C19,1.89 18.1,1 17,1Z"}
        ) 
      ]
    )
  }
}