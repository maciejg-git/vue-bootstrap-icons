import { h } from 'vue'
export default {
  $_icon: {
    name: "Lamps",
    vendor: "Mdi",
    type: "",
    tags: ["lamps"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-lamps"},
      [ 
        h(
          "path",
          {"d":"M10 2L12 9H2L4 2M6 10H8V20H11V22H3V20H6V10M20 8L22 15H12L14 8M16 16H18V20H21V22H13V20H16V16Z"}
        ) 
      ]
    )
  }
}