import { h } from 'vue'
export default {
  $_icon: {
    name: "Bullseye",
    vendor: "B",
    type: "",
    tags: ["bullseye"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","fill":"currentColor","viewBox":"0 0 16 16","data-name":"b-bullseye"},
      [ 
        h(
          "path",
          {"d":"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"}
        ),
        h(
          "path",
          {"d":"M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"}
        ),
        h(
          "path",
          {"d":"M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"}
        ),
        h(
          "path",
          {"d":"M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"}
        ) 
      ]
    )
  }
}