import { h } from 'vue'
export default {
  $_icon: {
    name: "BottleWine",
    vendor: "Mdi",
    type: "",
    tags: ["bottle","wine"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-bottle-wine"},
      [ 
        h(
          "path",
          {"d":"M10,22A1,1 0 0,1 9,21V11C9,9 10,7.25 11,7V2.5A0.5,0.5 0 0,1 11.5,2H12.5A0.5,0.5 0 0,1 13,2.5V7C14,7.25 15,9 15,11V21A1,1 0 0,1 14,22H10Z"}
        ) 
      ]
    )
  }
}