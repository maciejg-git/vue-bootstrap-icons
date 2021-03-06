import { h } from 'vue'
export default {
  $_icon: {
    name: "Numeric1Circle",
    vendor: "Mdi",
    type: "",
    tags: ["numeric","1","circle"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-numeric-1-circle"},
      [ 
        h(
          "path",
          {"d":"M10,7V9H12V17H14V7H10M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z"}
        ) 
      ]
    )
  }
}