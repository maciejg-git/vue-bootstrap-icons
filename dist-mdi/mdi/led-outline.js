import { h } from 'vue'
export default {
  $_icon: {
    name: "LedOutline",
    vendor: "Mdi",
    type: "",
    tags: ["led","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-led-outline"},
      [ 
        h(
          "path",
          {"d":"M12,6A4,4 0 0,0 8,10V16H6V18H9V23H11V18H13V23H15V18H18V16H16V10A4,4 0 0,0 12,6M12,8A2,2 0 0,1 14,10V15H10V10A2,2 0 0,1 12,8Z"}
        ) 
      ]
    )
  }
}