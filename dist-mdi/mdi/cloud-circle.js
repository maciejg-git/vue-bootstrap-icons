import { h } from 'vue'
export default {
  $_icon: {
    name: "CloudCircle",
    vendor: "Mdi",
    type: "",
    tags: ["cloud","circle"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","width":"24","height":"24","viewBox":"0 0 24 24","fill":"currentColor","data-name":"mdi-cloud-circle"},
      [ 
        h(
          "path",
          {"d":"M16.5,16H8A3,3 0 0,1 5,13A3,3 0 0,1 8,10C8.05,10 8.09,10 8.14,10C8.58,8.28 10.13,7 12,7A4,4 0 0,1 16,11H16.5A2.5,2.5 0 0,1 19,13.5A2.5,2.5 0 0,1 16.5,16M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"}
        ) 
      ]
    )
  }
}