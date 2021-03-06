import { h } from 'vue'
export default {
  $_icon: {
    name: "EmailSendOutline",
    vendor: "Mdi",
    type: "",
    tags: ["email","send","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-email-send-outline"},
      [ 
        h(
          "path",
          {"d":"M13 17H17V14L22 18.5L17 23V20H13V17M20 4H4A2 2 0 0 0 2 6V18A2 2 0 0 0 4 20H11V18H4V8L12 13L20 8V14H22V6A2 2 0 0 0 20 4M12 11L4 6H20Z"}
        ) 
      ]
    )
  }
}