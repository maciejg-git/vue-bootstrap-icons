import { h } from 'vue'
export default {
  $_icon: {
    name: "KeyboardF1",
    vendor: "Mdi",
    type: "",
    tags: ["keyboard","f1"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-keyboard-f1"},
      [ 
        h(
          "path",
          {"d":"M6 7H12V9H8V11H11V13H8V17H6V7M14 7H18V17H16V9H14V7Z"}
        ) 
      ]
    )
  }
}