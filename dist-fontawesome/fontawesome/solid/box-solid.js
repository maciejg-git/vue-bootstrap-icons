import { h } from 'vue'
export default {
  $_icon: {
    name: "Box",
    vendor: "Fa",
    type: "Solid",
    tags: ["box"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 448 512","fill":"currentColor","data-name":"fa-box"},
      [ 
        h(
          "path",
          {"d":"M50.73 58.53C58.86 42.27 75.48 32 93.67 32H208V160H0L50.73 58.53zM240 160V32H354.3C372.5 32 389.1 42.27 397.3 58.53L448 160H240zM448 416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V192H448V416z"}
        ) 
      ]
    )
  }
}