import { h } from 'vue'
export default {
  $_icon: {
    name: "ArrowLeftDropCircleOutline",
    vendor: "Mdi",
    type: "",
    tags: ["arrow","left","drop","circle","outline"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-arrow-left-drop-circle-outline"},
      [ 
        h(
          "path",
          {"d":"M22,12A10,10 0 0,0 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12M14,7L9,12L14,17V7Z"}
        ) 
      ]
    )
  }
}