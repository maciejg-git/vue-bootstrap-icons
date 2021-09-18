import { h } from 'vue'
export default {
  name: "FloorPlan",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","xmlns:xlink": "http://www.w3.org/1999/xlink","version": "1.1","id": "mdi-floor-plan","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon" },
      [ h("path", { "d": "M10,5V10H9V5H5V13H9V12H10V17H9V14H5V19H12V17H13V19H19V17H21V21H3V3H21V15H19V10H13V15H12V9H19V5H10Z" }) ]
    )
  }
}