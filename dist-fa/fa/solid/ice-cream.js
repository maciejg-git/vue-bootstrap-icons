import { h } from 'vue'
export default {
  name: "IceCream",
  vendor: "Fa",
  render() {
    return h(
      "svg",
      { "xmlns": "http://www.w3.org/2000/svg","viewBox": "0 0 448 512","class": "fa-icon","fill": "currentColor","data-name": "fa-ice-cream" },
      [ h("path", { "d": "M368 160h-.94a144 144 0 1 0-286.12 0H80a48 48 0 0 0 0 96h288a48 48 0 0 0 0-96zM195.38 493.69a31.52 31.52 0 0 0 57.24 0L352 288H96z" }) ]
    )
  }
}