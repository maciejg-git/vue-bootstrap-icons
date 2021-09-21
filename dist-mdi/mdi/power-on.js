import { h } from 'vue'
export default {
  name: "PowerOn",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon","fill": "currentColor","data-name": "mdi-power-on" },
      [ h("path", { "d": "M11,3H13V21H11V3Z" }) ]
    )
  }
}