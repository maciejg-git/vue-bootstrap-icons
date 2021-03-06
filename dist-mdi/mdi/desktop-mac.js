import { h } from 'vue'
export default {
  $_icon: {
    name: "DesktopMac",
    vendor: "Mdi",
    type: "",
    tags: ["desktop","mac"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-desktop-mac"},
      [ 
        h(
          "path",
          {"d":"M21,14H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10L8,21V22H16V21L14,18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z"}
        ) 
      ]
    )
  }
}