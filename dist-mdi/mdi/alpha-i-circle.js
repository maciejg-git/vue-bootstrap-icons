import { h } from 'vue'
export default {
  $_icon: {
    name: "AlphaICircle",
    vendor: "Mdi",
    type: "",
    tags: ["alpha","i","circle"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-alpha-i-circle"},
      [ 
        h(
          "path",
          {"d":"M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M14,7H10V9H11V15H10V17H14V15H13V9H14V7Z"}
        ) 
      ]
    )
  }
}