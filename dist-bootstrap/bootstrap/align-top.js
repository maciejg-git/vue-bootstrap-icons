import { h } from 'vue'
export default {
  $_icon: {
    name: "AlignTop",
    vendor: "B",
    type: "",
    tags: ["align","top"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-align-top"},
      [ 
        h(
          "rect",
          {"width":"4","height":"12","rx":"1","transform":"matrix(1 0 0 -1 6 15)"}
        ),
        h(
          "path",
          {"d":"M1.5 2a.5.5 0 0 1 0-1v1zm13-1a.5.5 0 0 1 0 1V1zm-13 0h13v1h-13V1z"}
        ) 
      ]
    )
  }
}