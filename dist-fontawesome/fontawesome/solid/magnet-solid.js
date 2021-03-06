import { h } from 'vue'
export default {
  $_icon: {
    name: "Magnet",
    vendor: "Fa",
    type: "Solid",
    tags: ["magnet"],
  },
  render() {
    return h(
      "svg",
      {"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 448 512","fill":"currentColor","data-name":"fa-magnet"},
      [ 
        h(
          "path",
          {"d":"M128 160V256C128 309 170.1 352 224 352C277 352 320 309 320 256V160H448V256C448 379.7 347.7 480 224 480C100.3 480 0 379.7 0 256V160H128zM0 64C0 46.33 14.33 32 32 32H96C113.7 32 128 46.33 128 64V128H0V64zM320 64C320 46.33 334.3 32 352 32H416C433.7 32 448 46.33 448 64V128H320V64z"}
        ) 
      ]
    )
  }
}