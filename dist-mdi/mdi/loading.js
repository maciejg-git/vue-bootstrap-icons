import { h } from 'vue'
export default {
  name: "Loading",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon","fill": "currentColor","data-name": "mdi-loading" },
      [ h("path", { "d": "M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" }) ]
    )
  }
}