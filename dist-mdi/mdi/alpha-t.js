import { h } from 'vue'
export default {
  $_icon: {
    name: "AlphaT",
    vendor: "Mdi",
    type: "",
    tags: ["alpha","t"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-alpha-t"},
      [ 
        h(
          "path",
          {"d":"M9,7V9H11V17H13V9H15V7H9Z"}
        ) 
      ]
    )
  }
}