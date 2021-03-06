import { h } from 'vue'
export default {
  $_icon: {
    name: "GripLines",
    vendor: "Fa",
    type: "Solid",
    tags: ["grip","lines"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 448 512","fill":"currentColor","data-name":"fa-grip-lines"},
      [ 
        h(
          "path",
          {"d":"M416 288C433.7 288 448 302.3 448 320C448 337.7 433.7 352 416 352H32C14.33 352 0 337.7 0 320C0 302.3 14.33 288 32 288H416zM416 160C433.7 160 448 174.3 448 192C448 209.7 433.7 224 416 224H32C14.33 224 0 209.7 0 192C0 174.3 14.33 160 32 160H416z"}
        ) 
      ]
    )
  }
}