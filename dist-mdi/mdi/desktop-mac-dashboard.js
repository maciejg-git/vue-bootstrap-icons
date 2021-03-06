import { h } from 'vue'
export default {
  $_icon: {
    name: "DesktopMacDashboard",
    vendor: "Mdi",
    type: "",
    tags: ["desktop","mac","dashboard"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-desktop-mac-dashboard"},
      [ 
        h(
          "path",
          {"d":"M21,14V4H3V14H21M21,2A2,2 0 0,1 23,4V16A2,2 0 0,1 21,18H14L16,21V22H8V21L10,18H3C1.89,18 1,17.1 1,16V4C1,2.89 1.89,2 3,2H21M4,5H15V10H4V5M16,5H20V7H16V5M20,8V13H16V8H20M4,11H9V13H4V11M10,11H15V13H10V11Z"}
        ) 
      ]
    )
  }
}