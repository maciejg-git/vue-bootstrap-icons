import { h } from 'vue'
export default {
  name: "TrendingNeutral",
  vendor: "Mdi",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","width": "24","height": "24","viewBox": "0 0 24 24","class": "mdi-icon","fill": "currentColor","data-name": "mdi-trending-neutral" },
      [ h("path", { "d": "M22,12L18,8V11H3V13H18V16L22,12Z" }) ]
    )
  }
}