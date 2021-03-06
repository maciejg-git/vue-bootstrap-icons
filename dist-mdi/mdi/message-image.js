import { h } from 'vue'
export default {
  $_icon: {
    name: "MessageImage",
    vendor: "Mdi",
    type: "",
    tags: ["message","image"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-message-image"},
      [ 
        h(
          "path",
          {"d":"M5,14L8.5,9.5L11,12.5L14.5,8L19,14M20,2H4A2,2 0 0,0 2,4V22L6,18H20A2,2 0 0,0 22,16V4C22,2.89 21.1,2 20,2Z"}
        ) 
      ]
    )
  }
}